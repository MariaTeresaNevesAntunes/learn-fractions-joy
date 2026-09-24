import { Helmet } from "react-helmet-async";
import { useLocation, useParams } from "react-router-dom";
import { theoryModules } from "@/data/theoryContent";

const SITE_URL = "https://learn-fractions-joy.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const SUFFIX = "MTNA - Aprenda Frações";

type Meta = {
  title: string;
  description: string;
  indexable?: boolean;
  type?: "website" | "article";
};

const routeMeta: Record<string, Meta> = {
  "/": {
    title: "MTNA - Aprenda Frações com Maria Teresa Neves Antunes",
    description:
      "Aprenda frações de forma simples, interativa e gratuita. Teoria, exercícios, quizzes, flashcards e visualizações para crianças e adultos dominarem as frações com confiança.",
  },
  "/teoria": {
    title: `Teoria das Frações — Módulos Progressivos | ${SUFFIX}`,
    description:
      "Módulos teóricos sobre frações, do conceito de numerador e denominador às operações e problemas aplicados, explicados passo a passo.",
  },
  "/exercicios": {
    title: `Exercícios de Frações Resolvidos | ${SUFFIX}`,
    description:
      "Pratique frações com exercícios de nível fácil, médio e difícil, com correção imediata e dicas de resolução.",
  },
  "/quiz": {
    title: `Quiz de Frações — Teste os Seus Conhecimentos | ${SUFFIX}`,
    description:
      "Responda a quizzes de frações por módulo ou ao quiz geral e veja a sua pontuação e progresso em tempo real.",
  },
  "/flashcards": {
    title: `Flashcards de Frações para Memorizar Conceitos | ${SUFFIX}`,
    description:
      "Memorize definições, regras e propriedades das frações com flashcards interativos para crianças e adultos.",
  },
  "/visualizacoes": {
    title: `Visualizações Interativas de Frações (Pizzas e Barras) | ${SUFFIX}`,
    description:
      "Manipule pizzas e barras interativas para visualizar frações, comparar quantidades e compreender numerador e denominador.",
  },
  "/sobre": {
    title: `Sobre a Autora — Maria Teresa Neves Antunes | ${SUFFIX}`,
    description:
      "Conheça a autora do projeto, licenciada em Matemática, e a missão de facilitar o ensino e a aprendizagem da matemática.",
  },
  "/contacto": {
    title: `Contacto | ${SUFFIX}`,
    description:
      "Envie a sua dúvida, sugestão ou pedido de colaboração para mtna.fracoes@gmail.com.",
  },
  "/privacidade": {
    title: `Política de Privacidade | ${SUFFIX}`,
    description:
      "Como tratamos dados, cookies e publicidade nesta plataforma educativa sobre frações.",
  },
  "/termos": {
    title: `Termos de Utilização | ${SUFFIX}`,
    description:
      "Condições de utilização da plataforma educativa MTNA sobre frações.",
  },
  "/cookies": {
    title: `Política de Cookies | ${SUFFIX}`,
    description:
      "Informação sobre os cookies utilizados nesta plataforma, incluindo cookies de publicidade.",
  },
};

const RouteSeo = () => {
  const { pathname } = useLocation();
  const { moduleId } = useParams();
  const normalizedPath =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  let meta = routeMeta[normalizedPath];
  let isTheoryModule = false;

  if (!meta && normalizedPath.startsWith("/teoria/")) {
    const id = moduleId ?? normalizedPath.split("/")[2];
    const mod = theoryModules.find((m) => m.id === id);
    meta = mod
      ? {
          title: `${mod.title} — Teoria das Frações | ${SUFFIX}`,
          description: mod.description,
          type: "article",
        }
      : {
          title: `Módulo de Teoria | ${SUFFIX}`,
          description: "Módulo teórico sobre frações.",
          indexable: false,
        };
    isTheoryModule = Boolean(mod);
  }

  if (!meta) {
    meta = {
      title: `Página não encontrada | ${SUFFIX}`,
      description: "A página que procura não existe.",
      indexable: false,
    };
  }

  const isAlias = normalizedPath === "/contato";
  const canonicalPath = isAlias ? "/contacto" : normalizedPath;
  const url = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const indexable = meta.indexable !== false && !isAlias;
  const schema = isTheoryModule
    ? {
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: meta.title,
        description: meta.description,
        url,
        inLanguage: "pt-PT",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        educationalUse: "instruction",
        learningResourceType: "lesson",
      }
    : {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: meta.title,
        description: meta.description,
        url,
        inLanguage: "pt-PT",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content={indexable ? "index, follow" : "noindex, follow"} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={meta.type ?? "website"} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="pt_PT" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default RouteSeo;
