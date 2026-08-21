import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { theoryModules } from '@/data/theoryContent';
import { useProgress } from '@/hooks/useProgress';

const TheoryModule = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { progress, completeModule } = useProgress();
  
  const module = theoryModules.find(m => m.id === moduleId);
  const currentIndex = theoryModules.findIndex(m => m.id === moduleId);
  const prevModule = currentIndex > 0 ? theoryModules[currentIndex - 1] : null;
  const nextModule = currentIndex < theoryModules.length - 1 ? theoryModules[currentIndex + 1] : null;
  
  const isCompleted = progress.completedModules.includes(moduleId || '');

  if (!module) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Módulo não encontrado</h1>
          <Button onClick={() => navigate('/teoria')}>Voltar à Teoria</Button>
        </div>
      </div>
    );
  }

  const handleComplete = () => {
    if (moduleId) {
      completeModule(moduleId);
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
            <Link to="/teoria" className="text-foreground font-medium">Teoria</Link>
            <Link to="/exercicios" className="text-muted-foreground hover:text-foreground transition-colors">Exercícios</Link>
            <Link to="/quiz" className="text-muted-foreground hover:text-foreground transition-colors">Quiz</Link>
            <Link to="/flashcards" className="text-muted-foreground hover:text-foreground transition-colors">Flashcards</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate('/teoria')} className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" /> Voltar aos Módulos
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{module.icon}</span>
            <div>
              <p className="text-sm text-muted-foreground">Módulo {currentIndex + 1} de 8</p>
              <h1 className="font-display text-3xl font-bold">{module.title}</h1>
            </div>
            {isCompleted && (
              <CheckCircle className="w-8 h-8 text-secondary ml-auto" />
            )}
          </div>
          <p className="text-muted-foreground">{module.description}</p>
        </div>

        <div className="space-y-6">
          {module.content.sections.map((section, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">{section.text}</p>
                
                {section.example && (
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                    <div className="flex items-start gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="font-semibold text-sm">Exemplo</span>
                    </div>
                    <p className="text-sm mb-2"><strong>Problema:</strong> {section.example.problem}</p>
                    <p className="text-sm text-secondary font-medium"><strong>Solução:</strong> {section.example.solution}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Navigation & Complete */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-2">
            {prevModule && (
              <Button variant="outline" onClick={() => navigate(`/teoria/${prevModule.id}`)} className="gap-2">
                <ArrowLeft className="w-4 h-4" /> {prevModule.title}
              </Button>
            )}
          </div>
          
          <Button 
            onClick={handleComplete} 
            className={`gap-2 ${isCompleted ? 'bg-secondary hover:bg-secondary/90' : ''}`}
            disabled={isCompleted}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="w-4 h-4" /> Concluído!
              </>
            ) : (
              <>
                Marcar como Concluído <CheckCircle className="w-4 h-4" />
              </>
            )}
          </Button>
          
          <div className="flex gap-2">
            {nextModule && (
              <Button onClick={() => navigate(`/teoria/${nextModule.id}`)} className="gap-2">
                {nextModule.title} <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TheoryModule;
