import { Link } from 'react-router-dom';
import { Book, PenTool, Brain, Layers, ArrowRight, CheckCircle, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useProgress } from '@/hooks/useProgress';

const Index = () => {
  const { getOverallProgress, progress } = useProgress();
  const overallProgress = getOverallProgress();

  const features = [
    {
      icon: Book,
      title: 'Teoria Completa',
      description: '8 módulos progressivos do básico ao avançado',
      href: '/teoria',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: PenTool,
      title: 'Exercícios Práticos',
      description: 'Pratique com feedback imediato e explicações',
      href: '/exercicios',
      color: 'bg-secondary/10 text-secondary',
    },
    {
      icon: Brain,
      title: 'Quiz Interativo',
      description: 'Teste seus conhecimentos por módulo ou geral',
      href: '/quiz',
      color: 'bg-accent/10 text-accent-foreground',
    },
    {
      icon: Layers,
      title: 'Flashcards',
      description: 'Memorize conceitos-chave de forma divertida',
      href: '/flashcards',
      color: 'bg-destructive/10 text-destructive',
    },
    {
      icon: PieChart,
      title: 'Visualizações',
      description: 'Manipule frações com pizzas e barras interativas',
      href: '/visualizacoes',
      color: 'bg-chart-1/10 text-chart-1',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/25">
                <span className="text-primary-foreground font-black text-sm tracking-tight">MTNA</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xs">½</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight">MTNA</span>
              <span className="text-xs text-muted-foreground">Domine as Frações</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/teoria" className="text-muted-foreground hover:text-foreground transition-colors">Teoria</Link>
            <Link to="/exercicios" className="text-muted-foreground hover:text-foreground transition-colors">Exercícios</Link>
            <Link to="/quiz" className="text-muted-foreground hover:text-foreground transition-colors">Quiz</Link>
            <Link to="/flashcards" className="text-muted-foreground hover:text-foreground transition-colors">Flashcards</Link>
            <Link to="/visualizacoes" className="text-muted-foreground hover:text-foreground transition-colors">Visualizações</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              📚 Aprendizado Interativo
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              MTNA-Domine o Mundo das <span className="text-primary">Frações</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Do básico ao avançado, aprenda frações de forma interativa com teoria clara, 
              exercícios práticos, quizzes e flashcards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/teoria">
                  Começar a Aprender <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/quiz">Testar Conhecimentos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      {overallProgress > 0 && (
        <section className="py-8 border-y bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-secondary" />
                <span className="font-medium">Seu Progresso Geral</span>
              </div>
              <div className="flex-1 max-w-md w-full">
                <div className="flex items-center gap-4">
                  <Progress value={overallProgress} className="h-3" />
                  <span className="font-bold text-primary">{overallProgress}%</span>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">
                {progress.completedModules.length}/8 módulos completos
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Como Funciona</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Escolha como quer aprender. Combine teoria, prática e testes para dominar frações.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <Link key={feature.title} to={feature.href}>
                <Card className="h-full card-hover cursor-pointer group" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="font-display">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Acessar <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Visualize Frações</h2>
            <p className="text-muted-foreground">Frações ficam mais fáceis quando você pode vê-las!</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { num: 1, den: 2, color: 'bg-primary' },
              { num: 2, den: 3, color: 'bg-secondary' },
              { num: 3, den: 4, color: 'bg-accent' },
            ].map((frac, idx) => (
              <div key={idx} className="text-center">
                <div className="relative w-32 h-32 rounded-full border-4 border-muted overflow-hidden mb-4">
                  <div 
                    className={`absolute inset-0 ${frac.color}`}
                    style={{ 
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin(2 * Math.PI * frac.num / frac.den)}% ${50 - 50 * Math.cos(2 * Math.PI * frac.num / frac.den)}%, ${frac.num / frac.den > 0.5 ? '100% 0%, 100% 100%, 0% 100%, 0% 0%,' : ''} 50% 0%)`
                    }}
                  />
                  <div 
                    className={`absolute inset-0 ${frac.color}`}
                    style={{ 
                      transform: `rotate(${-90}deg)`,
                      transformOrigin: '50% 50%',
                      clipPath: `conic-gradient(from 0deg, transparent 0%, transparent ${(frac.num / frac.den) * 100}%, red ${(frac.num / frac.den) * 100}%)`
                    }}
                  />
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted" />
                    <path
                      d={`M 50 50 L 50 2 A 48 48 0 ${frac.num / frac.den > 0.5 ? 1 : 0} 1 ${50 + 48 * Math.sin(2 * Math.PI * frac.num / frac.den)} ${50 - 48 * Math.cos(2 * Math.PI * frac.num / frac.den)} Z`}
                      className={frac.color.replace('bg-', 'fill-')}
                    />
                  </svg>
                </div>
                <div className="font-display text-2xl font-bold">
                  <span className="text-foreground">{frac.num}</span>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-foreground">{frac.den}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 MTNA-Domine o Mundo das Frações - Site Educativo. Aprenda matemática de forma divertida!
            </p>
            <nav className="flex items-center gap-4 text-sm">
              <Link to="/privacidade" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacidade
              </Link>
              <Link to="/termos" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </Link>
              <Link to="/contato" className="text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
