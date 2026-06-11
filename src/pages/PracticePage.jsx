import { useMetronome } from '../hooks/useMetronome';
import './PracticePage.css';

export function PracticePage() {
  const metronome = useMetronome();

  const practiceRoutines = [
    {
      name: 'Quick Warm-Up',
      duration: '10 min',
      steps: [
        'Chromatic exercises (60 BPM → 100 BPM)',
        'Spider exercise across all strings',
        'Legato slurs (hammer-ons / pull-offs)',
        'Stretching patterns (let all notes ring)'
      ]
    },
    {
      name: 'Chord Workout',
      duration: '15 min',
      steps: [
        'CAGED major shapes — ascend the neck',
        'CAGED minor shapes — descend the neck',
        'Seventh chord transformations (Maj7 → Dom7 → Min7)',
        'Drop 2 voicings through a ii-V-I progression'
      ]
    },
    {
      name: 'Scale Mastery',
      duration: '20 min',
      steps: [
        'Pentatonic patterns in all 5 positions',
        'Major scale sequences (groups of 3 and 4)',
        'Modal exploration — pick one mode, play in all positions',
        'Three-note-per-string speed building'
      ]
    },
    {
      name: 'Technique Builder',
      duration: '20 min',
      steps: [
        'Alternate picking — single string, then cross-string',
        'String skipping arpeggios',
        'Bending accuracy (use tuner for reference)',
        'Vibrato control — slow, wide vibrato'
      ]
    },
    {
      name: 'Improvisation Session',
      duration: '15 min',
      steps: [
        'Play over a backing track (any key)',
        'Focus on chord tones at strong beats',
        'Develop one motif through repetition/variation',
        'End with call-and-response phrasing'
      ]
    }
  ];

  return (
    <div className="practice-page">
      <div className="container">
        <div className="practice-page__header">
          <h1 className="practice-page__title">Practice Studio</h1>
          <p className="practice-page__subtitle">
            Tools and routines to make your practice sessions effective and focused.
          </p>
        </div>

        {/* Metronome */}
        <section className="metronome-section">
          <h2 className="section-title">🎵 Metronome</h2>
          <div className="metronome">
            <div className="metronome__display">
              <div className="metronome__beats">
                {Array.from({ length: metronome.beatsPerMeasure }, (_, i) => (
                  <div
                    key={i}
                    className={`metronome__beat-dot ${
                      metronome.isPlaying && metronome.beat === i ? 'metronome__beat-dot--active' : ''
                    } ${i === 0 ? 'metronome__beat-dot--accent' : ''}`}
                  />
                ))}
              </div>
              <div className="metronome__bpm">
                <span className="metronome__bpm-number">{metronome.bpm}</span>
                <span className="metronome__bpm-label">BPM</span>
              </div>
            </div>
            <div className="metronome__controls">
              <input
                type="range"
                min="40"
                max="220"
                value={metronome.bpm}
                onChange={(e) => metronome.setBpm(Number(e.target.value))}
                className="metronome__slider"
              />
              <div className="metronome__buttons">
                <button
                  className="metronome__btn metronome__btn--bpm"
                  onClick={() => metronome.setBpm(Math.max(40, metronome.bpm - 5))}
                >
                  -5
                </button>
                <button
                  className={`metronome__btn metronome__btn--play ${metronome.isPlaying ? 'playing' : ''}`}
                  onClick={metronome.toggle}
                >
                  {metronome.isPlaying ? '⏸' : '▶'}
                </button>
                <button
                  className="metronome__btn metronome__btn--bpm"
                  onClick={() => metronome.setBpm(Math.min(220, metronome.bpm + 5))}
                >
                  +5
                </button>
              </div>
              <div className="metronome__time-sig">
                <label className="metronome__label">Time Signature</label>
                <div className="metronome__time-buttons">
                  {[3, 4, 5, 6, 7].map(n => (
                    <button
                      key={n}
                      className={`metronome__time-btn ${metronome.beatsPerMeasure === n ? 'active' : ''}`}
                      onClick={() => metronome.setBeatsPerMeasure(n)}
                    >
                      {n}/4
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Routines */}
        <section className="routines-section">
          <h2 className="section-title">📋 Practice Routines</h2>
          <p className="section-subtitle">
            Structured practice sessions based on the curriculum. Start your metronome slow and increase tempo as you gain confidence.
          </p>
          <div className="routines-grid">
            {practiceRoutines.map((routine, i) => (
              <div key={i} className="routine-card">
                <div className="routine-card__header">
                  <h3 className="routine-card__title">{routine.name}</h3>
                  <span className="routine-card__duration">{routine.duration}</span>
                </div>
                <ol className="routine-card__steps">
                  {routine.steps.map((step, j) => (
                    <li key={j} className="routine-card__step">{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Tips */}
        <section className="tips-section">
          <h2 className="section-title">💡 Practice Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>Start Slow</h4>
              <p>Always begin at a tempo where you can play perfectly. Speed comes from accuracy, not the other way around.</p>
            </div>
            <div className="tip-card">
              <h4>Use a Metronome</h4>
              <p>Practicing without a metronome is like driving without a speedometer. Always play to a click or drum loop.</p>
            </div>
            <div className="tip-card">
              <h4>Short & Focused</h4>
              <p>30 minutes of focused practice beats 2 hours of noodling. Set clear goals for each session.</p>
            </div>
            <div className="tip-card">
              <h4>Record Yourself</h4>
              <p>Recording reveals problems you can't hear in the moment. Listen back critically and identify areas to improve.</p>
            </div>
            <div className="tip-card">
              <h4>Transpose Everything</h4>
              <p>All shapes in this curriculum are moveable. Practice every pattern in multiple keys to own the fretboard.</p>
            </div>
            <div className="tip-card">
              <h4>Rest & Recover</h4>
              <p>If you feel tension or pain, stop immediately. Take breaks every 25-30 minutes to prevent strain injuries.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
