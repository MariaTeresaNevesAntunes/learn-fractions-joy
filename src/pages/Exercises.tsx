import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Lightbulb, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { exercises } from '@/data/exercisesData';
import { theoryModules } from '@/data/theoryContent';
import { useProgress } from '@/hooks/useProgress';

const Exercises = () => {
  const navigate = useNavigate();
  const { saveExerciseScore } = useProgress();
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  const filteredExercises = exercises.filter(ex => {
    const moduleMatch = selectedModule === 'all' || ex.moduleId === selectedModule;
    const difficultyMatch = selectedDifficulty === 'all' || ex.difficulty === selectedDifficulty;
    return moduleMatch && difficultyMatch;
  });

  const handleAnswer = (exerciseId: string, optionIndex: number) => {
    if (showResults[exerciseId]) return;
    setAnswers(prev => ({ ...prev, [exerciseId]: optionIndex }));
  };

  const checkAnswer = (exerciseId: string) => {
    setShowResults(prev => ({ ...prev, [exerciseId]: true }));
    
    const exercise = exercises.find(e => e.id === exerciseId);
    if (exercise && answers[exerciseId] !== null) {
      const isCorrect = answers[exerciseId] === exercise.correctAnswer;
      saveExerciseScore(exerciseId, isCorrect ? 1 : 0, 1);
    }
  };

  const resetExercise = (exerciseId: string) => {
    setAnswers(prev => ({ ...prev, [exerciseId]: null }));
    setShowResults(prev => ({ ...prev, [exerciseId]: false }));
  };

  const resetAll = () => {
    setAnswers({});
    setShowResults({});
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'easy': return 'bg-secondary/20 text-secondary';
      case 'medium': return 'bg-accent/20 text-accent-foreground';
      case 'hard': return 'bg-destructive/20 text-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDifficultyLabel = (diff: string) => {
    switch (diff) {
      case 'easy': return 'Fácil';
      case 'medium': return 'Médio';
      case 'hard': return 'Difícil';
      default: return diff;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">½</span>
            </div>
            <span className="font-display font-bold text-xl">Frações</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/teoria" className="text-muted-foreground hover:text-foreground transition-colors">Teoria</Link>
            <Link to="/exercicios" className="text-foreground font-medium">Exercícios</Link>
            <Link to="/quiz" className="text-muted-foreground hover:text-foreground transition-colors">Quiz</Link>
            <Link to="/flashcards" className="text-muted-foreground hover:text-foreground transition-colors">Flashcards</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate('/')} className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Início
        </Button>

        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Exercícios Práticos</h1>
          <p className="text-muted-foreground text-lg">
            Pratique o que aprendeu com feedback imediato e explicações detalhadas.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Módulo:</span>
            <Select value={selectedModule} onValueChange={setSelectedModule}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Módulos</SelectItem>
                {theoryModules.map((m, i) => (
                  <SelectItem key={m.id} value={m.id}>
                    {i + 1}. {m.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Dificuldade:</span>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="easy">Fácil</SelectItem>
                <SelectItem value="medium">Médio</SelectItem>
                <SelectItem value="hard">Difícil</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" size="sm" onClick={resetAll} className="gap-2 ml-auto">
            <RotateCcw className="w-4 h-4" /> Reiniciar Todos
          </Button>
        </div>

        {/* Exercises */}
        <div className="space-y-6">
          {filteredExercises.map((exercise, index) => {
            const isAnswered = showResults[exercise.id];
            const selectedAnswer = answers[exercise.id];
            const isCorrect = selectedAnswer === exercise.correctAnswer;
            const moduleInfo = theoryModules.find(m => m.id === exercise.moduleId);

            return (
              <Card key={exercise.id} className={`animate-fade-in ${isAnswered ? (isCorrect ? 'border-secondary/50' : 'border-destructive/50') : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">{moduleInfo?.title}</Badge>
                        <Badge className={`text-xs ${getDifficultyColor(exercise.difficulty)}`}>
                          {getDifficultyLabel(exercise.difficulty)}
                        </Badge>
                      </div>
                      <CardTitle className="font-display text-lg">
                        {index + 1}. {exercise.question}
                      </CardTitle>
                    </div>
                    {isAnswered && (
                      <Button variant="ghost" size="sm" onClick={() => resetExercise(exercise.id)}>
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    {exercise.options.map((option, optIndex) => {
                      const isSelected = selectedAnswer === optIndex;
                      const isCorrectOption = exercise.correctAnswer === optIndex;
                      let optionClass = 'border-2 p-3 rounded-lg cursor-pointer transition-all ';
                      
                      if (isAnswered) {
                        if (isCorrectOption) {
                          optionClass += 'border-secondary bg-secondary/10';
                        } else if (isSelected && !isCorrectOption) {
                          optionClass += 'border-destructive bg-destructive/10';
                        } else {
                          optionClass += 'border-muted opacity-50';
                        }
                      } else {
                        optionClass += isSelected 
                          ? 'border-primary bg-primary/5' 
                          : 'border-muted hover:border-primary/50';
                      }

                      return (
                        <div
                          key={optIndex}
                          className={optionClass}
                          onClick={() => handleAnswer(exercise.id, optIndex)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                              {String.fromCharCode(65 + optIndex)}
                            </span>
                            <span className="flex-1">{option}</span>
                            {isAnswered && isCorrectOption && (
                              <CheckCircle className="w-5 h-5 text-secondary" />
                            )}
                            {isAnswered && isSelected && !isCorrectOption && (
                              <XCircle className="w-5 h-5 text-destructive" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {!isAnswered && selectedAnswer !== null && selectedAnswer !== undefined && (
                    <Button onClick={() => checkAnswer(exercise.id)} className="w-full">
                      Verificar Resposta
                    </Button>
                  )}

                  {isAnswered && (
                    <div className={`p-4 rounded-lg ${isCorrect ? 'bg-secondary/10 border border-secondary/30' : 'bg-destructive/10 border border-destructive/30'}`}>
                      <div className="flex items-start gap-2">
                        <Lightbulb className={`w-5 h-5 shrink-0 mt-0.5 ${isCorrect ? 'text-secondary' : 'text-destructive'}`} />
                        <div>
                          <p className={`font-medium ${isCorrect ? 'text-secondary' : 'text-destructive'}`}>
                            {isCorrect ? 'Correto!' : 'Incorreto'}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">{exercise.explanation}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredExercises.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum exercício encontrado com os filtros selecionados.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Exercises;
