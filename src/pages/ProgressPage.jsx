import { curriculum, getLevelLabel } from '../data/curriculum';
import './ProgressPage.css';

export function ProgressPage({ progressHook }) {
  const { progress, getLessonProgress, getOverallProgress, resetProgress } = progressHook;
  const overallProgress = getOverallProgress(curriculum);

  const totalTopics = curriculum.reduce((sum, l) => sum + l.topics.length, 0);
  const completedTopics = curriculum.reduce((sum, l) => {
    return sum + (progress[l.id]?.completedTopics?.length || 0);
  }, 0);

  const totalGoals = curriculum.reduce((sum, l) => sum + l.practiceGoals.length, 0);
  const completedGoals = curriculum.reduce((sum, l) => {
    return sum + (progress[l.id]?.completedGoals?.length || 0);
  }, 0);

  const startedLessons = curriculum.filter(l => progress[l.id]?.started).length;

  return (
    <div className="progress-page">
      <div className="container">
        <div className="progress-page__header">
          <h1 className="progress-page__title">Your Progress</h1>
          <p className="progress-page__subtitle">
            Track your journey from beginner to advanced guitarist.
          </p>
        </div>

        {/* Overview Stats */}
        <div className="stats-grid">
          <div className="stat-card stat-card--primary">
            <div className="stat-card__value">{overallProgress}%</div>
            <div className="stat-card__label">Overall Completion</div>
            <div className="progress-bar" style={{ marginTop: '12px' }}>
              <div className="progress-bar__fill" style={{ width: `${overallProgress}%` }}></div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__value">{completedTopics}/{totalTopics}</div>
            <div className="stat-card__label">Topics Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__value">{completedGoals}/{totalGoals}</div>
            <div className="stat-card__label">Goals Achieved</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__value">{startedLessons}/{curriculum.length}</div>
            <div className="stat-card__label">Lessons Started</div>
          </div>
        </div>

        {/* Per-Lesson Progress */}
        <section className="lesson-progress-section">
          <h2 className="section-title">📊 Lesson Breakdown</h2>
          <div className="lesson-progress-list">
            {curriculum.map(lesson => {
              const pct = getLessonProgress(lesson.id, lesson.topics.length);
              const topicsCompleted = progress[lesson.id]?.completedTopics?.length || 0;
              const goalsCompleted = progress[lesson.id]?.completedGoals?.length || 0;
              return (
                <div key={lesson.id} className="lesson-progress-item">
                  <div className="lesson-progress-item__info">
                    <span className={`badge badge--${lesson.level}`}>{getLevelLabel(lesson.level)}</span>
                    <h4 className="lesson-progress-item__title">{lesson.title}</h4>
                    <div className="lesson-progress-item__stats">
                      <span>{topicsCompleted}/{lesson.topics.length} topics</span>
                      <span>•</span>
                      <span>{goalsCompleted}/{lesson.practiceGoals.length} goals</span>
                    </div>
                  </div>
                  <div className="lesson-progress-item__bar">
                    <div className="progress-bar">
                      <div className="progress-bar__fill" style={{ width: `${pct}%` }}></div>
                    </div>
                    <span className="lesson-progress-item__pct">{pct}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Reset */}
        <section className="reset-section">
          <button className="reset-btn" onClick={() => {
            if (window.confirm('Reset all progress? This cannot be undone.')) {
              resetProgress();
            }
          }}>
            Reset All Progress
          </button>
        </section>
      </div>
    </div>
  );
}
