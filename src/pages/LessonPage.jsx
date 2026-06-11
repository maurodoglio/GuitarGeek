import { useParams, Link } from 'react-router-dom';
import { curriculum, getLevelLabel } from '../data/curriculum';
import './LessonPage.css';

export function LessonPage({ progressHook }) {
  const { lessonId } = useParams();
  const lesson = curriculum.find(l => l.id === lessonId);
  const { progress, toggleTopic, toggleGoal, getLessonProgress } = progressHook;

  if (!lesson) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>Lesson not found</h2>
        <Link to="/" style={{ color: 'var(--color-primary)', marginTop: '16px', display: 'inline-block' }}>
          ← Back to lessons
        </Link>
      </div>
    );
  }

  const lessonProgress = progress[lessonId] || { completedTopics: [], completedGoals: [] };
  const completedTopics = lessonProgress.completedTopics || [];
  const completedGoals = lessonProgress.completedGoals || [];
  const progressPercent = getLessonProgress(lessonId, lesson.topics.length);

  const currentIndex = curriculum.findIndex(l => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? curriculum[currentIndex - 1] : null;
  const nextLesson = currentIndex < curriculum.length - 1 ? curriculum[currentIndex + 1] : null;

  return (
    <div className="lesson-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="lesson-page__breadcrumb">
          <Link to="/">Lessons</Link>
          <span>/</span>
          <span>{lesson.title}</span>
        </div>

        {/* Header */}
        <div className="lesson-page__header">
          <div className="lesson-page__header-info">
            <div className="lesson-page__meta">
              <span className={`badge badge--${lesson.level}`}>{getLevelLabel(lesson.level)}</span>
              <span className="lesson-page__duration">⏱ {lesson.duration}</span>
              <span className="lesson-page__chapter">Chapter {lesson.chapter}</span>
            </div>
            <h1 className="lesson-page__title">{lesson.title}</h1>
            <p className="lesson-page__description">{lesson.description}</p>
          </div>
          <div className="lesson-page__progress-ring">
            <svg viewBox="0 0 100 100" className="progress-ring">
              <circle cx="50" cy="50" r="42" className="progress-ring__bg" />
              <circle
                cx="50" cy="50" r="42"
                className="progress-ring__fill"
                style={{
                  strokeDasharray: `${2 * Math.PI * 42}`,
                  strokeDashoffset: `${2 * Math.PI * 42 * (1 - progressPercent / 100)}`
                }}
              />
            </svg>
            <span className="progress-ring__text">{progressPercent}%</span>
          </div>
        </div>

        {/* Objectives */}
        <section className="lesson-section">
          <h2 className="lesson-section__title">🎯 Learning Objectives</h2>
          <ul className="objectives-list">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="objectives-list__item">{obj}</li>
            ))}
          </ul>
        </section>

        {/* Topics */}
        <section className="lesson-section">
          <h2 className="lesson-section__title">📚 Topics</h2>
          <p className="lesson-section__subtitle">
            Check off topics as you work through them. Your progress is saved automatically.
          </p>
          <div className="topics-list">
            {lesson.topics.map((topic, i) => (
              <div
                key={i}
                className={`topic-item ${completedTopics.includes(i) ? 'topic-item--done' : ''}`}
                onClick={() => toggleTopic(lessonId, i)}
              >
                <div className="topic-item__checkbox">
                  {completedTopics.includes(i) ? '✓' : ''}
                </div>
                <div className="topic-item__content">
                  <h4 className="topic-item__name">{topic.name}</h4>
                  <p className="topic-item__description">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Goals */}
        <section className="lesson-section">
          <h2 className="lesson-section__title">🏆 Practice Goals</h2>
          <p className="lesson-section__subtitle">
            Milestone targets to confirm you've mastered this material.
          </p>
          <div className="goals-list">
            {lesson.practiceGoals.map((goal, i) => (
              <div
                key={i}
                className={`goal-item ${completedGoals.includes(i) ? 'goal-item--done' : ''}`}
                onClick={() => toggleGoal(lessonId, i)}
              >
                <div className="goal-item__checkbox">
                  {completedGoals.includes(i) ? '⭐' : '○'}
                </div>
                <span className="goal-item__text">{goal}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="lesson-nav">
          {prevLesson ? (
            <Link to={`/lesson/${prevLesson.id}`} className="lesson-nav__btn lesson-nav__btn--prev">
              <span className="lesson-nav__btn-arrow">←</span>
              <span className="lesson-nav__btn-text">{prevLesson.title}</span>
            </Link>
          ) : <div />}
          {nextLesson ? (
            <Link to={`/lesson/${nextLesson.id}`} className="lesson-nav__btn lesson-nav__btn--next">
              <span className="lesson-nav__btn-text">{nextLesson.title}</span>
              <span className="lesson-nav__btn-arrow">→</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
