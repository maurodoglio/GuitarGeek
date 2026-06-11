import { Link } from 'react-router-dom';
import { curriculum, getLevelLabel } from '../data/curriculum';
import './HomePage.css';

export function HomePage({ progressHook }) {
  const { getLessonProgress, getOverallProgress } = progressHook;
  const overallProgress = getOverallProgress(curriculum);

  const beginnerLessons = curriculum.filter(l => l.level === 'beginner');
  const intermediateLessons = curriculum.filter(l => l.level === 'intermediate');
  const advancedLessons = curriculum.filter(l => l.level === 'advanced');

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              Master Guitar<br />
              <span className="hero__title-accent">Technique</span>
            </h1>
            <p className="hero__subtitle">
              A structured learning path from fretboard fundamentals to advanced improvisation.
              13 comprehensive modules covering chords, scales, arpeggios, and physical technique.
            </p>
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">13</span>
                <span className="hero__stat-label">Modules</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">90+</span>
                <span className="hero__stat-label">Topics</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">{overallProgress}%</span>
                <span className="hero__stat-label">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Sections */}
      <section className="curriculum">
        <div className="container">
          <LevelSection
            title="Foundation"
            subtitle="Build your core knowledge"
            level="beginner"
            lessons={beginnerLessons}
            getLessonProgress={getLessonProgress}
          />
          <LevelSection
            title="Development"
            subtitle="Expand your vocabulary and technique"
            level="intermediate"
            lessons={intermediateLessons}
            getLessonProgress={getLessonProgress}
          />
          <LevelSection
            title="Mastery"
            subtitle="Advanced concepts and artistic expression"
            level="advanced"
            lessons={advancedLessons}
            getLessonProgress={getLessonProgress}
          />
        </div>
      </section>
    </div>
  );
}

function LevelSection({ title, subtitle, level, lessons, getLessonProgress }) {
  return (
    <div className="level-section">
      <div className="level-section__header">
        <div>
          <h2 className="level-section__title">{title}</h2>
          <p className="level-section__subtitle">{subtitle}</p>
        </div>
        <span className={`badge badge--${level}`}>{getLevelLabel(level)}</span>
      </div>
      <div className="lesson-grid">
        {lessons.map((lesson, i) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            progress={getLessonProgress(lesson.id, lesson.topics.length)}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

function LessonCard({ lesson, progress, index }) {
  return (
    <Link
      to={`/lesson/${lesson.id}`}
      className="lesson-card animate-in"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="lesson-card__header">
        <span className="lesson-card__chapter">Chapter {lesson.chapter}</span>
        <span className={`badge badge--${lesson.level}`}>{lesson.duration}</span>
      </div>
      <h3 className="lesson-card__title">{lesson.title}</h3>
      <p className="lesson-card__description">{lesson.description}</p>
      <div className="lesson-card__footer">
        <span className="lesson-card__topics">{lesson.topics.length} topics</span>
        <div className="progress-bar" style={{ flex: 1, maxWidth: '120px' }}>
          <div className="progress-bar__fill" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="lesson-card__percent">{progress}%</span>
      </div>
    </Link>
  );
}
