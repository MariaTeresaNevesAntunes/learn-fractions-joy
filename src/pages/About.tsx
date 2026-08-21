import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { BookOpen, Target, Users, Heart, GraduationCap, Lightbulb, Eye, TrendingUp, CheckCircle, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Sobre o <span className="text-primary">Learn Fractions Joy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um projeto dedicado a ajudar alunos a compreender frações de forma simples, visual e confiante.
          </p>
        </section>

        {/* About the Author Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold">👩‍🏫 Sobre a Autora</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Sou a <span className="text-primary">Maria</span>, educadora e criadora do Learn Fractions Joy
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Um projeto dedicado a ajudar alunos a compreender frações de forma simples, visual e confiante.
                </p>
                <div className="bg-card rounded-xl p-6 border mb-6">
                  <p className="text-lg font-medium text-foreground mb-4 italic">
                    "Acredito que a matemática só se torna difícil quando é mal explicada."
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Por isso, desenvolvo conteúdos que transformam as frações — um dos temas mais desafiantes 
                    para muitos estudantes — em algo claro, lógico e acessível.
                  </p>
                </div>
                
                <h4 className="font-semibold text-lg mb-4">O meu trabalho combina:</h4>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-3 bg-card p-3 rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Explicações passo a passo</span>
                  </div>
                  <div className="flex items-center gap-3 bg-card p-3 rounded-lg border">
                    <Eye className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Representações visuais intuitivas</span>
                  </div>
                  <div className="flex items-center gap-3 bg-card p-3 rounded-lg border">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Exercícios graduais</span>
                  </div>
                  <div className="flex items-center gap-3 bg-card p-3 rounded-lg border">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Linguagem simples e direta</span>
                  </div>
                  <div className="flex items-center gap-3 bg-card p-3 rounded-lg border md:col-span-2">
                    <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Rigor matemático sem complicações</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <p className="text-lg font-medium text-foreground">
                    🎯 O objetivo é sempre o mesmo: <span className="text-primary">fazer com que cada aluno sinta que consegue aprender frações</span>, mesmo que já tenha tentado antes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">
            🎯 Objetivos do Learn Fractions Joy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✔️</span>
                </div>
                <h3 className="font-semibold text-lg">1. Simplificar as frações ao máximo</h3>
              </div>
              <p className="text-muted-foreground">
                Cada conceito é apresentado com clareza, usando exemplos visuais e comparações do dia a dia.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✔️</span>
                </div>
                <h3 className="font-semibold text-lg">2. Aumentar a confiança do aluno</h3>
              </div>
              <p className="text-muted-foreground">
                Frações deixam de ser um obstáculo e passam a ser uma ferramenta matemática compreensível e útil.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✔️</span>
                </div>
                <h3 className="font-semibold text-lg">3. Criar recursos acessíveis e autónomos</h3>
              </div>
              <p className="text-muted-foreground">
                Guias, exercícios e explicações que permitem aprender ao próprio ritmo, com segurança e autonomia.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✔️</span>
                </div>
                <h3 className="font-semibold text-lg">4. Apoiar pais, professores e tutores</h3>
              </div>
              <p className="text-muted-foreground">
                Materiais práticos que podem ser usados em casa, em sala de aula ou em apoio ao estudo.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✔️</span>
                </div>
                <h3 className="font-semibold text-lg">5. Tornar a aprendizagem leve e motivadora</h3>
              </div>
              <p className="text-muted-foreground">
                A matemática pode ser clara, lógica e até divertida quando apresentada com cuidado, estrutura e propósito.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">
            O Que Oferecemos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-6 bg-card rounded-xl border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Teoria Completa</h3>
                <p className="text-muted-foreground">
                  Módulos teóricos abrangentes que cobrem desde conceitos básicos até operações avançadas com frações.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-card rounded-xl border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Exercícios Práticos</h3>
                <p className="text-muted-foreground">
                  Centenas de exercícios com diferentes níveis de dificuldade e feedback instantâneo.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-card rounded-xl border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Visualizações Interativas</h3>
                <p className="text-muted-foreground">
                  Representações visuais dinâmicas que ajudam a compreender o significado real das frações.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-card rounded-xl border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Quizzes e Flashcards</h3>
                <p className="text-muted-foreground">
                  Ferramentas de revisão e avaliação para consolidar o conhecimento adquirido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Tem questões ou sugestões?</span>
          </div>
          <h2 className="text-2xl font-display font-bold mb-6">
            Entre em Contacto
          </h2>
          <Link 
            to="/contacto" 
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Contactar
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Learn Fractions Joy. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/privacidade" className="hover:text-foreground transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-foreground transition-colors">Termos</Link>
            <Link to="/contacto" className="hover:text-foreground transition-colors">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
