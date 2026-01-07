import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { BookOpen, Target, Users, Heart, GraduationCap, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Sobre o <span className="text-primary">MTNA</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um projeto educativo dedicado a tornar a aprendizagem de frações acessível, 
            divertida e eficaz para estudantes de todas as idades.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold">A Nossa Missão</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A missão do MTNA é democratizar o ensino de matemática, especificamente no domínio das frações. 
              Acreditamos que todos os estudantes, independentemente do seu nível de conhecimento prévio, 
              podem dominar este conceito fundamental com as ferramentas e metodologias certas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O nosso objetivo é proporcionar uma experiência de aprendizagem interativa e envolvente, 
              utilizando visualizações intuitivas, exercícios práticos e feedback imediato para 
              construir uma compreensão sólida e duradoura.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">
            Os Nossos Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border text-center">
              <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Educação Acessível</h3>
              <p className="text-muted-foreground">
                Conteúdos gratuitos e de qualidade, disponíveis para todos os estudantes em qualquer momento.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Aprendizagem Interativa</h3>
              <p className="text-muted-foreground">
                Métodos visuais e práticos que facilitam a compreensão de conceitos matemáticos abstratos.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Excelência Pedagógica</h3>
              <p className="text-muted-foreground">
                Conteúdos desenvolvidos seguindo as melhores práticas de ensino da matemática.
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
                <span className="text-primary font-bold">1</span>
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
                <span className="text-primary font-bold">2</span>
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
                <span className="text-primary font-bold">3</span>
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
                <span className="text-primary font-bold">4</span>
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

        {/* Team Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold">A Nossa Equipa</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              O MTNA é desenvolvido por uma equipa apaixonada por educação e tecnologia. 
              Combinamos experiência em pedagogia matemática com conhecimentos técnicos para 
              criar uma plataforma que realmente faz a diferença na aprendizagem dos estudantes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabalhamos continuamente para melhorar e expandir os nossos conteúdos, 
              incorporando feedback dos utilizadores e as mais recentes pesquisas em educação matemática.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Tem questões ou sugestões?</span>
          </div>
          <h2 className="text-2xl font-display font-bold mb-6">
            Entre em Contacto Connosco
          </h2>
          <Link 
            to="/contato" 
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Contactar
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 MTNA - Domine as Frações. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/privacidade" className="hover:text-foreground transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-foreground transition-colors">Termos</Link>
            <Link to="/contato" className="hover:text-foreground transition-colors">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
