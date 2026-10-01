import { useMemo, useState } from "react";
import Header from "@/components/Header";
import AdSensePlaceholder from "@/components/AdSensePlaceholder";
import { PlayCircle, Play } from "lucide-react";

const videoList = [
  {
    id: "v1",
    category: "introducao",
    categoryLabel: "Introdução",
    title: "Introdução às Frações - Exercício Resolvido",
    videoId: "bjebqr-tBdU",
  },
  {
    id: "v2",
    category: "comparar",
    categoryLabel: "Comparar",
    title: "Como Comparar Frações - Exercício Resolvido",
    videoId: "wq7-D3T5rlw",
  },
  {
    id: "v4",
    category: "exercicios",
    categoryLabel: "Exercícios",
    title: "Exercício Resolvido de Frações",
    videoId: "HS9UO5nKgdI",
  },
];

const filters = [
  { value: "all", label: "Todos" },
  { value: "introducao", label: "Introdução" },
  { value: "comparar", label: "Comparar" },
  { value: "exercicios", label: "Exercícios" },
];

const getEmbedUrl = (videoId: string) =>
  `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&origin=https%3A%2F%2Flearn-fractions-joy.com`;

const getWatchUrl = (videoId: string) =>
  `https://www.youtube.com/watch?v=${videoId}`;

const Videos = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredVideos = useMemo(() => {
    if (activeFilter === "all") return videoList;
    return videoList.filter((video) => video.category === activeFilter);
  }, [activeFilter]);

  const featuredVideo = filteredVideos[0];
  const remainingVideos = filteredVideos.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <PlayCircle className="w-8 h-8 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              Galeria de Vídeos
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Assista aos exercícios resolvidos passo a passo e consolide a sua
            compreensão sobre frações.
          </p>
        </div>

        <div className="mb-8 max-w-3xl mx-auto">
          <AdSensePlaceholder
          />
        </div>

        <div className="video-filters" aria-label="Filtros de vídeos">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`video-filter ${activeFilter === filter.value ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="video-gallery">
          {featuredVideo && (
            <article key={featuredVideo.id} className="video-card featured">
              <div className="video-frame-wrap">
                <iframe
                  loading="lazy"
                  title={featuredVideo.title}
                  src={getEmbedUrl(featuredVideo.videoId)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <div className="video-overlay">
                  <a
                    href={getWatchUrl(featuredVideo.videoId)}
                    target="_blank"
                    rel="noreferrer"
                    className="video-play-button"
                  >
                    <Play className="w-4 h-4" />
                    Assistir agora
                  </a>
                </div>
                <div className="video-badge">
                  <Play className="w-3.5 h-3.5" />
                  Destaque
                </div>
              </div>
              <div className="video-meta">
                <span className="video-category">
                  {featuredVideo.categoryLabel}
                </span>
                <h3>{featuredVideo.title}</h3>
              </div>
            </article>
          )}

          {remainingVideos.map((video) => (
            <article key={video.id} className="video-card">
              <div className="video-frame-wrap">
                <iframe
                  loading="lazy"
                  title={video.title}
                  src={getEmbedUrl(video.videoId)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <div className="video-overlay">
                  <a
                    href={getWatchUrl(video.videoId)}
                    target="_blank"
                    rel="noreferrer"
                    className="video-play-button"
                  >
                    <Play className="w-4 h-4" />
                    Assistir agora
                  </a>
                </div>
                <div className="video-badge">
                  <Play className="w-3.5 h-3.5" />
                  Vídeo
                </div>
              </div>
              <div className="video-meta">
                <span className="video-category">{video.categoryLabel}</span>
                <h3>{video.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <AdSensePlaceholder
            compact
          />
        </div>
      </main>
    </div>
  );
};

export default Videos;
