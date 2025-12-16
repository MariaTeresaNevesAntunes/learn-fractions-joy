import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Política de Privacidade</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground text-lg">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Introdução</h2>
            <p className="text-muted-foreground">
              Esta Política de Privacidade descreve como o FraçõesApp ("nós", "nosso" ou "aplicativo") 
              coleta, usa e protege as informações dos usuários. Valorizamos sua privacidade e estamos 
              comprometidos em proteger seus dados pessoais.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Dados Coletados</h2>
            <p className="text-muted-foreground">
              Nosso aplicativo funciona inteiramente no seu navegador e armazena dados apenas localmente 
              no seu dispositivo usando localStorage. Os dados armazenados incluem:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Progresso de aprendizado (módulos completados)</li>
              <li>Pontuações de exercícios e quizzes</li>
              <li>Flashcards revisados</li>
              <li>Preferências de uso do aplicativo</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Uso dos Dados</h2>
            <p className="text-muted-foreground">
              Os dados armazenados localmente são utilizados exclusivamente para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Salvar seu progresso de aprendizado</li>
              <li>Personalizar sua experiência de estudo</li>
              <li>Permitir que você retome de onde parou</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground">
              Não compartilhamos, vendemos ou transferimos seus dados para terceiros. Todos os dados 
              permanecem armazenados localmente no seu dispositivo e não são enviados para servidores externos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Segurança</h2>
            <p className="text-muted-foreground">
              Como os dados são armazenados localmente no seu dispositivo, a segurança depende das 
              configurações de segurança do seu navegador e dispositivo. Recomendamos manter seu 
              navegador atualizado.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Seus Direitos</h2>
            <p className="text-muted-foreground">
              Você pode a qualquer momento:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Limpar os dados do localStorage através das configurações do navegador</li>
              <li>Desativar o armazenamento local nas configurações do navegador</li>
              <li>Solicitar informações sobre os dados armazenados</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Contato</h2>
            <p className="text-muted-foreground">
              Para dúvidas sobre esta política de privacidade, entre em contato conosco através da 
              nossa <Link to="/contato" className="text-primary hover:underline">página de contato</Link>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
