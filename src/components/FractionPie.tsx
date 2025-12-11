import { useState } from "react";

interface FractionPieProps {
  numerator?: number;
  denominator?: number;
  interactive?: boolean;
  size?: number;
  showLabel?: boolean;
  onFractionChange?: (numerator: number, denominator: number) => void;
}

export const FractionPie = ({
  numerator: initialNumerator = 1,
  denominator: initialDenominator = 4,
  interactive = true,
  size = 200,
  showLabel = true,
  onFractionChange,
}: FractionPieProps) => {
  const [numerator, setNumerator] = useState(initialNumerator);
  const [denominator, setDenominator] = useState(initialDenominator);
  const [selectedSlices, setSelectedSlices] = useState<number[]>(
    Array.from({ length: initialNumerator }, (_, i) => i)
  );

  const handleDenominatorChange = (newDenominator: number) => {
    if (newDenominator < 1 || newDenominator > 12) return;
    setDenominator(newDenominator);
    const newNumerator = Math.min(numerator, newDenominator);
    setNumerator(newNumerator);
    setSelectedSlices(Array.from({ length: newNumerator }, (_, i) => i));
    onFractionChange?.(newNumerator, newDenominator);
  };

  const handleSliceClick = (index: number) => {
    if (!interactive) return;
    
    let newSelected: number[];
    if (selectedSlices.includes(index)) {
      newSelected = selectedSlices.filter((i) => i !== index);
    } else {
      newSelected = [...selectedSlices, index].sort((a, b) => a - b);
    }
    
    setSelectedSlices(newSelected);
    setNumerator(newSelected.length);
    onFractionChange?.(newSelected.length, denominator);
  };

  const createSlicePath = (index: number, total: number) => {
    const anglePerSlice = (2 * Math.PI) / total;
    const startAngle = index * anglePerSlice - Math.PI / 2;
    const endAngle = startAngle + anglePerSlice;
    
    const radius = size / 2 - 10;
    const centerX = size / 2;
    const centerY = size / 2;
    
    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);
    
    const largeArcFlag = anglePerSlice > Math.PI ? 1 : 0;
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-lg"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 10}
          fill="hsl(var(--muted))"
          stroke="hsl(var(--border))"
          strokeWidth="2"
        />
        
        {/* Slices */}
        {Array.from({ length: denominator }).map((_, index) => (
          <path
            key={index}
            d={createSlicePath(index, denominator)}
            fill={selectedSlices.includes(index) ? "hsl(var(--primary))" : "hsl(var(--muted))"}
            stroke="hsl(var(--background))"
            strokeWidth="2"
            className={interactive ? "cursor-pointer transition-all duration-200 hover:opacity-80" : ""}
            onClick={() => handleSliceClick(index)}
          />
        ))}
        
        {/* Center circle for visual appeal */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={8}
          fill="hsl(var(--background))"
          stroke="hsl(var(--border))"
          strokeWidth="1"
        />
      </svg>

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
          Clique nas fatias para selecionar/deselecionar
        </p>
      )}
    </div>
  );
};
