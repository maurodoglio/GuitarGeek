import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { curriculum, getLevelLabel } from '../data/curriculum';
import { getLessonContent } from '../data/lessons/index';
import './LessonPage.css';

function LessonContent({ content }) {
  if (!content) return null;

  const lines = content.trim().split('\n');
  const elements = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code blocks
    if (line.trim().startsWith('```')) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre key={key++} className="lesson-content__code">
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
      continue;
    }

    // Headers
    if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} className="lesson-content__h2">{line.slice(3)}</h2>);
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      elements.push(<h3 key={key++} className="lesson-content__h3">{line.slice(4)}</h3>);
      i++;
      continue;
    }

    // Tables
    if (line.includes('|') && line.trim().startsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      if (tableLines.length >= 2) {
        const headers = tableLines[0].split('|').filter(c => c.trim()).map(c => c.trim());
        const rows = tableLines.slice(2).map(row =>
          row.split('|').filter(c => c.trim()).map(c => c.trim())
        );
        elements.push(
          <div key={key++} className="lesson-content__table-wrap">
            <table className="lesson-content__table">
              <thead>
                <tr>{headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Unordered list
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const items = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="lesson-content__list">
          {items.map((item, li) => <li key={li}>{formatInline(item)}</li>)}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line.trim())) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ''));
        i++;
      }
      elements.push(
        <ol key={key++} className="lesson-content__list">
          {items.map((item, li) => <li key={li}>{formatInline(item)}</li>)}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(<p key={key++} className="lesson-content__para">{formatInline(line)}</p>);
    i++;
  }

  return <div className="lesson-content">{elements}</div>;
}

function formatInline(text) {
  // Bold
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    // Inline code
    const codeParts = part.split(/(`[^`]+`)/g);
    return codeParts.map((cp, j) => {
      if (cp.startsWith('`') && cp.endsWith('`')) {
        return <code key={`${i}-${j}`} className="lesson-content__inline-code">{cp.slice(1, -1)}</code>;
      }
      return cp;
    });
  });
}

export function LessonPage({ progressHook }) {
  const { lessonId } = useParams();
  const lesson = curriculum.find(l => l.id === lessonId);
  const { progress, toggleTopic, toggleGoal, getLessonProgress } = progressHook;
  const [expandedTopic, setExpandedTopic] = useState(null);
  const lessonContent = getLessonContent(lessonId);

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
            Click a topic to expand its lesson content. Check off topics as you complete them.
          </p>
          <div className="topics-list">
            {lesson.topics.map((topic, i) => {
              const topicContent = lessonContent.find(c => c.topicId === i);
              const isExpanded = expandedTopic === i;
              return (
                <div key={i} className={`topic-item ${completedTopics.includes(i) ? 'topic-item--done' : ''} ${isExpanded ? 'topic-item--expanded' : ''}`}>
                  <div className="topic-item__header" onClick={() => setExpandedTopic(isExpanded ? null : i)}>
                    <div
                      className="topic-item__checkbox"
                      onClick={(e) => { e.stopPropagation(); toggleTopic(lessonId, i); }}
                    >
                      {completedTopics.includes(i) ? '✓' : ''}
                    </div>
                    <div className="topic-item__content">
                      <h4 className="topic-item__name">{topic.name}</h4>
                      <p className="topic-item__description">{topic.description}</p>
                    </div>
                    <div className="topic-item__expand-icon">
                      {topicContent ? (isExpanded ? '▼' : '▶') : ''}
                    </div>
                  </div>
                  {isExpanded && topicContent && (
                    <div className="topic-item__lesson-content">
                      <LessonContent content={topicContent.content} />
                    </div>
                  )}
                </div>
              );
            })}
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
