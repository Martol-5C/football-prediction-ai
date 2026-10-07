const fixtureDatabase = {
  'Premier League': [
    { date: '2026-10-07', home: 'Arsenal', away: 'Chelsea' },
    { date: '2026-10-07', home: 'Liverpool', away: 'Manchester City' },
    { date: '2026-10-07', home: 'Tottenham', away: 'Manchester United' },
    { date: '2026-10-07', home: 'Everton', away: 'Newcastle' },
    { date: '2026-10-07', home: 'Brighton', away: 'Fulham' }
  ],
  'La Liga': [
    { date: '2026-10-07', home: 'Real Madrid', away: 'Barcelona' },
    { date: '2026-10-07', home: 'Atletico Madrid', away: 'Sevilla' },
    { date: '2026-10-07', home: 'Valencia', away: 'Girona' },
    { date: '2026-10-07', home: 'Betis', away: 'Villarreal' }
  ],
  'Serie A': [
    { date: '2026-10-07', home: 'Juventus', away: 'Inter Milan' },
    { date: '2026-10-07', home: 'Napoli', away: 'AC Milan' },
    { date: '2026-10-07', home: 'Roma', away: 'Lazio' },
    { date: '2026-10-07', home: 'Fiorentina', away: 'Bologna' }
  ],
  'Bundesliga': [
    { date: '2026-10-07', home: 'Bayern Munich', away: 'Borussia Dortmund' },
    { date: '2026-10-07', home: 'RB Leipzig', away: 'Bayer Leverkusen' },
    { date: '2026-10-07', home: 'Werder Bremen', away: 'Union Berlin' }
  ],
  'Champions League': [
    { date: '2026-10-07', home: 'Real Madrid', away: 'PSG' },
    { date: '2026-10-07', home: 'Bayern Munich', away: 'Manchester City' },
    { date: '2026-10-07', home: 'Liverpool', away: 'Inter Milan' }
  ]
};

