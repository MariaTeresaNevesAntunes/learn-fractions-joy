import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { theoryModules } from "@/data/theoryContent";
import { useProgress } from "@/hooks/useProgress";
import Header from "@/components/Header";
import AdSensePlaceholder from "@/components/AdSensePlaceholder";

const Theory = () => {
  const navigate = useNavigate();
  const { progress } = useProgress();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao Início
        </Button>

        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Teoria Completa
          </h1>
          <p className="text-muted-foreground text-lg">
            Aprenda frações passo a passo, do conceito básico até aplicações
            avançadas.
          </p>
        </div>

        <div className="mb-8 max-w-3xl mx-auto">
          <AdSensePlaceholder
            compact
          />
        </div>

        <div className="grid gap-4">
          {theoryModules.map((module, index) => {
            const isCompleted = progress.completedModules.includes(module.id);
            return (
              <Card
                key={module.id}
                className={`card-hover cursor-pointer ${isCompleted ? "border-secondary/50 bg-secondary/5" : ""}`}
                onClick={() => navigate(`/teoria/${module.id}`)}
              >
                <CardHeader className="flex flex-row items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 ${isCompleted ? "bg-secondary/20" : "bg-primary/10"}`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-7 h-7 text-secondary" />
                    ) : (
                      module.icon
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        Módulo {index + 1}
                      </Badge>
                      {isCompleted && (
                        <Badge className="bg-secondary text-secondary-foreground text-xs">
                          Concluído
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="font-display text-xl">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {module.description}
                    </CardDescription>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0" />
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Theory;
