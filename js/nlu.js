const NLU = {
  models: ["gemini-flash-latest", "gemini-2.5-flash", "gemini-2.0-flash"],

  fallback(text, user) {
    const t = (text || "").toLowerCase();
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

    if (/kisan|farmer|kheti|acre|ekar|borewell|sinchai|pump|paani|irrigation/.test(t)) {
      profile.occupation = "farmer";
      profile.need = "irrigation / farm support";
    }
    if (/student|college|fees|12th|scholarship|padhai|school|girl/.test(t)) {
      profile.occupation = "student";
      profile.need = "education fees / scholarship";
    }
    if (/pension|budhapa|old age|elderly|senior|budhape/.test(t)) {
      profile.occupation = "senior";
      profile.age = profile.age || 65;
      profile.need = "old age pension";
    }
    if (/ghar|house|awas|pucca|makaan/.test(t)) profile.need = "housing";
    if (/gas|lpg|ujjwala|chulha/.test(t)) {
      profile.gender = "female";
      profile.need = "LPG connection";
    }
    if (/hospital|bimari|ayushman|ilaj|operation/.test(t)) profile.need = "health cover";
    if (/loan|mudra|dukan|thela|vendor/.test(t)) {
      profile.occupation = profile.occupation === "unknown" ? "worker" : profile.occupation;
      profile.need = "livelihood loan";
    }

    if (/telangana|hyderabad|warangal/.test(t)) profile.state = "Telangana";
    if (/haryana|faridabad|gurugram|gurgaon|hisar/.test(t)) profile.state = "Haryana";
    if (/girl|ladki|beti|mahila/.test(t)) profile.gender = "female";

    const marks = t.match(/(\d{2})\s*%/);
    if (marks) profile.marks = Number(marks[1]);
    if (!profile.state && !user.state) {
      profile.follow_up = user.language === "te"
        ? "Mee state eedi?"
        : user.language === "en"
          ? "Which state are you from?"
          : "Aap kaun se rajya se hain?";
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
  "state": "Indian state name or empty",
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
        return {
          occupation: parsed.occupation || user.occupation || "unknown",
          gender: parsed.gender || user.gender || "unknown",
          state: parsed.state || user.state || "",
          district: parsed.district || "",
          annual_income: parsed.annual_income ?? user.annual_income ?? null,
          age: parsed.age ?? user.age ?? null,
          need: parsed.need || text,
          follow_up: parsed.follow_up || null,
          reply_language: parsed.reply_language || user.language || "hi",
          source: "gemini"
        };
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
