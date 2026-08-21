import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Theory from "./pages/Theory";
import TheoryModule from "./pages/TheoryModule";
import Exercises from "./pages/Exercises";
import Quiz from "./pages/Quiz";
import Flashcards from "./pages/Flashcards";
import Visualizations from "./pages/Visualizations";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import RouteSeo from "./components/RouteSeo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteSeo />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/teoria" element={<Theory />} />
          <Route path="/teoria/:moduleId" element={<TheoryModule />} />
          <Route path="/exercicios" element={<Exercises />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/visualizacoes" element={<Visualizations />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
