import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envia a mensagem por e-mail através do cliente de correio do utilizador
    const body = [
      `Nome: ${formData.name}`,
      `E-mail: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    const mailto = `mailto:mtna.fracoes@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Contacto via site MTNA"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    toast({
      title: "A abrir o seu e-mail...",
      description:
        "A mensagem foi preparada no seu programa de e-mail. Confirme o envio para mtna.fracoes@gmail.com.",
    });

    setIsSubmitting(false);
  };

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
            <MessageSquare className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Contacto</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Direct Contact Info */}
        <div className="bg-primary/5 rounded-xl p-6 mb-6 text-center border">
          <h2 className="font-semibold text-lg mb-2">Contacto Direto</h2>
          <p className="text-muted-foreground mb-3">
            Pode contactar-me diretamente através do e-mail:
          </p>
          <a 
            href="mailto:mtna.fracoes@gmail.com" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-lg"
          >
            <Mail className="h-5 w-5" />
            mtna.fracoes@gmail.com
          </a>
          <p className="text-sm text-muted-foreground mt-3">
            <strong>Maria Teresa Neves Antunes</strong> - Fundadora do MTNA
          </p>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              Formulário de Contacto
            </CardTitle>
            <CardDescription>
              Ou utilize o formulário abaixo para enviar uma mensagem:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Qual o assunto da sua mensagem?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={200}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Escreva sua mensagem aqui..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={2000}
                  className="min-h-[150px] resize-none"
                />
                <p className="text-xs text-muted-foreground text-right">
                  {formData.message.length}/2000 caracteres
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Ao enviar uma mensagem, concorda com a nossa{" "}
            <Link to="/privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
