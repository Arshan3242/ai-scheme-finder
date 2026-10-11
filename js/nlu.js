const NLU = {
  models: ["gemini-flash-latest", "gemini-2.5-flash", "gemini-2.0-flash"],

  // Keyword -> state, used when there is no Gemini key (and as a backstop when
  // the model returns an empty state).
  states: {
    Telangana: /telangana|hyderabad|warangal|khammam|nizamabad/,
    "Andhra Pradesh": /andhra|vijayawada|visakhapatnam|guntur|tirupati/,
    Haryana: /haryana|faridabad|gurugram|gurgaon|hisar|rohtak|panipat/,
    "Uttar Pradesh": /uttar pradesh|lucknow|kanpur|varanasi|agra|noida|meerut/,
    Maharashtra: /maharashtra|mumbai|pune|nagpur|nashik/,
    Karnataka: /karnataka|bengaluru|bangalore|mysuru|hubballi/,
    Kerala: /kerala|kochi|thiruvananthapuram|kozhikode/,
    Rajasthan: /rajasthan|jaipur|jodhpur|udaipur|kota/,
    "Madhya Pradesh": /madhya pradesh|\bmp\b|bhopal|indore|jabalpur/,
    Gujarat: /gujarat|ahmedabad|surat|rajkot/,
    "Tamil Nadu": /tamil nadu|chennai|coimbatore|madurai|trichy/,
    "West Bengal": /west bengal|kolkata|bengal|darjeeling/,
    Punjab: /punjab|ludhiana|amritsar|jalandhar/,
    Bihar: /bihar|patna|muzaffarpur|bhagalpur|bhojpur|darbhanga/,
    Odisha: /odisha|orissa|bhubaneswar|cuttack/,
    Jharkhand: /jharkhand|ranchi|jamshedpur|bokaro/,
    Chhattisgarh: /chhattisgarh|chhatisgarh|chatisgarh|raipur|bilaspur/,
    Delhi: /delhi|\bncr\b/,
    Assam: /assam|guwahati|dibrugarh/,
    Uttarakhand: /uttarakhand|dehradun|haridwar|haldwani|rudrapur/,
    "Himachal Pradesh": /himachal|shimla|mandi/,
    Goa: /goa|panaji/,
    Tripura: /tripura|agartala/,
    Manipur: /manipur|imphal/
  },

  fallback(text, user) {
    const raw = text || "";
    const t = raw.toLowerCase();
    const profile = {
      occupation: user.occupation || "unknown",
      gender: user.gender || "unknown",
      state: user.state || "",
      district: user.district || "",
      annual_income: user.annual_income ?? null,
      age: user.age ?? null,
      need: text,
      follow_up: null,
      reply_language: user.language || "hi",
      source: "keywords"
    };

    // The first cue that fires owns the profile: a sentence about a daughter's
    // wedding and a loan should be read as a wedding, not as a loan.
    const cues = [
      { re: /student|college|fees|12th|10th|scholarship|padhai|school|result|admission|course\b/, occ: "student", need: "education fees / scholarship" },
      { re: /pension|budhapa|old age|elderly|senior|budhape|retirement/, occ: "senior", need: "old age pension", age: 65 },
      { re: /\bwidow\b|widowed|deserted|pati ka (death|mrit|nidhan|gujar|cal)|husband (death|died|expired|nikal)|aghati|vinasa/, occ: "woman", need: "widow support", gender: "female" },
      { re: /\bwidower\b|single father/, need: "single parent support", gender: "male" },
      { re: /divyang|disab|handicap|blind|wheelchair|lohoit/, need: "disability support" },
      { re: /shadi|shaadi|vivah|marriage|dowry|kanyadan|upayanayan/, need: "marriage assistance" },
      { re: /solar|rooftop|bijli bill|electricity bill/, need: "solar power" },
      { re: /\bgas\b|lpg|ujjwala|chulha/, need: "LPG connection", gender: "female" },
      { re: /hospital|bimari|ayushman|ilaj|operation|dawai|medicine|cancer|dialysis|health/, need: "health cover" },
      { re: /ghar|house|awas|pucca|makaan|toilet|nal paani/, need: "housing" },
      { re: /apprentice|internship|placement|training|skill|\biti\b|kaushal/, occ: "student", need: "skill training or apprenticeship" },
      { re: /kisan|farmer|kheti|khet|acre|ekar|borewell|sinchai|pump|paani|irrigation|seed|bullock|cattle|pashu|kharif|rabi|khad|mitti|soil|fasal|crop/, occ: "farmer", need: "farm input and crop support" },
      { re: /loan|mudra|dukan|thela|vendor|business|startup|shg|sangh|udhyog/, occ: "worker", need: "livelihood loan" },
      { re: /mazdoor|labour|worker|factory|naukri|rozgar|berozgar|rojgar|kaam|wages?\b|teacher|tuition|padha/, occ: "worker", need: "job or wage work" }
    ];
    for (const cue of cues) {
      if (!cue.re.test(t)) continue;
      if (cue.occ) profile.occupation = cue.occ;
      if (cue.gender) profile.gender = cue.gender;
      if (cue.age) profile.age = profile.age || cue.age;
      profile.need = cue.need;
      break;
    }

    const said = this.stateOf(t) || this.acronymOf(raw);
    if (said) profile.state = said;
    if (/girl|ladki|beti|mahila|woman|female|behen|mata/.test(t)) profile.gender = "female";

    const marks = t.match(/(\d{2})\s*%/);
    if (marks) profile.marks = Number(marks[1]);

    // ₹2 lakh / 2 lac income, plain rupee figures, and age in years.
    const lakh = t.match(/(\d+(?:\.\d+)?)\s*(?:lakh|lac|laksh)/);
    if (lakh) profile.annual_income = Math.round(Number(lakh[1]) * 100000);
    else {
      const rupees = t.match(/(?:₹|rs\.?|rupee|rupay)\s*(\d{4,7})/);
      if (rupees) profile.annual_income = Number(rupees[1]);
    }
    const years = t.match(/(\d{2,3})\s*(?:saal|saal[ke]?\s*(?:ka|ki|ke)|years?\b)/);
    if (years) profile.age = Number(years[1]);
    if (profile.age >= 60 && profile.occupation === "unknown") {
      profile.occupation = "senior";
      profile.need = "senior citizen support";
    }

    if (!profile.state && !user.state) {
      profile.follow_up = user.language === "te"
        ? "Mee state eedi?"
        : user.language === "en"
          ? "Which state are you from?"
          : "Aap kaun se rajya se hain?";
    } else if (profile.occupation === "unknown" && !user.occupation) {
      profile.follow_up = user.language === "te"
        ? "Mee occupation emiti?"
        : user.language === "en"
          ? "What do you do — study, work, farming or is this for a senior?"
          : "Aap kya karte hain — padhai, naukri, kheti ya budhapa?";
    }
    return profile;
  },

  // Two-letter shorthand people type. Checked against the original case so a
  // spoken "up" in "grow up" does not become Uttar Pradesh.
  acronyms: {
    UP: "Uttar Pradesh", MP: "Madhya Pradesh", TN: "Tamil Nadu", TS: "Telangana",
    AP: "Andhra Pradesh", WB: "West Bengal", KL: "Kerala", MH: "Maharashtra",
    GJ: "Gujarat", RJ: "Rajasthan", PB: "Punjab", HR: "Haryana", UK: "Uttarakhand",
    JH: "Jharkhand", CG: "Chhattisgarh", DL: "Delhi"
  },

  acronymOf(text) {
    const m = String(text || "").match(/\b([A-Z]{2})\b/);
    return (m && this.acronyms[m[1]]) || "";
  },

  stateOf(text) {
    const t = (text || "").toLowerCase();
    return Object.keys(this.states).find((state) => this.states[state].test(t)) || "";
  },

  // Gemini may answer "telangana" or "Telanga" — snap it to a name the data uses.
  canonicalState(name) {
    const v = String(name || "").trim().toLowerCase();
    if (!v) return "";
    return Object.keys(this.states).find((state) => {
      const s = state.toLowerCase();
      return s === v || v.includes(s) || s.includes(v);
    }) || "";
  },

  // Age and state are the two fields Gemini most often leaves empty; the local
  // cues fill them in so state-scoped schemes still rank.
  tidy(profile, text, user) {
    const t = (text || "").toLowerCase();
    profile.state = this.canonicalState(profile.state) || this.stateOf(t) || this.acronymOf(text) || user.state || "";
    const years = t.match(/(\d{2,3})\s*(?:saal|saal[ke]?\s*(?:ka|ki|ke)|years?\b)/);
    if ((profile.age == null || profile.age === "") && years) profile.age = Number(years[1]);
    if (profile.age >= 60 && (!profile.occupation || profile.occupation === "unknown")) {
      profile.occupation = "senior";
    }
    return profile;
  },

  async extract(text, user) {
    const key = ASF.getKey();
    if (!key) {
      const profile = this.fallback(text, user);
      profile.source = "keywords-no-key";
      return profile;
    }

    const prompt = `You help Indian citizens find government schemes.
Extract a profile from the user's speech/text. The user may speak Hindi, Haryanvi, Telugu or English.
Return ONLY JSON with this shape:
{
  "occupation": "farmer|student|senior|woman|worker|unknown",
  "gender": "male|female|unknown",
  "state": "exactly one of: ${Object.keys(this.states).join(", ")} (empty if not stated)",
  "district": "",
  "annual_income": null,
  "age": null,
  "need": "short English description of the need",
  "follow_up": "one short question in the user's language if state/need is missing, else null",
  "reply_language": "hi|te|en"
}
Known user profile (may be incomplete): ${JSON.stringify({
      occupation: user.occupation,
      state: user.state,
      gender: user.gender,
      annual_income: user.annual_income,
      language: user.language
    })}
User said: """${text}"""`;

    const body = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: "application/json"
      }
    });
    let lastError = "Gemini request failed";
    for (const model of this.models) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-goog-api-key": key
            },
            body
          }
        );
        const data = await res.json();
        if (!res.ok) {
          lastError = data.error?.message || "Gemini request failed";
          continue;
        }
        const raw = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") || "";
        const parsed = JSON.parse(raw);
        return this.tidy({
          occupation: parsed.occupation || user.occupation || "unknown",
          gender: parsed.gender || user.gender || "unknown",
          state: parsed.state || "",
          district: parsed.district || "",
          annual_income: parsed.annual_income ?? user.annual_income ?? null,
          age: parsed.age ?? null,
          need: parsed.need || text,
          follow_up: parsed.follow_up || null,
          reply_language: parsed.reply_language || user.language || "hi",
          source: "gemini"
        }, text, user);
      } catch (err) {
        lastError = String(err.message || err);
      }
    }
    const profile = this.fallback(text, user);
    profile.source = "keywords";
    profile.error = lastError;
    return profile;
  }
};
