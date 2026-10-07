:root {
  --bg: #0a1118;
  --bg-2: #101d2d;
  --panel: rgba(15, 24, 36, 0.9);
  --panel-soft: rgba(17, 31, 47, 0.86);
  --stroke: rgba(151, 171, 191, 0.22);
  --text: #ebf5ff;
  --muted: #a8bed3;
  --green: #3dd9a4;
  --green-soft: rgba(61, 217, 164, 0.14);
  --blue: #62a8ff;
  --purple: #8fa2ff;
  --shadow: rgba(2, 6, 10, 0.42);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(135deg, var(--bg), var(--bg-2));
  color: var(--text);
}

button,
input,
textarea {
  font: inherit;
}

.shell {
  max-width: 1300px;
  margin: 0 auto;
  padding: 24px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 26px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand-mark {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-weight: 700;
  background: linear-gradient(135deg, var(--green), var(--blue));
  color: #041017;
}

.eyebrow {
  margin: 0;
  color: var(--green);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

h1 {
  margin: 8px 0 0;
  font-size: clamp(2rem, 3vw, 3rem);
}

.layout {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 24px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--stroke);
  border-radius: 22px;
  box-shadow: 0 12px 32px var(--shadow);
}

.sidebar {
  padding: 18px;
}

.section-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.green {
  background: var(--green);
  box-shadow: 0 0 18px rgba(61, 217, 164, 0.7);
}

.flow-list {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: grid;
  gap: 12px;
}

.flow-item {
  display: flex;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid var(--stroke);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
}

.flow-item.active {
  background: rgba(61, 217, 164, 0.08);
  border-color: rgba(61, 217, 164, 0.35);
}

.step-num {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 0.78rem;
  font-weight: 700;
  background: rgba(98, 168, 255, 0.14);
  color: var(--blue);
}

.flow-item strong,
.flow-item p {
  display: block;
  margin: 0;
}

.flow-item p {
  margin-top: 4px;
  color: var(--muted);
  font-size: 0.82rem;
}

.prompt-box {
  border: 1px solid var(--stroke);
  border-radius: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.02);
}

.prompt-box h3 {
  margin: 0 0 12px;
}

textarea {
  width: 100%;
  border: 1px solid var(--stroke);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 12px 14px;
  resize: vertical;
  min-height: 220px;
}

.main-panel {
  padding: 22px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.panel-header h2,
.results-header h3 {
  margin: 0;
}

.status-pill {
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--green-soft);
  border: 1px solid rgba(61, 217, 164, 0.4);
  color: var(--green);
  font-weight: 700;
  font-size: 0.8rem;
}

.status-pill.lite {
  background: rgba(98, 168, 255, 0.12);
  border-color: rgba(98, 168, 255, 0.2);
  color: var(--blue);
}

.input-form {
  display: grid;
  gap: 18px;
  margin-bottom: 20px;
}

.field-group {
  display: grid;
  gap: 10px;
}

label {
  color: var(--muted);
  font-weight: 700;
  font-size: 0.92rem;
}

input {
  border: 1px solid var(--stroke);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  padding: 14px 16px;
  color: var(--text);
}

.button-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

button {
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease;
  background: linear-gradient(135deg, var(--green), var(--blue));
  color: #061018;
}

button:hover {
  transform: translateY(-1px);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border: 1px solid var(--stroke);
}

.ghost-btn {
  background: transparent;
  border: 1px solid var(--stroke);
  color: var(--text);
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.summary-card {
  background: var(--panel-soft);
  border: 1px solid var(--stroke);
  border-radius: 16px;
  padding: 16px;
  display: grid;
  gap: 8px;
}

.summary-card .label {
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.summary-card strong {
  font-size: 1.1rem;
}

.results-box {
  border: 1px solid var(--stroke);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  padding: 18px;
}

.results-header {
  margin-bottom: 18px;
}

.analysis-output {
  display: grid;
  gap: 18px;
}

.report-shell {
  display: grid;
  gap: 16px;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.report-grid {
  display: grid;
  gap: 18px;
}

.match-card {
  border: 1px solid var(--stroke);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 18px;
  padding: 18px;
}

.match-topline {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.match-topline h4 {
  margin: 0;
  font-size: 1.2rem;
}

.pill {
  border-radius: 999px;
  background: rgba(98, 168, 255, 0.12);
  border: 1px solid rgba(98, 168, 255, 0.2);
  color: var(--blue);
  padding: 6px 10px;
  font-size: 0.72rem;
  font-weight: 700;
}

.meta {
  color: var(--muted);
  margin: 10px 0 14px;
}

.prediction-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 14px;
}

.prediction-table th,
.prediction-table td {
  border-bottom: 1px solid var(--stroke);
  text-align: left;
  padding: 10px 0;
  vertical-align: top;
}

.prediction-table th {
  color: var(--muted);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.verdict {
  color: var(--green);
  font-weight: 700;
}

.correct-score-box,
.driver-box {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--stroke);
}

.score-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.score-list span {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--stroke);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.78rem;
}

.driver-box ul {
  margin: 10px 0 0;
  padding-left: 20px;
  color: var(--muted);
  line-height: 1.7;
}

.final-line {
  margin: 12px 0 0;
}

.empty-state {
  padding: 32px 20px;
  border: 1px dashed var(--stroke);
  border-radius: 16px;
  text-align: center;
  color: var(--muted);
}

.report-end {
  font-weight: 700;
  padding-top: 12px;
  border-top: 1px solid var(--stroke);
}

@media (max-width: 980px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
