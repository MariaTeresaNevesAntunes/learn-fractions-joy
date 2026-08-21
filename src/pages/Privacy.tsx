import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon" aria-label="Voltar ao início">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Política de Privacidade</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground text-lg">
            Última atualização: {new Date().toLocaleDateString('pt-PT')}
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Introdução</h2>
            <p className="text-muted-foreground">
              Esta Política de Privacidade descreve como o MTNA - Domine as Frações ("nós", "nosso" ou "plataforma"), 
              desenvolvido por <strong>Maria Teresa Neves Antunes</strong>, coleta, usa e protege as informações dos 
              utilizadores. Valorizamos a sua privacidade e estamos comprometidos em proteger os seus dados pessoais.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Responsável pelo Tratamento de Dados</h2>
            <p className="text-muted-foreground">
              A responsável pelo tratamento dos dados desta plataforma é:
            </p>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-foreground font-medium">Maria Teresa Neves Antunes</p>
              <p className="text-muted-foreground">Licenciada em Matemática - Universidad Nacional Abierta</p>
              <p className="text-muted-foreground">
                E-mail: <a href="mailto:mtna.fracoes@gmail.com" className="text-primary hover:underline">mtna.fracoes@gmail.com</a>
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Dados Coletados</h2>
            <p className="text-muted-foreground">
              A nossa plataforma funciona inteiramente no seu navegador e armazena dados apenas localmente 
              no seu dispositivo usando localStorage. Os dados armazenados incluem:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Progresso de aprendizado (módulos completados)</li>
              <li>Pontuações de exercícios e quizzes</li>
              <li>Flashcards revisados</li>
              <li>Preferências de uso da plataforma</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Uso dos Dados</h2>
            <p className="text-muted-foreground">
              Os dados armazenados localmente são utilizados exclusivamente para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Salvar o seu progresso de aprendizado</li>
              <li>Personalizar a sua experiência de estudo</li>
              <li>Permitir que retome de onde parou</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Publicidade e Cookies de Terceiros</h2>
            <p className="text-muted-foreground">
              Esta plataforma utiliza o <strong>Google AdSense</strong> para exibir anúncios. O Google AdSense pode 
              utilizar cookies e tecnologias semelhantes para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Exibir anúncios personalizados com base nos seus interesses</li>
              <li>Limitar o número de vezes que vê um anúncio</li>
              <li>Medir a eficácia das campanhas publicitárias</li>
            </ul>
            <p className="text-muted-foreground">
              Para mais informações sobre como o Google utiliza os seus dados, consulte a{" "}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Política de Privacidade do Google
              </a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Gestão de Cookies</h2>
            <p className="text-muted-foreground">
              Pode gerir as suas preferências de cookies a qualquer momento através das configurações do seu navegador. 
              Também pode visitar a nossa <Link to="/cookies" className="text-primary hover:underline">Política de Cookies</Link> para 
              mais informações sobre os tipos de cookies utilizados e como desativá-los.
            </p>
            <p className="text-muted-foreground">
              Para desativar a publicidade personalizada do Google, visite as{" "}
              <a 
                href="https://www.google.com/settings/ads" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Configurações de Anúncios do Google
              </a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground">
              Não compartilhamos, vendemos ou transferimos os seus dados pessoais para terceiros, exceto:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Dados de cookies utilizados pelo Google AdSense para fins publicitários (conforme descrito acima)</li>
              <li>Quando exigido por lei ou ordem judicial</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Segurança</h2>
            <p className="text-muted-foreground">
              Como os dados são armazenados localmente no seu dispositivo, a segurança depende das 
              configurações de segurança do seu navegador e dispositivo. Recomendamos manter o seu 
              navegador atualizado.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Os Seus Direitos</h2>
            <p className="text-muted-foreground">
              Tem o direito de:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Limpar os dados do localStorage através das configurações do navegador</li>
              <li>Desativar o armazenamento local nas configurações do navegador</li>
              <li>Solicitar informações sobre os dados armazenados</li>
              <li>Desativar cookies de publicidade personalizada</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">10. Alterações a Esta Política</h2>
            <p className="text-muted-foreground">
              Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas 
              nesta página com a data de atualização revista.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">11. Contacto</h2>
            <p className="text-muted-foreground">
              Para questões sobre esta Política de Privacidade ou sobre os seus dados, contacte-nos:
            </p>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-foreground font-medium">Maria Teresa Neves Antunes</p>
              <p className="text-muted-foreground">
                E-mail: <a href="mailto:mtna.fracoes@gmail.com" className="text-primary hover:underline">mtna.fracoes@gmail.com</a>
              </p>
              <p className="text-muted-foreground">
                Página de Contacto: <Link to="/contacto" className="text-primary hover:underline">Formulário de Contacto</Link>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link to="/cookies" className="text-primary hover:underline mr-6">
            Política de Cookies
          </Link>
          <Link to="/termos" className="text-primary hover:underline">
            Termos de Utilização
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Privacy;