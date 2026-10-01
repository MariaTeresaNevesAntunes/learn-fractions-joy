import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Termos de Utilização</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground text-lg">
            Última atualização: 1 de outubro de 2026
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground">
              Ao aceder e utilizar a plataforma MTNA - Domine as Frações,
              concorda em cumprir estes Termos de Utilização. Se não concordar
              com qualquer parte destes termos, não deve utilizar a plataforma.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Descrição do Serviço</h2>
            <p className="text-muted-foreground">
              A plataforma MTNA - Domine as Frações é um serviço educativo
              gratuito dedicado ao ensino de frações matemáticas. A plataforma
              oferece:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Conteúdo teórico sobre frações</li>
              <li>Exercícios práticos interativos</li>
              <li>Quizzes para avaliação de conhecimento</li>
              <li>Flashcards para memorização</li>
              <li>Visualizações interativas</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Uso Permitido</h2>
            <p className="text-muted-foreground">
              Pode utilizar a plataforma MTNA - Domine as Frações para fins
              educativos pessoais ou em ambiente escolar. É permitido:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Acessar o conteúdo educacional</li>
              <li>Realizar exercícios e quizzes</li>
              <li>Partilhar o link da aplicação</li>
              <li>Usar como ferramenta de apoio ao ensino</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Restrições de Uso</h2>
            <p className="text-muted-foreground">
              Ao usar a aplicação, concorda em não:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Copiar ou redistribuir o conteúdo sem autorização</li>
              <li>Tentar aceder a sistemas ou dados não autorizados</li>
              <li>Usar a aplicação para fins ilegais</li>
              <li>Interferir no funcionamento normal da aplicação</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Propriedade Intelectual</h2>
            <p className="text-muted-foreground">
              Todo o conteúdo da plataforma MTNA - Domine as Frações, incluindo
              textos, gráficos, logótipos e código, é protegido por direitos de
              autor. A utilização da plataforma não transfere qualquer direito
              de propriedade intelectual.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Isenção de Garantias</h2>
            <p className="text-muted-foreground">
              A aplicação é fornecido "como está", sem garantias de qualquer tipo. 
              Não garantimos que a aplicação estará sempre disponível ou livre de erros. 
              O conteúdo educacional é fornecido para fins informativos e não substitui 
              orientação pedagógica profissional.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground">
              Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais 
              ou consequenciais resultantes do uso ou impossibilidade de uso da aplicação.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Modificações</h2>
            <p className="text-muted-foreground">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              Alterações significativas serão comunicadas através da aplicação. 
              O uso continuado após modificações constitui aceitação dos novos termos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Contacto</h2>
            <p className="text-muted-foreground">
              Para dúvidas sobre estes termos de uso, entre em contacto connosco através da 
              nossa <Link to="/contacto" className="text-primary hover:underline">página de contacto</Link>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Terms;
