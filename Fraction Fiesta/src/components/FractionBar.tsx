import { useState } from "react";

interface FractionBarProps {
  numerator?: number;
  denominator?: number;
  interactive?: boolean;
  width?: number;
  height?: number;
  showLabel?: boolean;
  orientation?: "horizontal" | "vertical";
  onFractionChange?: (numerator: number, denominator: number) => void;
}

export const FractionBar = ({
  numerator: initialNumerator = 2,
  denominator: initialDenominator = 5,
  interactive = true,
  width = 300,
  height = 60,
  showLabel = true,
  orientation = "horizontal",
  onFractionChange,
}: FractionBarProps) => {
  const [numerator, setNumerator] = useState(initialNumerator);
  const [denominator, setDenominator] = useState(initialDenominator);
  const [selectedParts, setSelectedParts] = useState<number[]>(
    Array.from({ length: initialNumerator }, (_, i) => i)
  );

  const isHorizontal = orientation === "horizontal";
  const barWidth = isHorizontal ? width : height;
  const barHeight = isHorizontal ? height : width;

  const handleDenominatorChange = (newDenominator: number) => {
    if (newDenominator < 1 || newDenominator > 12) return;
    setDenominator(newDenominator);
    const newNumerator = Math.min(numerator, newDenominator);
    setNumerator(newNumerator);
    setSelectedParts(Array.from({ length: newNumerator }, (_, i) => i));
    onFractionChange?.(newNumerator, newDenominator);
  };

  const handlePartClick = (index: number) => {
    if (!interactive) return;
    
    let newSelected: number[];
    if (selectedParts.includes(index)) {
      newSelected = selectedParts.filter((i) => i !== index);
    } else {
      newSelected = [...selectedParts, index].sort((a, b) => a - b);
    }
    
    setSelectedParts(newSelected);
    setNumerator(newSelected.length);
    onFractionChange?.(newSelected.length, denominator);
  };

  const partSize = isHorizontal 
    ? (barWidth - 4) / denominator 
    : (barHeight - 4) / denominator;

  return (
    <div className={`flex ${isHorizontal ? 'flex-col' : 'flex-row'} items-center gap-4`}>
      <div
        className="relative rounded-lg overflow-hidden border-2 border-border bg-muted"
        style={{ 
          width: isHorizontal ? barWidth : barHeight,
          height: isHorizontal ? barHeight : barWidth,
        }}
      >
        <div className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} h-full w-full p-0.5 gap-0.5`}>
          {Array.from({ length: denominator }).map((_, index) => (
            <div
              key={index}
              onClick={() => handlePartClick(index)}
              className={`
                ${isHorizontal ? 'h-full' : 'w-full'}
                rounded-sm transition-all duration-200
                ${selectedParts.includes(index) 
                  ? 'bg-primary shadow-inner' 
                  : 'bg-muted-foreground/20'
                }
                ${interactive ? 'cursor-pointer hover:opacity-80' : ''}
              `}
              style={{
                [isHorizontal ? 'width' : 'height']: `${partSize}px`,
              }}
            />
          ))}
        </div>
      </div>

      {showLabel && (
        <div className="text-center">
          <div className="text-3xl font-bold text-foreground">
            <span className="text-primary">{numerator}</span>
            <span className="mx-1">/</span>
            <span>{denominator}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {numerator} de {denominator} partes
          </p>
        </div>
      )}

      {interactive && (
        <div className="flex items-center gap-4">
          <label className="text-sm text-muted-foreground">Divisões:</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleDenominatorChange(denominator - 1)}
              disabled={denominator <= 1}
              className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              -
            </button>
            <span className="w-8 text-center font-medium">{denominator}</span>
            <button
              onClick={() => handleDenominatorChange(denominator + 1)}
              disabled={denominator >= 12}
              className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              +
            </button>
          </div>
        </div>
      )}

      {interactive && (
        <p className="text-xs text-muted-foreground text-center">
          Clique nas partes para selecionar/deselecionar
        </p>
      )}
    </div>
  );
};
