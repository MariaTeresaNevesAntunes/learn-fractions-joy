import { useState } from "react";
import { FractionPie } from "./FractionPie";
import { FractionBar } from "./FractionBar";

interface FractionComparisonProps {
  visualType?: "pie" | "bar";
}

export const FractionComparison = ({ visualType = "bar" }: FractionComparisonProps) => {
  const [fraction1, setFraction1] = useState({ numerator: 1, denominator: 2 });
  const [fraction2, setFraction2] = useState({ numerator: 2, denominator: 4 });

  const value1 = fraction1.numerator / fraction1.denominator;
  const value2 = fraction2.numerator / fraction2.denominator;

  const getComparison = () => {
    if (Math.abs(value1 - value2) < 0.0001) return "=";
    return value1 > value2 ? ">" : "<";
  };

  const getComparisonText = () => {
    const comparison = getComparison();
    if (comparison === "=") return "As frações são equivalentes!";
    if (comparison === ">") return "A primeira fração é maior";
    return "A segunda fração é maior";
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-card rounded-xl border border-border">
      <h3 className="text-xl font-semibold text-foreground">Compare as Frações</h3>
      
      <div className="flex flex-wrap items-center justify-center gap-8">
        <div className="flex flex-col items-center">
          {visualType === "pie" ? (
            <FractionPie
              numerator={fraction1.numerator}
              denominator={fraction1.denominator}
              size={160}
              onFractionChange={(n, d) => setFraction1({ numerator: n, denominator: d })}
            />
          ) : (
            <FractionBar
              numerator={fraction1.numerator}
              denominator={fraction1.denominator}
              width={200}
              height={50}
              onFractionChange={(n, d) => setFraction1({ numerator: n, denominator: d })}
            />
          )}
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl font-bold text-primary">{getComparison()}</span>
        </div>

        <div className="flex flex-col items-center">
          {visualType === "pie" ? (
            <FractionPie
              numerator={fraction2.numerator}
              denominator={fraction2.denominator}
              size={160}
              onFractionChange={(n, d) => setFraction2({ numerator: n, denominator: d })}
            />
          ) : (
            <FractionBar
              numerator={fraction2.numerator}
              denominator={fraction2.denominator}
              width={200}
              height={50}
              onFractionChange={(n, d) => setFraction2({ numerator: n, denominator: d })}
            />
          )}
        </div>
      </div>

      <div className={`text-center p-3 rounded-lg ${
        getComparison() === "=" 
          ? "bg-primary/10 text-primary" 
          : "bg-muted text-muted-foreground"
      }`}>
        <p className="font-medium">{getComparisonText()}</p>
        <p className="text-sm mt-1">
          {fraction1.numerator}/{fraction1.denominator} = {value1.toFixed(3)} | {fraction2.numerator}/{fraction2.denominator} = {value2.toFixed(3)}
        </p>
      </div>
    </div>
  );
};
