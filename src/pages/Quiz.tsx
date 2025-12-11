import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain, CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { generalQuiz, moduleQuizzes, QuizQuestion } from '@/data/quizData';
import { theoryModules } from '@/data/theoryContent';
import { useProgress } from '@/hooks/useProgress';

type QuizMode = 'select' | 'playing' | 'results';

const Quiz = () => {
  const navigate = useNavigate();
  const { saveQuizScore, progress } = useProgress();
  const [mode, setMode] = useState<QuizMode>('select');
  const [selectedQuiz, setSelectedQuiz] = useState<string>('');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const startQuiz = (quizId: string) => {
    let quizQuestions: QuizQuestion[] = [];
    if (quizId === 'general') {
      quizQuestions = [...generalQuiz].sort(() => Math.random() - 0.5);
    } else {
      quizQuestions = moduleQuizzes[quizId] || [];
    }
    setSelectedQuiz(quizId);
    setQuestions(quizQuestions);
    setCurrentQuestion(0);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setShowAnswer(false);
    setMode('playing');
  };

  const handleAnswer = (optionIndex: number) => {
    if (showAnswer) return;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const confirmAnswer = () => {
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowAnswer(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const score = answers.filter((a, i) => a === questions[i].correctAnswer).length;
    saveQuizScore(selectedQuiz, score, questions.length);
    setMode('results');
  };

  const resetQuiz = () => {
    setMode('select');
    setSelectedQuiz('');
    setQuestions([]);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowAnswer(false);
  };

  const getScore = () => {
    return answers.filter((a, i) => a === questions[i].correctAnswer).length;
  };

  const getScorePercentage = () => {
    return Math.round((getScore() / questions.length) * 100);
  };

  if (mode === 'results') {
    const score = getScore();
    const percentage = getScorePercentage();
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">½</span>
              </div>
              <span className="font-display font-bold text-xl">Frações</span>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <Card className="text-center animate-scale-in">
            <CardHeader>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Trophy className={`w-10 h-10 ${percentage >= 70 ? 'text-accent' : 'text-primary'}`} />
              </div>
              <CardTitle className="font-display text-3xl">
                {percentage >= 70 ? 'Parabéns!' : 'Continue Praticando!'}
              </CardTitle>
              <CardDescription>
                Você completou o quiz
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl font-display font-bold text-primary">
                {score}/{questions.length}
              </div>
              <Progress value={percentage} className="h-4" />
              <p className="text-muted-foreground">
                {percentage >= 90 ? 'Excelente! Você domina o assunto!' :
                 percentage >= 70 ? 'Muito bom! Você está no caminho certo.' :
                 percentage >= 50 ? 'Bom trabalho! Revise os pontos fracos.' :
                 'Não desista! Revise a teoria e tente novamente.'}
              </p>

              <div className="space-y-2 text-left">
                <p className="font-medium text-sm">Suas respostas:</p>
                {questions.map((q, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    {answers[i] === q.correctAnswer ? (
                      <CheckCircle className="w-4 h-4 text-secondary" />
                    ) : (
                      <XCircle className="w-4 h-4 text-destructive" />
                    )}
                    <span className="text-muted-foreground truncate">{q.question}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 justify-center pt-4">
                <Button variant="outline" onClick={resetQuiz} className="gap-2">
                  <RotateCcw className="w-4 h-4" /> Escolher Outro Quiz
                </Button>
                <Button onClick={() => startQuiz(selectedQuiz)} className="gap-2">
                  Tentar Novamente
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  if (mode === 'playing') {
    const question = questions[currentQuestion];
    const selectedAnswer = answers[currentQuestion];
    const isCorrect = selectedAnswer === question.correctAnswer;

    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="sm" onClick={resetQuiz}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Sair
              </Button>
              <span className="font-medium">
                Questão {currentQuestion + 1} de {questions.length}
              </span>
            </div>
            <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="font-display text-xl">{question.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {question.options.map((option, optIndex) => {
                  const isSelected = selectedAnswer === optIndex;
                  const isCorrectOption = question.correctAnswer === optIndex;
                  let optionClass = 'border-2 p-4 rounded-lg cursor-pointer transition-all ';
                  
                  if (showAnswer) {
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
                      onClick={() => handleAnswer(optIndex)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium shrink-0">
                          {String.fromCharCode(65 + optIndex)}
                        </span>
                        <span className="flex-1">{option}</span>
                        {showAnswer && isCorrectOption && (
                          <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                        )}
                        {showAnswer && isSelected && !isCorrectOption && (
                          <XCircle className="w-5 h-5 text-destructive shrink-0" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {showAnswer && (
                <div className={`p-4 rounded-lg ${isCorrect ? 'bg-secondary/10' : 'bg-destructive/10'}`}>
                  <p className={`font-medium ${isCorrect ? 'text-secondary' : 'text-destructive'}`}>
                    {isCorrect ? 'Correto!' : 'Incorreto'}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{question.explanation}</p>
                </div>
              )}

              <div className="flex justify-end pt-4">
                {!showAnswer ? (
                  <Button 
                    onClick={confirmAnswer} 
                    disabled={selectedAnswer === null}
                    className="min-w-32"
                  >
                    Confirmar
                  </Button>
                ) : (
                  <Button onClick={nextQuestion} className="min-w-32">
                    {currentQuestion < questions.length - 1 ? 'Próxima' : 'Ver Resultado'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
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
            <Link to="/exercicios" className="text-muted-foreground hover:text-foreground transition-colors">Exercícios</Link>
            <Link to="/quiz" className="text-foreground font-medium">Quiz</Link>
            <Link to="/flashcards" className="text-muted-foreground hover:text-foreground transition-colors">Flashcards</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate('/')} className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Início
        </Button>

        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Brain className="w-8 h-8 text-primary" />
            Quiz Interativo
          </h1>
          <p className="text-muted-foreground text-lg">
            Teste seus conhecimentos com quizzes por módulo ou um quiz geral completo.
          </p>
        </div>

        <div className="grid gap-6">
          {/* General Quiz */}
          <Card className="card-hover cursor-pointer border-2 border-primary/20" onClick={() => startQuiz('general')}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge className="mb-2 bg-primary/10 text-primary">Recomendado</Badge>
                  <CardTitle className="font-display text-xl">Quiz Geral</CardTitle>
                  <CardDescription>10 questões de todos os módulos para testar seu conhecimento completo</CardDescription>
                </div>
                <div className="text-4xl">🏆</div>
              </div>
            </CardHeader>
            {progress.quizScores['general'] && (
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Última pontuação: {progress.quizScores['general'].score}/{progress.quizScores['general'].total}
                </p>
              </CardContent>
            )}
          </Card>

          {/* Module Quizzes */}
          <div>
            <h2 className="font-display text-xl font-semibold mb-4">Quiz por Módulo</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {theoryModules.map((module, index) => {
                const quizScore = progress.quizScores[module.id];
                return (
                  <Card 
                    key={module.id} 
                    className="card-hover cursor-pointer"
                    onClick={() => startQuiz(module.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{module.icon}</span>
                        <div className="flex-1">
                          <Badge variant="outline" className="text-xs mb-1">Módulo {index + 1}</Badge>
                          <CardTitle className="font-display text-base">{module.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    {quizScore && (
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground">
                          Última: {quizScore.score}/{quizScore.total}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
