# AI Scheme Finder

**Live demo:** https://azad3242.github.io/ai-scheme-finder/ or https://arshan3242.github.io/ai-scheme-finder/
(mirror) · **Code:** https://github.com/Azad3242/ai-scheme-finder

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
| Batana — tell | `js/matcher.js` scores `data/schemes.js` (193 schemes) on eligibility, keeps the top 3, and speaks the reply with `speechSynthesis` |

The model only ever extracts a profile. Schemes, amounts, offices and documents come from the
local data file, so the model cannot invent a scheme. That is the point worth making in viva.

### How the matching avoids nonsense

With 193 schemes, almost every record passes every filter, so a plain weighted sum returns noise.
`js/matcher.js` therefore requires **evidence**: a scheme must match the stated occupation, the
stated state, the gender, the age of a senior-only scheme, or a keyword the citizen actually used.
Keyword hits are weighted by how rare the word is across the file (`df()`), state names do not
count as keyword evidence (saying "Bihar" proves where you live, not what you need), short keywords
are matched on word boundaries so `sc` cannot match "scholarship", and a record with no evidence at
all is pushed below the cut-off. Each result card shows the reasons it ranked, so the scoring is
explainable on stage.

If the state or occupation is missing, the app asks exactly one follow-up question (voice + text),
then re-runs the match with both utterances — the activity diagram in the report.

## Hosting on GitHub Pages

Live at https://azad3242.github.io/ai-scheme-finder/ and mirrored at
https://arshan3242.github.io/ai-scheme-finder/. The local clone has two remotes, so one edit
publishes to both:

```
git push origin main
git push arshan main
```

Pages is configured on each repo as Source: branch `main`, folder `/ (root)`. No build step, no
workflow file, no dependencies. The `.nojekyll` file keeps Jekyll from touching the folder.

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
schemes.html    search, category / state / level filters over the whole database
profile.html    saved profile + fake application list
css/style.css   one stylesheet
js/app.js       localStorage session
js/speech.js    speech recognition + speech synthesis
js/nlu.js       Gemini profile extraction + keyword fallback
js/matcher.js   eligibility scoring + spoken reply
data/schemes.js 193 schemes as a plain JS array
tools/build_schemes.py  regenerates data/schemes.js from a 14-column text table
```

`data/schemes.js` is a JSON array assigned to `window.SCHEMES`. It is a `.js` file rather than
`.json` on purpose: Chrome blocks `fetch()` of local files, so a `.json` data file would break
option A above. The data itself is unchanged JSON.

The site has no build step; `tools/build_schemes.py` is only there so 193 schemes stay editable as
one line each. Run it after editing that file:

```
python tools/build_schemes.py   # rewrites data/schemes.js, nothing else
```
