import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Circle, RectangleHorizontal, GitCompare } from "lucide-react";
import { FractionPie } from "@/components/FractionPie";
import { FractionBar } from "@/components/FractionBar";
import { FractionComparison } from "@/components/FractionComparison";

type VisualizationType = "pie" | "bar" | "comparison";

const Visualizations = () => {
  const [activeType, setActiveType] = useState<VisualizationType>("pie");
  const [comparisonVisual, setComparisonVisual] = useState<"pie" | "bar">("bar");

  const tabs = [
    { id: "pie" as const, label: "Pizza", icon: Circle },
    { id: "bar" as const, label: "Barra", icon: RectangleHorizontal },
    { id: "comparison" as const, label: "Comparar", icon: GitCompare },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Visualizações Interativas
              </h1>
              <p className="text-muted-foreground text-sm">
                Explore frações de forma visual e manipule os valores
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveType(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeType === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeType === "pie" && (
            <div className="animate-fade-in">
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-semibold text-foreground mb-2 text-center">
                  Fração em Pizza
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                  Clique nas fatias para selecionar partes da fração. Use os botões para mudar o número de divisões.
                </p>
                <div className="flex justify-center">
                  <FractionPie size={280} />
                </div>
              </div>

              <div className="mt-8 bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">💡 Dica</h3>
                <p className="text-muted-foreground">
                  A representação em pizza é ótima para visualizar frações como "partes de um todo". 
                  Cada fatia representa uma parte igual do círculo completo. Quando você seleciona 
                  fatias, está escolhendo quantas partes do total você quer representar.
                </p>
              </div>
            </div>
          )}

          {activeType === "bar" && (
            <div className="animate-fade-in">
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-semibold text-foreground mb-2 text-center">
                  Fração em Barra
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                  Clique nas partes para selecionar. Use os botões para mudar o número de divisões.
                </p>
                <div className="flex flex-col items-center gap-8">
                  <FractionBar width={400} height={80} />
                  
                  <div className="w-full h-px bg-border" />
                  
                  <div>
                    <p className="text-sm text-muted-foreground text-center mb-4">Orientação Vertical</p>
                    <FractionBar 
                      width={300} 
                      height={60} 
                      orientation="vertical"
                      numerator={3}
                      denominator={6}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">💡 Dica</h3>
                <p className="text-muted-foreground">
                  A representação em barra é muito útil para comparar frações lado a lado. 
                  Também é a forma mais comum de representar frações em réguas e instrumentos de medida.
                </p>
              </div>
            </div>
          )}

          {activeType === "comparison" && (
            <div className="animate-fade-in">
              <div className="flex justify-center gap-4 mb-6">
                <button
                  onClick={() => setComparisonVisual("bar")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    comparisonVisual === "bar"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  Usar Barras
                </button>
                <button
                  onClick={() => setComparisonVisual("pie")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    comparisonVisual === "pie"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  Usar Pizzas
                </button>
              </div>

              <FractionComparison visualType={comparisonVisual} />

              <div className="mt-8 bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">💡 Dica</h3>
                <p className="text-muted-foreground">
                  Comparar frações visualmente ajuda a entender conceitos como frações equivalentes 
                  (1/2 = 2/4 = 3/6) e a ordenar frações. Tente criar frações equivalentes e veja 
                  como o símbolo muda para "="!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Examples Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Exemplos Comuns
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: 1, d: 2, label: "Metade" },
              { n: 1, d: 3, label: "Um terço" },
              { n: 1, d: 4, label: "Um quarto" },
              { n: 3, d: 4, label: "Três quartos" },
            ].map((example) => (
              <div
                key={`${example.n}-${example.d}`}
                className="bg-card rounded-xl border border-border p-4 flex flex-col items-center"
              >
                <FractionPie
                  numerator={example.n}
                  denominator={example.d}
                  size={100}
                  interactive={false}
                  showLabel={false}
                />
                <div className="mt-3 text-center">
                  <p className="text-lg font-bold text-foreground">
                    {example.n}/{example.d}
                  </p>
                  <p className="text-sm text-muted-foreground">{example.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Visualizations;
