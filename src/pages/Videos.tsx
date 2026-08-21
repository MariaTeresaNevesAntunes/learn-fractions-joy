import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
}

// Substitua os placeholders abaixo pelos IDs reais dos vídeos do YouTube.
const sampleVideos: VideoItem[] = [
  {
    id: 'v1',
    title: 'Introdução às Frações - Exercício Resolvido',
    youtubeId: '',
  },
  {
    id: 'v2',
    title: 'Como Comparar Frações - Exercício Resolvido',
    youtubeId: '',
  },
  {
    id: 'v3',
    title: 'Operações com Frações - Exercício Resolvido',
    youtubeId: '',
  },
];

const Videos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate('/')} className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Início
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <PlayCircle className="w-8 h-8 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              Galeria de Vídeos
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Assista aos exercícios resolvidos passo a passo e consolide a sua compreensão sobre frações.
          </p>
        </div>

        <section aria-label="Galeria de vídeos" className="video-gallery mb-16">
          {sampleVideos.map((video) => (
            <article key={video.id} className="video-card">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <h3>{video.title}</h3>
            </article>
          ))}
        </section>

        <section
          aria-labelledby="theory-heading"
          className="max-w-4xl mx-auto bg-card border rounded-2xl p-6 md:p-10 shadow-sm"
        >
          <h2 id="theory-heading" className="font-display text-2xl md:text-3xl font-bold mb-6">
            Explicação Teórica das Frações
          </h2>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="mb-4">
              Uma fração é uma forma matemática de representar uma parte de um todo que foi dividido em partes iguais. Quando falamos em frações, estamos a dividir algo — seja um objeto, uma quantidade ou uma medida — em partes de igual tamanho e a considerar apenas algumas dessas partes. O conceito de fração está presente no nosso quotidiano de forma natural: quando partilhamos uma pizza, medimos ingredientes para uma receita, dividimos o tempo de utilização de um objeto ou calculamos descontos numa loja, estamos, na verdade, a trabalhar com frações.
            </p>

            <p className="mb-4">
              A fração é normalmente escrita na forma <em>a/b</em>, em que <em>a</em> e <em>b</em> são números inteiros e <em>b</em> é diferente de zero. O número que aparece por cima, chamado <strong>numerador</strong>, indica quantas partes estamos a considerar. O número que aparece por baixo, chamado <strong>denominador</strong>, indica em quantas partes iguais o todo foi dividido. Por exemplo, na fração 3/4, o denominador 4 diz-nos que o todo foi dividido em 4 partes iguais, enquanto o numerador 3 indica que estamos a considerar 3 dessas partes.
            </p>

            <p className="mb-4">
              O numerador desempenha um papel fundamental porque representa a quantidade que queremos expressar. Se temos uma barra de chocolate dividida em 8 quadrados iguais e comemos 5 quadrados, a fração 5/8 representa a parte que comemos. Aqui, o numerador é 5, o que significa que foram consumidas 5 partes da barra. Quanto maior for o numerador, maior é a parte representada, desde que o denominador seja o mesmo.
            </p>

            <p className="mb-4">
              O denominador, por sua vez, define o tamanho de cada parte. Quando dividimos um todo em mais partes, cada parte fica menor. Por isso, 1/8 representa uma parte menor do que 1/4, mesmo que o numerador seja igual a 1 em ambos os casos. O denominador funciona como uma espécie de "escala" que nos permite comparar quantidades de forma precisa. Sem o denominador, não saberíamos se estamos a falar de partes grandes ou pequenas.
            </p>

            <p className="mb-4">
              As frações aparecem constantemente no nosso dia a dia. Quando uma receita pede meia chávena de açúcar, estamos a usar a fração 1/2. Quando olhamos para o relógio e vemos que já passaram quinze minutos da hora, estamos a ver 1/4 de uma hora. Quando um desconto de 25% é aplicado num artigo, podemos pensar nesse valor como a fração 1/4 do preço original. Até nas conversas mais simples, como "um terço da turma está ausente", estamos a usar frações para descrever uma parte de um grupo.
            </p>

            <p>
              Compreender bem o conceito de fração, o significado do numerador e do denominador, é essencial para avançar na matemática. As frações são a base para operar com números decimais, percentagens, razões e proporções. Dominar este tema permite resolver problemas práticos com confiança, desde calcular quantidades em receitas até perceber melhor informações financeiras e estatísticas. Por isso, aprender frações não é apenas um objetivo escolar — é uma competência útil para toda a vida.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Videos;
