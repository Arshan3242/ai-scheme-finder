const ASF = {
  keyName: "asf-gemini-key",
  userName: "asf-user",
  appsName: "asf-apps",

  getKey() {
    return localStorage.getItem(this.keyName) || "";
  },
  setKey(value) {
    const trimmed = (value || "").trim();
    if (trimmed) localStorage.setItem(this.keyName, trimmed);
    else localStorage.removeItem(this.keyName);
  },
  getUser() {
    try {
      return JSON.parse(localStorage.getItem(this.userName) || "null");
    } catch {
      return null;
    }
  },
  setUser(user) {
    localStorage.setItem(this.userName, JSON.stringify(user));
  },
  requireUser() {
    const user = this.getUser();
    if (!user) {
      location.href = "index.html";
      return null;
    }
    return user;
  },
  logout() {
    localStorage.removeItem(this.userName);
    location.href = "index.html";
  },
  getApps() {
    try {
      return JSON.parse(localStorage.getItem(this.appsName) || "[]");
    } catch {
      return [];
    }
  },
  addApp(entry) {
    const apps = this.getApps();
    apps.unshift(entry);
    localStorage.setItem(this.appsName, JSON.stringify(apps.slice(0, 20)));
  },
  t(lang, map) {
    return map[lang] || map.en;
  }
};

function setActiveNav(page) {
  document.querySelectorAll(".nav a").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === page);
  });
}
