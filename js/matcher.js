const Matcher = {
  _re: new Map(),
  _df: null,

  occLabel: {
    woman: "women",
    farmer: "farmers",
    student: "students",
    senior: "senior citizens",
    worker: "workers"
  },

  all() {
    return window.SCHEMES || [];
  },

  // How many schemes use a keyword: rare words are a stronger signal than
  // "health" or "kaam", which almost everything carries.
  df() {
    if (!this._df) {
      const counts = new Map();
      const states = new Set();
      this.all().forEach((s) => {
        (s.eligibility.keywords || []).forEach((k) => counts.set(k, (counts.get(k) || 0) + 1));
        (s.eligibility.states || []).forEach((st) => {
          if (st !== "all") states.add(st.toLowerCase());
        });
      });
      this._df = { counts, states };
    }
    return this._df;
  },

  matches(keyword, text) {
    const k = String(keyword).toLowerCase();
    let entry = this._re.get(k);
    if (!entry) {
      const esc = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      entry = { re: new RegExp(`(^|[^a-z0-9])${esc}([^a-z0-9]|$)`) };
      this._re.set(k, entry);
    }
    // Short keywords need word boundaries or "sc" matches "scholarship".
    return k.length <= 4 ? entry.re.test(text) : text.includes(k);
  },

  evaluate(scheme, profile, transcript) {
    const el = scheme.eligibility;
    const text = `${transcript || ""} ${profile.need || ""}`.toLowerCase();
    const occ = (profile.occupation || "").toLowerCase();
    const state = String(profile.state || "").trim().toLowerCase();
    const stateKnown = Boolean(state) && state !== "unknown";
    const inState = el.states.some((s) => s.toLowerCase() === state);
    const { counts, states } = this.df();
    let points = 0;
    const reasons = [];
    // With 190+ schemes nearly every record passes every filter, so a match only
    // ranks well when the citizen actually gave a signal for it.
    let evidence = 0;

    if (el.occupations.includes(occ)) {
      points += 45;
      evidence += 1;
      reasons.push(`open to ${this.occLabel[occ] || occ + "s"}`);
    } else if (occ && occ !== "unknown") {
      points -= 20;
    }

    if (el.states.includes("all")) {
      points += 10;
      reasons.push("all states");
    } else if (stateKnown && inState) {
      points += 35;
      evidence += 1;
      reasons.push(`${profile.state} only`);
    } else if (stateKnown) {
      points -= 40;
    } else {
      points += 5;
    }

    if (el.gender === "any") {
      points += 5;
    } else if (el.gender === profile.gender) {
      points += 20;
      evidence += 1;
      reasons.push(el.gender === "female" ? "for women" : `for ${el.gender}s`);
    } else if (profile.gender && profile.gender !== "unknown") {
      points -= 35;
    }

    if (el.maxIncome == null) {
      points += 5;
    } else if (profile.annual_income == null) {
      points += 3;
    } else if (profile.annual_income <= el.maxIncome) {
      points += 15;
      reasons.push(`income under Rs ${(el.maxIncome / 100000).toFixed(1)} lakh`);
    } else {
      points -= 30;
    }

    if (el.minAge && profile.age) {
      if (profile.age < el.minAge) {
        points -= 30;
      } else {
        points += 5;
        reasons.push(`age ${el.minAge}+`);
        // Being old enough for a senior-only scheme is itself a signal.
        if (el.minAge >= 60) {
          points += 20;
          evidence += 1;
        }
      }
    }

    // A state name in the query only proves which state, not what is needed, so
    // those words are not counted as keyword evidence here.
    const hits = (el.keywords || [])
      .filter((k) => !states.has(String(k).toLowerCase()) && this.matches(k, text))
      .map((k) => {
        const used = counts.get(k) || 1;
        return { keyword: k, weight: used <= 2 ? 22 : used <= 6 ? 16 : 10 };
      })
      .sort((a, b) => b.weight - a.weight);
    if (hits.length) {
      const top = hits.slice(0, 3);
      points += top.reduce((sum, h) => sum + h.weight, 0);
      evidence += 1;
      reasons.push(`you said: ${top.map((h) => h.keyword).join(", ")}`);
    }

    if (!hits.length && evidence) points -= 18;
    if (!evidence) points -= 45;
    return { points, reasons };
  },

  score(scheme, profile, transcript) {
    return this.evaluate(scheme, profile, transcript).points;
  },

  ranked(profile, transcript, limit = 3) {
    return this.all()
      .map((scheme) => {
        const row = this.evaluate(scheme, profile, transcript);
        return { scheme, score: row.points, reasons: row.reasons };
      })
      .filter((row) => row.score >= 38)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  },

  match(profile, transcript, limit = 3) {
    return this.ranked(profile, transcript, limit).map((row) => row.scheme);
  },

  replyText(schemes, profile) {
    const lang = profile.reply_language || "hi";
    if (!schemes.length) {
      return lang === "en"
        ? "I could not find a matching scheme yet. Please add your state, occupation or income."
        : lang === "te"
          ? "Ippudu sariaina scheme kanipinchaledu. Mee state, occupation, income cheppandi."
          : "Abhi koi sahi yojana nahi mili. Apna rajya, kaam aur aamdani bataiye.";
    }
    const lines = schemes.map((s, i) => `${i + 1}. ${s.name}: ${s.benefit}. Apply: ${s.applyAt}. Documents: ${s.documents.join(", ")}.`);
    if (lang === "en") return `You may be eligible for these schemes. ${lines.join(" ")}`;
    if (lang === "te") return `Mee kosam ee schemes fit avvacchu. ${lines.join(" ")}`;
    return `Aap in yojanaon ke liye yogya ho sakte hain. ${lines.join(" ")}`;
  }
};
