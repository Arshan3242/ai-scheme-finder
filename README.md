# AI Scheme Finder

**Live demo:** https://azad3242.github.io/ai-scheme-finder/ · **Code:** https://github.com/Azad3242/ai-scheme-finder

Static, no-build, no-npm website for the "AI Scheme Finder" project: a citizen speaks or types a
problem in Hindi / Telugu / English, and the app replies with 2–3 government schemes they are
eligible for — the amount, the office to visit, and the documents to carry.

It follows the report's three steps: **Bolna** (speak) → **Samajhna** (understand) → **Batana** (tell).

## Run it

Option A — no server at all: double-click `index.html`. Everything (matching, profile, text to
speech) works offline; only the microphone needs a network.

Option B — local server, needed for a real mic prompt in some browsers:

```
python -m http.server 8137
# then open http://127.0.0.1:8137/index.html
```

Option C — GitHub Pages, see "Hosting" below.

## Use it

1. (Optional) paste your **own** Gemini API key on the login page. It is saved in `localStorage`
   on that browser only, and is never sent anywhere except Google's API.
2. Login with any 10-digit mobile number and any 6-digit OTP (demo).
3. Press **MIC** (Chrome/Edge) or type a problem, then read or listen to the answer.

## How the three steps work

| Step | Implementation |
| --- | --- |
| Bolna — speak | Web Speech API `SpeechRecognition` (`js/speech.js`), with a text box fallback for noisy rooms |
| Samajhna — understand | `js/nlu.js`: one Gemini Flash call that returns a JSON profile (occupation, state, gender, income, age, need). With no key, or if the call fails, a keyword + regex fallback in the same file takes over |
| Batana — tell | `js/matcher.js` scores `data/schemes.js` on eligibility, keeps the top 3, and speaks the reply with `speechSynthesis` |

The model only ever extracts a profile. Schemes, amounts, offices and documents come from the
local data file, so the model cannot invent a scheme. That is the point worth making in viva.

If the state is missing, the app asks exactly one follow-up question (voice + text), then re-runs
the match with both utterances — the activity diagram in the report.

## Hosting on GitHub Pages

Already live at https://azad3242.github.io/ai-scheme-finder/. To redeploy after an edit, just push:

```
git push origin main
```

Pages is configured as Source: branch `main`, folder `/ (root)`. No build step, no workflow file,
no dependencies. The `.nojekyll` file keeps Jekyll from touching the folder.

## Security

- Never commit an API key. The key lives in the browser's `localStorage`, entered by the demo user.
- If a key was ever pasted into chat, Git history, or a screenshot, **rotate it** in Google AI
  Studio / Cloud Console and re-issue it.
- `X-goog-api-key` from a browser is allowed by Google's CORS policy, which is why a static site
  can call Gemini directly — but it also means anyone with the key can spend on that quota. Use a
  key with a billing cap, or drop the key and demo the keyword path.

## What this demo does not do

- Real Aadhaar, DigiLocker, or SMS OTP — the masked Aadhaar is sample text
- Live scraping of myscheme.gov.in; FAISS / pgvector semantic search
- Form submission to any government portal

Amounts and eligibility in `data/schemes.js` are illustrative for a student project. These are the
production components listed in section 7 of the report, kept as future work.

## Files

```
index.html      login (language, mobile, demo OTP, optional Gemini key)
home.html       MIC + "You said" + scheme cards + Apply
schemes.html    browse the local scheme database
profile.html    saved profile + fake application list
css/style.css   one stylesheet
js/app.js       localStorage session
js/speech.js    speech recognition + speech synthesis
js/nlu.js       Gemini profile extraction + keyword fallback
js/matcher.js   eligibility scoring + spoken reply
data/schemes.js 18 schemes as a plain JS array
```

`data/schemes.js` is a JSON array assigned to `window.SCHEMES`. It is a `.js` file rather than
`.json` on purpose: Chrome blocks `fetch()` of local files, so a `.json` data file would break
option A above. The data itself is unchanged JSON.
