import { Link } from "react-router-dom";
import { ArrowLeft, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cookies = () => {
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
            <Cookie className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Política de Cookies</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground text-lg">
            Última atualização: {new Date().toLocaleDateString("pt-PT")}
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              1. O Que São Cookies?
            </h2>
            <p className="text-muted-foreground">
              Cookies são pequenos ficheiros de texto que são armazenados no seu
              dispositivo (computador, tablet ou telemóvel) quando visita um
              website. São amplamente utilizados para fazer os websites
              funcionarem de forma mais eficiente e para fornecer informações
              aos proprietários do site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              2. Cookies Utilizados Nesta Plataforma
            </h2>
            <p className="text-muted-foreground">
              A plataforma MTNA - Domine as Frações utiliza os seguintes tipos
              de cookies:
            </p>

            <div className="bg-muted/30 p-4 rounded-lg space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">
                  Cookies Essenciais (localStorage)
                </h3>
                <p className="text-muted-foreground text-sm">
                  Utilizamos localStorage (uma tecnologia semelhante a cookies)
                  para guardar o seu progresso de aprendizado, pontuações e
                  preferências. Estes dados permanecem apenas no seu
                  dispositivo.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">
                  Cookies de Publicidade (Google AdSense)
                </h3>
                <p className="text-muted-foreground text-sm">
                  O Google AdSense só é carregado após o seu consentimento e
                  pode utilizar cookies para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                  <li>Personalizar anúncios com base nos seus interesses</li>
                  <li>Limitar a frequência de anúncios específicos</li>
                  <li>Medir o desempenho de campanhas publicitárias</li>
                  <li>Prevenir fraudes publicitárias</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              3. Cookies de Terceiros
            </h2>
            <p className="text-muted-foreground">
              Os cookies de terceiros só são utilizados para publicidade depois
              de autorizar essa categoria e são geridos pelo Google. Para mais
              informações:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <a
                  href="https://policies.google.com/technologies/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Como o Google utiliza cookies
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Política de Privacidade do Google
                </a>
              </li>
              <li>
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Configurações de Anúncios do Google
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              4. Como Gerir Cookies
            </h2>
            <p className="text-muted-foreground">
              Pode controlar e/ou eliminar cookies conforme desejar. Eis como:
            </p>

            <div className="space-y-4">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">
                  Através do Navegador
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  A maioria dos navegadores permite:
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>
                    Ver quais cookies estão armazenados e eliminá-los
                    individualmente
                  </li>
                  <li>Bloquear cookies de terceiros</li>
                  <li>Bloquear cookies de sites específicos</li>
                  <li>Bloquear todos os cookies</li>
                  <li>Eliminar todos os cookies quando fechar o navegador</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">
                  Desativar Publicidade Personalizada
                </h3>
                <p className="text-muted-foreground text-sm">
                  Para desativar a publicidade personalizada do Google:
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                  <li>
                    Visite as{" "}
                    <a
                      href="https://www.google.com/settings/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Configurações de Anúncios do Google
                    </a>
                  </li>
                  <li>
                    Visite{" "}
                    <a
                      href="https://www.aboutads.info/choices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      aboutads.info
                    </a>{" "}
                    para gerir anúncios de múltiplos anunciantes
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              5. Impacto da Desativação de Cookies
            </h2>
            <p className="text-muted-foreground">
              Se optar por recusar os cookies de publicidade:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                O seu progresso de aprendizado não será guardado entre sessões
              </li>
              <li>
                Não serão carregados os cookies de publicidade do Google AdSense
              </li>
              <li>
                O seu progresso continuará a depender do armazenamento local do
                navegador
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              6. Contacto
            </h2>
            <p className="text-muted-foreground">
              Para questões sobre esta Política de Cookies, contacte-nos:
            </p>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-foreground font-medium">
                Maria Teresa Neves Antunes
              </p>
              <p className="text-muted-foreground">
                E-mail:{" "}
                <a
                  href="mailto:mtna.fracoes@gmail.com"
                  className="text-primary hover:underline"
                >
                  mtna.fracoes@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link to="/privacidade" className="text-primary hover:underline mr-6">
            Política de Privacidade
          </Link>
          <Link to="/termos" className="text-primary hover:underline">
            Termos de Utilização
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Cookies;
