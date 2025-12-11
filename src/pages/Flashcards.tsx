import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shuffle, RotateCcw, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { flashcards } from '@/data/flashcardsData';
import { useProgress } from '@/hooks/useProgress';

const Flashcards = () => {
  const navigate = useNavigate();
  const { markFlashcardReviewed, progress } = useProgress();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<typeof flashcards>([]);

  const categories = useMemo(() => {
    const cats = new Set(flashcards.map(f => f.category));
    return Array.from(cats);
  }, []);

  const filteredCards = useMemo(() => {
    if (shuffledCards.length > 0) return shuffledCards;
    return selectedCategory === 'all' 
      ? flashcards 
      : flashcards.filter(f => f.category === selectedCategory);
  }, [selectedCategory, shuffledCards]);

  const currentCard = filteredCards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && currentCard) {
      markFlashcardReviewed(currentCard.id);
    }
  };

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % filteredCards.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const shuffleCards = () => {
    const baseCards = selectedCategory === 'all' 
      ? flashcards 
      : flashcards.filter(f => f.category === selectedCategory);
    const shuffled = [...baseCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const resetCards = () => {
    setShuffledCards([]);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setShuffledCards([]);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const reviewedCount = progress.flashcardsReviewed.length;
  const totalCards = flashcards.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">½</span>
            </div>
            <span className="font-display font-bold text-xl">Frações</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/teoria" className="text-muted-foreground hover:text-foreground transition-colors">Teoria</Link>
            <Link to="/exercicios" className="text-muted-foreground hover:text-foreground transition-colors">Exercícios</Link>
            <Link to="/quiz" className="text-muted-foreground hover:text-foreground transition-colors">Quiz</Link>
            <Link to="/flashcards" className="text-foreground font-medium">Flashcards</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate('/')} className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Início
        </Button>

        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Layers className="w-8 h-8 text-primary" />
            Flashcards
          </h1>
          <p className="text-muted-foreground text-lg">
            Memorize conceitos-chave virando os cartões. Clique para revelar a resposta!
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {reviewedCount}/{totalCards} cartões revisados
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Categoria:</span>
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Categorias</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 ml-auto">
            <Button variant="outline" size="sm" onClick={shuffleCards} className="gap-2">
              <Shuffle className="w-4 h-4" /> Embaralhar
            </Button>
            <Button variant="outline" size="sm" onClick={resetCards} className="gap-2">
              <RotateCcw className="w-4 h-4" /> Reiniciar
            </Button>
          </div>
        </div>

        {/* Flashcard */}
        {currentCard ? (
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-4">
              <Badge variant="outline">{currentCard.category}</Badge>
              <p className="text-sm text-muted-foreground mt-2">
                Cartão {currentIndex + 1} de {filteredCards.length}
              </p>
            </div>

            <div 
              className="perspective-1000 cursor-pointer"
              onClick={handleFlip}
            >
              <div 
                className={`relative w-full aspect-[3/2] transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : '' }}
              >
                {/* Front */}
                <Card 
                  className={`absolute inset-0 backface-hidden flex items-center justify-center p-8 ${!isFlipped ? 'z-10' : 'z-0'}`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <CardContent className="text-center p-0">
                    <p className="font-display text-xl md:text-2xl font-semibold">
                      {currentCard.front}
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Clique para ver a resposta
                    </p>
                  </CardContent>
                </Card>

                {/* Back */}
                <Card 
                  className={`absolute inset-0 backface-hidden flex items-center justify-center p-8 bg-primary/5 border-primary/20 ${isFlipped ? 'z-10' : 'z-0'}`}
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <CardContent className="text-center p-0">
                    <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line">
                      {currentCard.back}
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Clique para voltar à pergunta
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button variant="outline" size="lg" onClick={prevCard} className="gap-2">
                <ChevronLeft className="w-5 h-5" /> Anterior
              </Button>
              <Button size="lg" onClick={nextCard} className="gap-2">
                Próximo <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-1 mt-6 flex-wrap">
              {filteredCards.slice(0, 20).map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/30'}`}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsFlipped(false);
                  }}
                />
              ))}
              {filteredCards.length > 20 && (
                <span className="text-xs text-muted-foreground ml-2">+{filteredCards.length - 20}</span>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum flashcard encontrado.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Flashcards;