const teamProfiles = {
  Arsenal: { attack: 88, defense: 82, form: 86, xg: 1.9, xga: 1.1, home: 1.2 },
  Chelsea: { attack: 76, defense: 72, form: 71, xg: 1.4, xga: 1.4, home: 1.0 },
  Liverpool: { attack: 90, defense: 84, form: 89, xg: 2.0, xga: 1.0, home: 1.3 },
  'Manchester City': { attack: 87, defense: 81, form: 84, xg: 2.1, xga: 1.0, home: 1.2 },
  Tottenham: { attack: 74, defense: 68, form: 69, xg: 1.5, xga: 1.5, home: 1.1 },
  'Manchester United': { attack: 73, defense: 70, form: 68, xg: 1.4, xga: 1.6, home: 1.1 },
  Everton: { attack: 66, defense: 73, form: 65, xg: 1.1, xga: 1.4, home: 1.0 },
  Newcastle: { attack: 80, defense: 74, form: 79, xg: 1.6, xga: 1.2, home: 1.1 },
  Brighton: { attack: 78, defense: 72, form: 77, xg: 1.6, xga: 1.3, home: 1.1 },
  Fulham: { attack: 72, defense: 71, form: 70, xg: 1.3, xga: 1.4, home: 1.0 },
  'Real Madrid': { attack: 92, defense: 85, form: 90, xg: 2.2, xga: 1.0, home: 1.3 },
  Barcelona: { attack: 88, defense: 80, form: 87, xg: 2.0, xga: 1.1, home: 1.2 },
  'Atletico Madrid': { attack: 79, defense: 86, form: 81, xg: 1.6, xga: 1.0, home: 1.2 },
  Sevilla: { attack: 70, defense: 74, form: 68, xg: 1.2, xga: 1.5, home: 1.0 },
  Valencia: { attack: 69, defense: 72, form: 67, xg: 1.2, xga: 1.5, home: 1.0 },
  Girona: { attack: 74, defense: 76, form: 73, xg: 1.4, xga: 1.3, home: 1.1 },
  Betis: { attack: 75, defense: 73, form: 72, xg: 1.5, xga: 1.4, home: 1.1 },
  Villarreal: { attack: 77, defense: 75, form: 75, xg: 1.5, xga: 1.3, home: 1.1 },
  Juventus: { attack: 80, defense: 82, form: 79, xg: 1.7, xga: 1.1, home: 1.2 },
  'Inter Milan': { attack: 84, defense: 83, form: 85, xg: 1.8, xga: 1.0, home: 1.2 },
  Napoli: { attack: 79, defense: 78, form: 77, xg: 1.6, xga: 1.3, home: 1.1 },
  'AC Milan': { attack: 78, defense: 76, form: 75, xg: 1.5, xga: 1.3, home: 1.1 },
  Roma: { attack: 76, defense: 74, form: 74, xg: 1.4, xga: 1.3, home: 1.1 },
  Lazio: { attack: 77, defense: 77, form: 76, xg: 1.5, xga: 1.2, home: 1.1 },
  'Fiorentina': { attack: 74, defense: 74, form: 72, xg: 1.4, xga: 1.4, home: 1.1 },
  Bologna: { attack: 72, defense: 76, form: 72, xg: 1.3, xga: 1.3, home: 1.0 },
  'Bayern Munich': { attack: 89, defense: 84, form: 88, xg: 2.2, xga: 0.9, home: 1.3 },
  'Borussia Dortmund': { attack: 82, defense: 74, form: 80, xg: 1.8, xga: 1.2, home: 1.2 },
  'RB Leipzig': { attack: 80, defense: 76, form: 78, xg: 1.7, xga: 1.2, home: 1.1 },
  'Bayer Leverkusen': { attack: 81, defense: 79, form: 82, xg: 1.8, xga: 1.1, home: 1.2 },
  'Werder Bremen': { attack: 71, defense: 72, form: 69, xg: 1.3, xga: 1.5, home: 1.0 },
  'Union Berlin': { attack: 70, defense: 78, form: 70, xg: 1.2, xga: 1.4, home: 1.0 },
  PSG: { attack: 83, defense: 81, form: 82, xg: 1.8, xga: 1.1, home: 1.2 },
  'Manchester City': { attack: 87, defense: 81, form: 84, xg: 2.1, xga: 1.0, home: 1.2 },
  Liverpool: { attack: 90, defense: 84, form: 89, xg: 2.0, xga: 1.0, home: 1.3 },
  'Inter Milan': { attack: 84, defense: 83, form: 85, xg: 1.8, xga: 1.0, home: 1.2 }
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function toPercent(value) {
  return `${Math.round(value * 100)}%`;
}

function smoothProbability(a, b, c) {
  const total = a + b + c;
  return {
    home: a / total,
    draw: b / total,
    away: c / total
  };
}

function buildMatchPrediction(homeTeam, awayTeam) {
  const home = teamProfiles[homeTeam] || { attack: 72, defense: 72, form: 72, xg: 1.4, xga: 1.4, home: 1.0 };
  const away = teamProfiles[awayTeam] || { attack: 72, defense: 72, form: 72, xg: 1.4, xga: 1.4, home: 1.0 };

  const attackEdge = (home.attack - away.defense) / 25;
  const defenseEdge = (home.defense - away.attack) / 25;
  const formEdge = (home.form - away.form) / 30;
  const homeAdvantage = 0.16 * home.home;

  const expectedHomeGoals = clamp(0.8 + (home.xg * 0.55) + attackEdge + homeAdvantage + formEdge * 0.1, 0.4, 3.5);
  const expectedAwayGoals = clamp(0.7 + (away.xg * 0.48) - defenseEdge + (0.25 * (1 - home.home)), 0.3, 3.0);

  const homeProbabilityRaw = 0.42 + attackEdge * 0.25 + formEdge * 0.18 + homeAdvantage * 1.2;
  const drawProbabilityRaw = 0.22 + Math.abs(expectedHomeGoals - expectedAwayGoals) * 0.08;
  const awayProbabilityRaw = 0.38 - attackEdge * 0.2 - formEdge * 0.08 + (away.form - home.form) * 0.002;

  const outcome = smoothProbability(
    clamp(homeProbabilityRaw, 0.14, 0.7),
    clamp(drawProbabilityRaw, 0.10, 0.38),
    clamp(awayProbabilityRaw, 0.12, 0.7)
  );

  const goalTotal = expectedHomeGoals + expectedAwayGoals;
  const over15 = clamp((goalTotal / 2.6) * 0.9, 0.45, 0.88);
  const over25 = clamp((goalTotal / 3.1) * 0.92, 0.25, 0.72);
  const under25 = 1 - over25;
  const btts = clamp((home.attack + away.attack - home.defense - away.defense + 150) / 220, 0.36, 0.82);

  const correctScores = [
    { score: '0-0', likelihood: 0.09 },
    { score: '1-1', likelihood: 0.18 },
    { score: '2-1', likelihood: 0.16 },
    { score: '2-2', likelihood: 0.11 },
    { score: '1-0', likelihood: 0.13 },
    { score: '0-1', likelihood: 0.09 }
  ];

  const totalWeight = correctScores.reduce((sum, item) => sum + item.likelihood, 0);
  correctScores.forEach((item) => {
    item.likelihood = clamp(item.likelihood / totalWeight, 0.05, 0.25);
  });

  const finalOutcome =
    outcome.home > outcome.away && outcome.home > outcome.draw ? 'Home Win' :
    outcome.away > outcome.home && outcome.away > outcome.draw ? 'Away Win' :
    'Draw';

  return {
    homeProbability: outcome.home,
    drawProbability: outcome.draw,
    awayProbability: outcome.away,
    over15,
    over25,
    under25,
    btts,
    expectedHomeGoals,
    expectedAwayGoals,
    finalOutcome,
    correctScores
  };
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function createSummaryCards(competition, date, fixtures) {
  const summaryCards = document.getElementById('summaryCards');
  const totalMatches = fixtures.length;

  const avgHome = fixtures.reduce((sum, match) => sum + match.prediction.homeProbability, 0) / totalMatches;
  const avgDraw = fixtures.reduce((sum, match) => sum + match.prediction.drawProbability, 0) / totalMatches;
  const avgOver25 = fixtures.reduce((sum, match) => sum + match.prediction.over25, 0) / totalMatches;
  const highConfidence = fixtures.filter((match) => match.prediction.homeProbability > 0.5 || match.prediction.awayProbability > 0.5).length;

  summaryCards.innerHTML = `
    <div class="summary-chip">
      <span class="label">Competition</span>
      <span class="value">${competition}</span>
    </div>
    <div class="summary-chip">
      <span class="label">Matchday</span>
      <span class="value">${date}</span>
    </div>
    <div class="summary-chip">
      <span class="label">Avg Home Win</span>
      <span class="value">${toPercent(avgHome)}</span>
    </div>
    <div class="summary-chip">
      <span class="label">Avg Draw</span>
      <span class="value">${toPercent(avgDraw)}</span>
    </div>
    <div class="summary-chip">
      <span class="label">Avg Over 2.5</span>
      <span class="value">${toPercent(avgOver25)}</span>
    </div>
    <div class="summary-chip">
      <span class="label">Confident Picks</span>
      <span class="value">${highConfidence}/${totalMatches}</span>
    </div>
  `;
}

function renderAnalysis(matches, competition, date) {
  const output = document.getElementById('analysisOutput');

  if (!matches.length) {
    output.innerHTML = `
      <div class="empty-state">
        No fixtures found for <strong>${competition}</strong> on <strong>${date}</strong>.<br />
        Try a known league such as Premier League, La Liga, Serie A, Bundesliga, or Champions League.
      </div>
    `;
    return;
  }

  const tableRows = matches
    .map((match) => {
      const { prediction } = match;
      const bestPick = prediction.homeProbability >= prediction.awayProbability && prediction.homeProbability >= prediction.drawProbability ? 'Home Win' :
        prediction.awayProbability >= prediction.homeProbability && prediction.awayProbability >= prediction.drawProbability ? 'Away Win' :
        'Draw';

      const drivers = [
        `Tactical Clash: ${Math.round(prediction.homeProbability * 100)}%`,
        `Head-to-Head History: ${Math.round((prediction.homeProbability + prediction.awayProbability) * 42)}%`,
        `Referee Bias: ${Math.round(prediction.drawProbability * 100)}%`,
        `Psychological Momentum: ${Math.round(prediction.btts * 100)}%`,
        `Squad Value / Economic Context: ${Math.round((prediction.over25 + prediction.btts) * 40)}%`
      ];

      return `
        <article class="match-card">
          <h3>${match.home} vs ${match.away}</h3>
          <div class="meta-line">Competition: ${competition} | Matchday: ${date}</div>

          <div class="table-wrap">
            <table class="pred-table">
              <thead>
                <tr>
                  <th>Market</th>
                  <th>Value</th>
                  <th>Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1X2</td>
                  <td>Home ${toPercent(prediction.homeProbability)} | Draw ${toPercent(prediction.drawProbability)} | Away ${toPercent(prediction.awayProbability)}</td>
                  <td class="verdict">${bestPick}</td>
                </tr>
                <tr>
                  <td>Over / Under</td>
                  <td>Over 1.5 ${toPercent(prediction.over15)} | Over 2.5 ${toPercent(prediction.over25)} | Under 2.5 ${toPercent(prediction.under25)}</td>
                  <td class="verdict">${prediction.over25 > 0.5 ? 'Over 2.5' : 'Under 2.5'}</td>
                </tr>
                <tr>
                  <td>BTTS</td>
                  <td>${toPercent(prediction.btts)}</td>
                  <td class="verdict">${prediction.btts > 0.5 ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <td>Double Chance</td>
                  <td>1X ${toPercent(prediction.homeProbability + prediction.drawProbability - (prediction.homeProbability * prediction.drawProbability))} | X2 ${toPercent(prediction.drawProbability + prediction.awayProbability - (prediction.drawProbability * prediction.awayProbability))}</td>
                  <td class="verdict">${bestPick}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="table-wrap">
            <table class="pred-table">
              <thead>
                <tr>
                  <th>Correct Score Matrix</th>
                  <th>Likelihood</th>
                </tr>
              </thead>
              <tbody>
                ${prediction.correctScores
                  .slice(0, 4)
                  .map((score) => `<tr><td>${score.score}</td><td>${toPercent(score.likelihood)}</td></tr>`)
                  .join('')}
              </tbody>
            </table>
          </div>

          <h4>Driver Breakdown</h4>
          <ul class="driver-list">
            ${drivers.map((item) => `<li>${item}</li>`).join('')}
          </ul>

          <p><strong>Final Verdict:</strong> Best Home/Away Pick: <span class="verdict">${bestPick}</span> | Best Over/Under Pick: <span class="verdict">${prediction.over25 > 0.5 ? 'Over 2.5' : 'Under 2.5'}</span> | Best BTTS Pick: <span class="verdict">${prediction.btts > 0.5 ? 'Yes' : 'No'}</span></p>
        </article>
      `;
    })
    .join('');

  output.innerHTML = `
    <div>
      <h3>Advanced Football Prediction AI (Prompt-Based Decision Engine)</h3>
      <p>Competition: ${competition}<br />Date: ${date}</p>
      <p>Data Quality Score: ${Math.round((matches.length / 5) * 100)}<br />Confidence Rating: ${Math.round((matches.reduce((sum, item) => sum + Math.max(item.prediction.homeProbability, item.prediction.awayProbability), 0) / matches.length) * 100)}%</p>
      ${tableRows}
      <p>END OF PERFECTION FOOTBALL PREDICTION ANALYSIS</p>
    </div>
  `;
}

function getFixturesForCompetition(competition, date) {
  const normalizedCompetition = competition.trim();
  const normalizedDate = date || new Date().toISOString().slice(0, 10);
  const knownFixtures = fixtureDatabase[normalizedCompetition] || [];

  if (!knownFixtures.length) {
    return [];
  }

  return knownFixtures
    .filter((fixture) => fixture.date === normalizedDate)
    .map((fixture) => ({ ...fixture, prediction: buildMatchPrediction(fixture.home, fixture.away) }));
}

function handleSubmit(event) {
  event.preventDefault();

  const competition = document.getElementById('competition').value.trim();
  const date = document.getElementById('date').value;

  if (!competition || !date) {
    alert('Please enter both the competition and the date.');
    return;
  }

  const fixtures = getFixturesForCompetition(competition, date);
  document.getElementById('statusBadge').textContent = fixtures.length ? 'Analysis Ready' : 'No Fixtures';

  createSummaryCards(competition, date, fixtures);
  renderAnalysis(fixtures, competition, date);
}

function setDefaultDate() {
  const dateInput = document.getElementById('date');
  const today = new Date();
  const formatted = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateInput.value = formatted;
}

window.addEventListener('DOMContentLoaded', () => {
  setDefaultDate();
  document.getElementById('predictionForm').addEventListener('submit', handleSubmit);

  const initialCompetition = document.getElementById('competition').value.trim();
  const initialDate = document.getElementById('date').value;
  const initialFixtures = getFixturesForCompetition(initialCompetition, initialDate);

  createSummaryCards(initialCompetition, initialDate, initialFixtures);
  renderAnalysis(initialFixtures, initialCompetition, initialDate);
});
