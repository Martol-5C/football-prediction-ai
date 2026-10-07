# Football Prediction AI

This project is a beginner-friendly football prediction app built with plain HTML, CSS, and JavaScript. It does not require an API key and works completely on the client side.

## What it does

- Accepts a league/competition and a date
- Uses a built-in football fixture dataset and match-analysis logic inspired by your custom AI prompt
- Produces prediction tables similar to your required format:
  - Best Home/Away picks
  - Draw probability
  - Over/Under probabilities
  - BTTS picks
  - Correct score matrix
  - Double chance summary
- Shows a step-by-step football analysis section for each fixture

## How to run it

### Option 1: Open directly in browser

1. Download or clone the project
2. Open `index.html` in a browser
3. Enter a competition such as:
   - Premier League
   - La Liga
   - Serie A
   - Bundesliga
   - Champions League
4. Pick a date
5. Click "Run AI Prediction"

### Option 2: Run a local web server

From the project folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Notes

- This is a no-API prototype designed for learning and experimentation.
- The logic is rule-based and uses local team ratings to simulate an AI-style prediction engine.
- You can later upgrade this by connecting it to a real AI service or a live football data API.

## Files

- `index.html` – app structure
- `styles.css` – styling
- `app.js` – prediction logic and fixture generation

## Example inputs

- League: `Premier League`
- Date: `2026-10-07`

## Customization ideas

You can extend the project by adding:

- Real football API data
- Match filters by round or competition
- Odds integration
- Team search and lineup simulation
- AI API integration (OpenAI, Gemini, Hugging Face)
- More detailed betting market calculations

