import { useState, useEffect } from 'react';

const STORAGE_KEY = 'fretmaster-progress';

const getInitialProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

export function useProgress() {
  const [progress, setProgress] = useState(getInitialProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const toggleTopic = (lessonId, topicIndex) => {
    setProgress(prev => {
      const lessonProgress = prev[lessonId] || { completedTopics: [], started: false };
      const completedTopics = [...(lessonProgress.completedTopics || [])];
      const idx = completedTopics.indexOf(topicIndex);
      if (idx > -1) {
        completedTopics.splice(idx, 1);
      } else {
        completedTopics.push(topicIndex);
      }
      return {
        ...prev,
        [lessonId]: { ...lessonProgress, completedTopics, started: true }
      };
    });
  };

  const toggleGoal = (lessonId, goalIndex) => {
    setProgress(prev => {
      const lessonProgress = prev[lessonId] || { completedGoals: [], started: false };
      const completedGoals = [...(lessonProgress.completedGoals || [])];
      const idx = completedGoals.indexOf(goalIndex);
      if (idx > -1) {
        completedGoals.splice(idx, 1);
      } else {
        completedGoals.push(goalIndex);
      }
      return {
        ...prev,
        [lessonId]: { ...lessonProgress, completedGoals, started: true }
      };
    });
  };

  const getLessonProgress = (lessonId, totalTopics) => {
    const lessonData = progress[lessonId];
    if (!lessonData) return 0;
    const completed = (lessonData.completedTopics || []).length;
    return totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0;
  };

  const getOverallProgress = (curriculum) => {
    const totalTopics = curriculum.reduce((sum, lesson) => sum + lesson.topics.length, 0);
    const completedTopics = curriculum.reduce((sum, lesson) => {
      const lessonData = progress[lesson.id];
      return sum + (lessonData?.completedTopics?.length || 0);
    }, 0);
    return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  };

  const resetProgress = () => {
    setProgress({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    progress,
    toggleTopic,
    toggleGoal,
    getLessonProgress,
    getOverallProgress,
    resetProgress
  };
}
