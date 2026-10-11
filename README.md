# AI Scheme Finder

Static, no-build website: speak or type a problem in Hindi / Telugu / English, then see 2–3 matching government schemes from a local JSON file.

Gemini Flash is used only to extract a profile (occupation, state, need). Eligibility still comes from `data/schemes.json`, so the model cannot invent schemes.

## Use it

1. Open the GitHub Pages URL (or `index.html` locally).
2. Paste your **own** Gemini API key on the login page. It is saved in `localStorage` on that browser only.
3. Login with any 10-digit mobile number and any 6-digit OTP (demo).
4. Press **MIC** (Chrome/Edge) or type a problem, for example:
   - `Mere 12th me 85% aaye hai, papa ke paas college fees nahi hai`
   - `Naku 2 ekaralu unnai, borewell kavali`
   - `Mujhe budhapa pension chahiye`

## What this demo does not do

- Real Aadhaar, DigiLocker, or SMS OTP
- Live data from myscheme.gov.in
- Form submission to government portals

Amounts and eligibility in `data/schemes.json` are illustrative for a student project.

## Files

No npm. No backend.

```
index.html      login
home.html       MIC + results
profile.html    saved profile
schemes.html    browse JSON
js/             storage, speech, Gemini, matcher
data/schemes.json
```

## Security

Never commit an API key. If a key was pasted in chat, Git, or a screenshot, rotate it in Google AI Studio / Cloud Console.
