import { Link } from "react-router-dom";
import {
  Book,
  PenTool,
  Brain,
  Layers,
  ArrowRight,
  CheckCircle,
  PieChart,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/hooks/useProgress";

const Index = () => {
  const { getOverallProgress, progress } = useProgress();
  const overallProgress = getOverallProgress();

  const features = [
    {
      icon: Book,
      title: "Teoria Completa",
      description: "8 módulos progressivos do básico ao avançado",
      href: "/teoria",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: PenTool,
      title: "Exercícios Práticos",
      description: "Pratique com feedback imediato e explicações",
      href: "/exercicios",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Brain,
      title: "Quiz Interativo",
      description: "Teste seus conhecimentos por módulo ou geral",
      href: "/quiz",
      color: "bg-accent/10 text-accent-foreground",
    },
    {
      icon: Layers,
      title: "Flashcards",
      description: "Memorize conceitos-chave de forma divertida",
      href: "/flashcards",
      color: "bg-destructive/10 text-destructive",
    },
    {
      icon: PieChart,
      title: "Visualizações",
      description: "Manipule frações com pizzas e barras interativas",
      href: "/visualizacoes",
      color: "bg-chart-1/10 text-chart-1",
    },
    {
      icon: PlayCircle,
      title: "Vídeos",
      description: "Assista a exercícios resolvidos passo a passo",
      href: "#videos",
      color: "bg-info/10 text-info",
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
                <span className="text-primary-foreground font-black text-sm tracking-tight">
                  MTNA
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xs">
                  ½
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight">
                MTNA
              </span>
              <span className="text-xs text-muted-foreground">
                Domine as Frações
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/teoria"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Teoria
            </Link>
            <Link
              to="/exercicios"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Exercícios
            </Link>
            <Link
              to="/quiz"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Quiz
            </Link>
            <Link
              to="/flashcards"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Flashcards
            </Link>
            <Link
              to="/visualizacoes"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Visualizações
            </Link>
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
              MTNA-Domine o Mundo das{" "}
              <span className="text-primary">Frações</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Do básico ao avançado, aprenda frações de forma interativa com
              teoria clara, exercícios práticos, quizzes e flashcards.
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
                  <span className="font-bold text-primary">
                    {overallProgress}%
                  </span>
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
            <h2 className="font-display text-3xl font-bold mb-4">
              Como Funciona
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Escolha como quer aprender. Combine teoria, prática e testes para
              dominar frações.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <Link key={feature.title} to={feature.href}>
                <Card
                  className="h-full card-hover cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="font-display">
                      {feature.title}
                    </CardTitle>
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
            <h2 className="font-display text-3xl font-bold mb-4">
              Visualize Frações
            </h2>
            <p className="text-muted-foreground">
              As frações ficam mais fáceis quando as consegue ver!
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { num: 1, den: 2, color: "bg-primary" },
              { num: 2, den: 3, color: "bg-secondary" },
              { num: 3, den: 4, color: "bg-accent" },
            ].map((frac, idx) => (
              <div key={idx} className="text-center">
                <div className="relative w-32 h-32 rounded-full border-4 border-muted overflow-hidden mb-4">
                  <div
                    className={`absolute inset-0 ${frac.color}`}
                    style={{
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin((2 * Math.PI * frac.num) / frac.den)}% ${50 - 50 * Math.cos((2 * Math.PI * frac.num) / frac.den)}%, ${frac.num / frac.den > 0.5 ? "100% 0%, 100% 100%, 0% 100%, 0% 0%," : ""} 50% 0%)`,
                    }}
                  />
                  <div
                    className={`absolute inset-0 ${frac.color}`}
                    style={{
                      transform: `rotate(${-90}deg)`,
                      transformOrigin: "50% 50%",
                      clipPath: `conic-gradient(from 0deg, transparent 0%, transparent ${(frac.num / frac.den) * 100}%, red ${(frac.num / frac.den) * 100}%)`,
                    }}
                  />
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-muted"
                    />
                    <path
                      d={`M 50 50 L 50 2 A 48 48 0 ${frac.num / frac.den > 0.5 ? 1 : 0} 1 ${50 + 48 * Math.sin((2 * Math.PI * frac.num) / frac.den)} ${50 - 48 * Math.cos((2 * Math.PI * frac.num) / frac.den)} Z`}
                      className={frac.color.replace("bg-", "fill-")}
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

      <section>
        <div className="container mx-auto px-4">
          <section
            aria-labelledby="theory-heading"
            className="max-w-4xl mx-auto bg-card border rounded-2xl p-6 md:p-10 shadow-sm"
          >
            <h2
              id="theory-heading"
              className="font-display text-2xl md:text-3xl font-bold mb-6"
            >
              Explicação Teórica das Frações
            </h2>

            <div className="prose prose-lg max-w-none text-foreground/90">
              <p className="mb-4">
                Uma fração é uma forma matemática de representar uma parte de um
                todo que foi dividido em partes iguais. Quando falamos em
                frações, estamos a dividir algo — seja um objeto, uma quantidade
                ou uma medida — em partes de igual tamanho e a considerar apenas
                algumas dessas partes. O conceito de fração está presente no
                nosso quotidiano de forma natural: quando partilhamos uma pizza,
                medimos ingredientes para uma receita, dividimos o tempo de
                utilização de um objeto ou calculamos descontos numa loja,
                estamos, na verdade, a trabalhar com frações.
              </p>

              <p className="mb-4">
                A fração é normalmente escrita na forma <em>a/b</em>, em que{" "}
                <em>a</em> e <em>b</em> são números inteiros e <em>b</em> é
                diferente de zero. O número que aparece por cima, chamado{" "}
                <strong>numerador</strong>, indica quantas partes estamos a
                considerar. O número que aparece por baixo, chamado{" "}
                <strong>denominador</strong>, indica em quantas partes iguais o
                todo foi dividido. Por exemplo, na fração 3/4, o denominador 4
                diz-nos que o todo foi dividido em 4 partes iguais, enquanto o
                numerador 3 indica que estamos a considerar 3 dessas partes.
              </p>

              <p className="mb-4">
                O numerador desempenha um papel fundamental porque representa a
                quantidade que queremos expressar. Se temos uma barra de
                chocolate dividida em 8 quadrados iguais e comemos 5 quadrados,
                a fração 5/8 representa a parte que comemos. Aqui, o numerador é
                5, o que significa que foram consumidas 5 partes da barra.
                Quanto maior for o numerador, maior é a parte representada,
                desde que o denominador seja o mesmo.
              </p>

              <p className="mb-4">
                O denominador, por sua vez, define o tamanho de cada parte.
                Quando dividimos um todo em mais partes, cada parte fica menor.
                Por isso, 1/8 representa uma parte menor do que 1/4, mesmo que o
                numerador seja igual a 1 em ambos os casos. O denominador
                funciona como uma espécie de "escala" que nos permite comparar
                quantidades de forma precisa. Sem o denominador, não saberíamos
                se estamos a falar de partes grandes ou pequenas.
              </p>

              <p className="mb-4">
                As frações aparecem constantemente no nosso dia a dia. Quando
                uma receita pede meia chávena de açúcar, estamos a usar a fração
                1/2. Quando olhamos para o relógio e vemos que já passaram
                quinze minutos da hora, estamos a ver 1/4 de uma hora. Quando um
                desconto de 25% é aplicado num artigo, podemos pensar nesse
                valor como a fração 1/4 do preço original. Até nas conversas
                mais simples, como "um terço da turma está ausente", estamos a
                usar frações para descrever uma parte de um grupo.
              </p>

              <p>
                Compreender bem o conceito de fração, o significado do numerador
                e do denominador, é essencial para avançar na matemática. As
                frações são a base para operar com números decimais,
                percentagens, razões e proporções. Dominar este tema permite
                resolver problemas práticos com confiança, desde calcular
                quantidades em receitas até perceber melhor informações
                financeiras e estatísticas. Por isso, aprender frações não é
                apenas um objetivo escolar — é uma competência útil para toda a
                vida.
              </p>
            </div>
          </section>

          <section id="videos" className="py-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <PlayCircle className="w-8 h-8 text-primary" />
                <h2 className="font-display text-3xl font-bold">
                  Galeria de Vídeos
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Assista aos exercícios resolvidos passo a passo e consolide a
                sua compreensão sobre frações.
              </p>
            </div>

            <div className="video-gallery">
              {[
                {
                  id: "v1",
                  title: "Introdução às Frações - Exercício Resolvido",
                  url: "https://www.youtube.com/embed/bjebqr-tBdU",
                },
                {
                  id: "v2",
                  title: "Como Comparar Frações - Exercício Resolvido",
                  url: "https://www.youtube.com/embed/wq7-D3T5rlw",
                },
                {
                  id: "v3",
                  title: "Operações com Frações - Exercício Resolvido",
                  url: "https://www.youtube.com/embed/jW7cVOn0u7w",
                },
                {
                  id: "v4",
                  title: "Exercício Resolvido 4",
                  url: "https://www.youtube.com/embed/HS9UO5nKgdI",
                },
                {
                  id: "v5",
                  title: "Exercício Resolvido 5",
                  url: "https://www.youtube.com/embed/qroLyJgr4vU",
                },
                {
                  id: "v6",
                  title: "Exercício Resolvido 6",
                  url: "https://www.youtube.com/embed/5dl5YXWMMb0",
                },
              ].map((video) => (
                <article key={video.id} className="video-card">
                  <iframe
                    loading="lazy"
                    title={video.title}
                    src={video.url}
                    allowFullScreen
                  />
                  <h3>{video.title}</h3>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 MTNA - Domine as Frações. Desenvolvido por{" "}
                <strong>Maria Teresa Neves Antunes</strong>.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Plataforma educativa gratuita para aprender matemática.
              </p>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                to="/sobre"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sobre
              </Link>
              <Link
                to="/privacidade"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacidade
              </Link>
              <Link
                to="/cookies"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookies
              </Link>
              <Link
                to="/termos"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Termos
              </Link>
              <Link
                to="/contacto"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contacto
              </Link>
            </nav>
          </div>
          <div className="text-center text-xs text-muted-foreground border-t pt-4">
            <p>
              Contacto:{" "}
              <a
                href="mailto:mtna.fracoes@gmail.com"
                className="text-primary hover:underline"
              >
                mtna.fracoes@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
