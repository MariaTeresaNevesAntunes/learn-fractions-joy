import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/25">
              <span className="text-primary-foreground font-black text-sm tracking-tight">MTNA</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-xs">½</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-tight">MTNA</span>
            <span className="text-xs text-muted-foreground">Domine as Frações</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/teoria" 
            className={isActive('/teoria') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground transition-colors'}
          >
            Teoria
          </Link>
          <Link 
            to="/exercicios" 
            className={isActive('/exercicios') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground transition-colors'}
          >
            Exercícios
          </Link>
          <Link 
            to="/quiz" 
            className={isActive('/quiz') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground transition-colors'}
          >
            Quiz
          </Link>
          <Link 
            to="/flashcards" 
            className={isActive('/flashcards') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground transition-colors'}
          >
            Flashcards
          </Link>
          <Link 
            to="/videos" 
            className={isActive('/videos') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground transition-colors'}
          >
            Vídeos
          </Link>
          <Link 
            to="/sobre"
            className={isActive('/sobre') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground transition-colors'}
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
