const Speech = {
  rec: null,
  listening: false,

  supported() {
    return "webkitSpeechRecognition" in window || "SpeechRecognition" in window;
  },

  langCode(lang) {
    return { hi: "hi-IN", te: "te-IN", en: "en-IN" }[lang] || "hi-IN";
  },

  listen(lang) {
    return new Promise((resolve, reject) => {
      const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!Ctor) {
        reject(new Error("Speech recognition needs Chrome or Edge."));
        return;
      }
      if (this.rec) this.rec.abort();
      const rec = new Ctor();
      this.rec = rec;
      rec.lang = this.langCode(lang);
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      rec.onresult = (e) => {
        this.listening = false;
        resolve(e.results[0][0].transcript);
      };
      rec.onerror = (e) => {
        this.listening = false;
        reject(new Error(e.error || "mic failed"));
      };
      rec.onend = () => {
        this.listening = false;
      };
      this.listening = true;
      rec.start();
    });
  },

  speak(text, lang) {
    if (!window.speechSynthesis || !text) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = this.langCode(lang);
    u.rate = 0.95;
    window.speechSynthesis.speak(u);
  }
};
