import { useState, useEffect, useCallback } from 'react';

interface Progress {
  completedModules: string[];
  exerciseScores: Record<string, { correct: number; total: number }>;
  quizScores: Record<string, { score: number; total: number; date: string }>;
  flashcardsReviewed: string[];
}

const STORAGE_KEY = 'fractions-progress';

const defaultProgress: Progress = {
  completedModules: [],
  exerciseScores: {},
  quizScores: {},
  flashcardsReviewed: [],
};

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(defaultProgress);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch {
        setProgress(defaultProgress);
      }
    }
  }, []);

  const saveProgress = useCallback((newProgress: Progress) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  }, []);

  const completeModule = useCallback((moduleId: string) => {
    const newProgress = {
      ...progress,
      completedModules: progress.completedModules.includes(moduleId)
        ? progress.completedModules
        : [...progress.completedModules, moduleId],
    };
    saveProgress(newProgress);
  }, [progress, saveProgress]);

  const saveExerciseScore = useCallback((exerciseId: string, correct: number, total: number) => {
    const newProgress = {
      ...progress,
      exerciseScores: {
        ...progress.exerciseScores,
        [exerciseId]: { correct, total },
      },
    };
    saveProgress(newProgress);
  }, [progress, saveProgress]);

  const saveQuizScore = useCallback((quizId: string, score: number, total: number) => {
    const newProgress = {
      ...progress,
      quizScores: {
        ...progress.quizScores,
        [quizId]: { score, total, date: new Date().toISOString() },
      },
    };
    saveProgress(newProgress);
  }, [progress, saveProgress]);

  const markFlashcardReviewed = useCallback((cardId: string) => {
    if (!progress.flashcardsReviewed.includes(cardId)) {
      const newProgress = {
        ...progress,
        flashcardsReviewed: [...progress.flashcardsReviewed, cardId],
      };
      saveProgress(newProgress);
    }
  }, [progress, saveProgress]);

  const resetProgress = useCallback(() => {
    saveProgress(defaultProgress);
  }, [saveProgress]);

  const getOverallProgress = useCallback(() => {
    const totalModules = 8;
    return Math.round((progress.completedModules.length / totalModules) * 100);
  }, [progress]);

  return {
    progress,
    completeModule,
    saveExerciseScore,
    saveQuizScore,
    markFlashcardReviewed,
    resetProgress,
    getOverallProgress,
  };
}
