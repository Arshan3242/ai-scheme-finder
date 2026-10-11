const Matcher = {
  all() {
    return window.SCHEMES || [];
  },

  score(scheme, profile, transcript) {
    const el = scheme.eligibility;
    const text = `${transcript || ""} ${profile.need || ""}`.toLowerCase();
    let points = 0;

    if (el.occupations.includes(profile.occupation)) points += 40;
    else if (profile.occupation && profile.occupation !== "unknown") points -= 15;

    if (el.states.includes("all") || (profile.state && el.states.includes(profile.state))) points += 20;
    else if (el.states[0] !== "all" && profile.state) points -= 25;

    if (el.gender === "any" || el.gender === profile.gender) points += 10;
    else if (profile.gender && profile.gender !== "unknown") points -= 30;

    if (el.maxIncome == null || profile.annual_income == null) points += 5;
    else if (profile.annual_income <= el.maxIncome) points += 10;
    else points -= 20;

    if (el.minAge && profile.age && profile.age < el.minAge) points -= 20;

    const hits = (el.keywords || []).filter((k) => text.includes(k.toLowerCase()));
    points += hits.length * 8;
    return points;
  },

  match(profile, transcript, limit = 3) {
    return this.all()
      .map((scheme) => ({ scheme, score: this.score(scheme, profile, transcript) }))
      .filter((row) => row.score >= 25)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((row) => row.scheme);
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
