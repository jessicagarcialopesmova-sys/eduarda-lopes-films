import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Instagram,
  Menu,
  Play,
  X,
} from "lucide-react";
import { toast } from "sonner";

type AnalyticsParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, eventName: string, params?: AnalyticsParams) => void;
  }
}

function trackAnalyticsEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
    return;
  }
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(["event", eventName, params]);
}

const asset = (name: string) => `/assets/${name}`;
const heroPoster = asset("eduarda-bastidor-direcao.webp");
const mark = asset("eduarda-lopes-films-logo-clean.png");
const aboutMain = asset("eduarda-retrato-camera.webp");
const aboutDetail = asset("eduarda-retrato-refinado-01.png");
const projectPortrait = asset("eduarda-retrato-espelho.webp");
const projectDirection = asset("eduarda-bastidor-direcao.webp");
const projectEvent = asset("eduarda-bastidor-evento.webp");
const projectCamera = asset("eduarda-retrato-camera.webp");
const projectCloseup = asset("eduarda-camera-closeup.webp");
const projectMonitor = asset("eduarda-camera-monitor.webp");
const projectVertical = asset("eduarda-camera-vertical.webp");
const projectEquipment = asset("eduarda-equipamento-mesa.webp");
const projectRestaurant = asset("eduarda-bastidor-restaurante.webp");
const campaign0716 = asset("filme-campanha.mp4");
const allegro = asset("filme-marca.mp4");
const alliance = asset("projeto-imobiliario.mp4");
const eggsCampaign = asset("campanha-alimentos.mp4");
const productCampaign = asset("campanha-produto.mp4");
const kasanova = asset("campanha-residencial.mp4");
const trespach = asset("filme-automotivo.mp4");
const verticalape = asset("conteudo-vertical.mp4");
const brandVideoOne = asset("conteudo-marca-01.mp4");
const brandVideoTwo = asset("conteudo-marca-02.mp4");
const vientos = asset("campanha-lancamento.mp4");
const zenith = asset("campanha-editorial.mp4");
const zonaNova = asset("zona-nova-obra.mp4");

type Project = {
  title: string;
  type: string;
  image: string;
  number: string;
  className: string;
};

type VideoItem = {
  title: string;
  source: string;
};

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const projects: Project[] = [
  { title: "Presença em quadro", type: "Retrato de marca", image: projectPortrait, number: "01", className: "project-tall" },
  { title: "Por trás da lente", type: "Bastidores de produção", image: projectDirection, number: "02", className: "project-wide" },
  { title: "Direção em movimento", type: "Cobertura e conteúdo", image: projectEvent, number: "03", className: "project-detail" },
  { title: "Entre takes", type: "Processo criativo", image: projectCamera, number: "04", className: "project-detail" },
  { title: "Luz de set", type: "Imagem e atmosfera", image: projectCloseup, number: "05", className: "project-wide" },
  { title: "O olhar no monitor", type: "Direção e acompanhamento", image: projectMonitor, number: "06", className: "project-detail" },
  { title: "No eixo da cena", type: "Captação vertical", image: projectVertical, number: "07", className: "project-detail" },
  { title: "Tudo pronto para gravar", type: "Produção audiovisual", image: projectEquipment, number: "08", className: "project-wide" },
  { title: "Depois da gravação", type: "Bastidor e presença", image: projectRestaurant, number: "09", className: "project-detail" },
];

const videos: VideoItem[] = [
  { title: "Filme de campanha", source: campaign0716 },
  { title: "Filme de marca", source: allegro },
  { title: "Projeto imobiliário", source: alliance },
  { title: "Campanha de alimentos", source: eggsCampaign },
  { title: "Campanha de produto", source: productCampaign },
  { title: "Campanha residencial", source: kasanova },
  { title: "Filme automotivo", source: trespach },
  { title: "Conteúdo vertical", source: verticalape },
  { title: "Conteúdo de marca 01", source: brandVideoOne },
  { title: "Conteúdo de marca 02", source: brandVideoTwo },
  { title: "Campanha de lançamento", source: vientos },
  { title: "Campanha editorial", source: zenith },
  { title: "Acompanhamento de obra", source: zonaNova },
];

const navItems = [
  ["Sobre", "sobre"],
  ["Serviços", "servicos"],
  ["Portfólio", "portfolio"],
  ["Contato", "contato"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const videoReelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const show = (element: Element) => element.classList.add("is-visible");

    reveals.forEach(element => {
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 1.12 && bounds.bottom > -80) show(element);
    });

    document.documentElement.classList.add("reveal-ready");
    if (!("IntersectionObserver" in window)) {
      reveals.forEach(show);
      return () => document.documentElement.classList.remove("reveal-ready");
    }

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && show(entry.target)),
      { threshold: 0.08, rootMargin: "0px 0px 12% 0px" },
    );
    reveals.forEach(element => observer.observe(element));
    const fallback = window.setTimeout(() => reveals.forEach(show), 1400);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const viewedSections = new Set<string>();
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const sectionId = (entry.target as HTMLElement).id;
        if (!sectionId || viewedSections.has(sectionId)) return;
        viewedSections.add(sectionId);
        trackAnalyticsEvent("section_view", { section_id: sectionId });
      }),
      { threshold: 0.25 },
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeVideo) return;
    const closeWithEscape = (event: KeyboardEvent) => event.key === "Escape" && setActiveVideo(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeWithEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [activeVideo]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    trackAnalyticsEvent("contact_form_submit", {
      service: String(formData.get("service") || "not_specified"),
    });
    setSent(true);
    toast.success("Recebi seu projeto. Em breve entro em contato.");
  };

  const closeMenu = () => setMenuOpen(false);
  const scrollVideos = (direction: number) => {
    trackAnalyticsEvent("portfolio_reel_navigation", { direction: direction > 0 ? "next" : "previous" });
    videoReelRef.current?.scrollBy({ left: direction * Math.max(videoReelRef.current.clientWidth * 0.72, 260), behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Eduarda Lopes Films — início">
          <img src={mark} alt="Eduarda Lopes Films" />
        </a>
        <nav className={`desktop-nav ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => { trackAnalyticsEvent("navigation_click", { label, destination: id }); closeMenu(); }}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#orcamento" onClick={() => trackAnalyticsEvent("cta_click", { location: "header", destination: "orcamento" })}>Vamos conversar <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(value => !value)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section hero-reframed" aria-labelledby="hero-title">
          <div className="hero-image" style={{ backgroundImage: `url(${heroPoster})` }} aria-hidden="true">
            <img src={heroPoster} alt="Bastidores de produção por trás da lente" />
          </div>
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="hero-content container">
            <p className="eyebrow light"><span className="eyebrow-dot" /> Direção, imagem e movimento.</p>
            <h1 id="hero-title">Transformando<br /><em>intenção</em> em<br />imagem.</h1>
            <div className="hero-bottom">
              <p>Filmes que aproximam.<br />Estratégias que movimentam.</p>
              <a href="#sobre" className="circle-link" aria-label="Conheça meu trabalho" onClick={() => trackAnalyticsEvent("cta_click", { location: "hero", destination: "sobre" })}><ArrowDownRight size={24} /></a>
            </div>
          </div>
          <div className="hero-side-note">EDUARDA LOPES<br /><span>FILMS + DIGITAL</span></div>
          <div className="hero-caption">ESTÚDIO CRIATIVO · BRASIL <span>© 2026</span></div>
        </section>

        <div className="ticker" aria-label="Manifesto da marca">
          <div className="ticker-track">
            {["Filmes que aproximam", "Estratégias que movimentam", "Intenção em imagem", "Filmes que aproximam", "Estratégias que movimentam", "Intenção em imagem"].map((item, index) => (
              <span key={`${item}-${index}`}>{item} <i>✳</i></span>
            ))}
          </div>
        </div>

        <section id="sobre" className="intro-section section-pad about-reframed">
          <div className="container about-layout">
            <div className="about-stage reveal reveal-delay-1">
              <figure className="about-image-main"><img src={aboutMain} alt="Detalhe de uma câmera em processo de gravação" loading="lazy" /></figure>
              <figure className="about-image-detail"><img src={aboutDetail} alt="Eduarda com uma câmera durante uma produção" loading="lazy" /></figure>
              <div className="image-stamp">DIREÇÃO<br />COM PRESENÇA</div>
            </div>
            <div className="about-copy reveal reveal-delay-2">
              <p className="eyebrow"><span className="eyebrow-dot" /> Sobre o processo</p>
              <h2>Forma para o<br /><em>que precisa mover.</em></h2>
              <p className="lead">Toda marca tem uma história que merece ser vista — não só contada.</p>
              <p>Direção, sensibilidade e estratégia se encontram para criar imagens que fazem sentido no mundo real. Do roteiro à campanha, cada entrega constrói presença com intenção, ritmo e verdade.</p>
              <a href="#servicos" className="text-link" onClick={() => trackAnalyticsEvent("cta_click", { location: "sobre", destination: "servicos" })}>Conheça o processo <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="servicos" className="services-section services-reframed section-pad">
          <div className="container">
            <div className="section-heading reveal">

              <div><p className="eyebrow light"><span className="eyebrow-dot" /> Serviços</p><h2>Imagem com<br /><em>direção.</em></h2></div>
              <p className="heading-aside light-aside">Cada entrega nasce de uma escuta atenta e encontra seu formato no encontro entre estética, estratégia e movimento.</p>
            </div>
            <div className="service-list">
              <article className="service-card reveal">
                <div className="service-top"><span>01</span><Play size={18} fill="currentColor" /></div>
                <h3>Filmes com<br /><em>direção.</em></h3>
                <p>Do primeiro take ao corte final, vídeos que traduzem a essência da sua marca com clareza, ritmo e emoção.</p>
                <div className="service-tags"><span>Institucional</span><span>Redes sociais</span><span>Eventos</span><span>Publicidade</span></div>
              </article>
              <article className="service-card service-card-accent reveal reveal-delay-1">
                <div className="service-top"><span>02</span><ArrowUpRight size={18} /></div>
                <h3>Estratégia que<br /><em>move atenção.</em></h3>
                <p>Estratégia, mídia e performance transformam presença em movimento — com decisões guiadas por dados.</p>
                <div className="service-tags"><span>Estratégia</span><span>Meta Ads</span><span>Google Ads</span><span>ChatGPT Ads</span><span>TikTok Ads</span><span>Performance</span></div>
              </article>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio-section portfolio-reframed section-pad">
          <div className="container">
            <div className="section-heading portfolio-heading reveal">

              <div><p className="eyebrow"><span className="eyebrow-dot" /> Portfólio</p><h2>Presença<br /><em>em cena.</em></h2></div>
              <p className="heading-aside">Eduarda Lopes Films<br />Filmes que conectam marcas, histórias e momentos.</p>
            </div>
            <p className="portfolio-intro reveal">Frames, processos e celebrações pensados para ganhar presença fora da tela — de marcas e empresas a casamentos, aniversários e eventos que merecem ser lembrados.</p>
            <div className="project-grid project-grid-reframed">
              {projects.map((project, index) => (
                <article className={`project-card ${project.className} reveal reveal-delay-${index % 3}`} key={project.number}>
                  <div className="project-image-wrap"><img src={project.image} alt={project.title} loading="lazy" /><div className="project-overlay"><span>{project.type}</span><ArrowUpRight size={21} /></div></div>
                  <div className="project-meta"><span>{project.number}</span><h3>{project.title}</h3></div>
                </article>
              ))}
            </div>

            <div className="video-strip-heading reveal"><p className="eyebrow"><span className="eyebrow-dot" /> Em movimento</p><p>Algumas cenas do processo, do set e da direção por trás de cada entrega.</p></div>
            <div className="video-reel-controls" aria-label="Controles da galeria de vídeos">
              <span>Deslize para ver os projetos</span>
              <div>
                <button type="button" onClick={() => scrollVideos(-1)} aria-label="Vídeos anteriores"><ArrowLeft size={18} /></button>
                <button type="button" onClick={() => scrollVideos(1)} aria-label="Próximos vídeos"><ArrowRight size={18} /></button>
              </div>
            </div>
            <div className="video-reel" aria-label="Galeria de vídeos do portfólio" ref={videoReelRef}>
              <div className="video-reel-track">
                {videos.map((video, index) => (
                  <article className={`video-card reveal reveal-delay-${index % 3}`} key={video.title}>
                    <div className="video-frame">
                      <button className="video-poster" onClick={() => { trackAnalyticsEvent("video_play", { title: video.title }); setActiveVideo(video); }} aria-label={`Reproduzir ${video.title}`}>
                        <video className="video-preview" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={video.source} type="video/mp4" /></video><span className="video-play"><Play size={17} fill="currentColor" /></span>
                      </button>
                    </div>
                    <div className="video-meta"><span>{String(index + 1).padStart(2, "0")}</span><h3>{video.title}</h3></div>
                  </article>
                ))}
              </div>
            </div>
            <div className="portfolio-foot reveal"><span className="rule" /><p>Mais histórias e projetos em breve.</p></div>
          </div>
        </section>

        <section className="statement-section statement-reframed" style={{ backgroundImage: `url(${heroPoster})` }}>
          <div className="container statement-inner reveal"><img className="statement-mark" src={mark} alt="Eduarda Lopes Films" /><p className="eyebrow light"><span className="eyebrow-dot" /> Para marcar sua presença</p><h2>Sua próxima fase<br />merece um registro<br /><em>à altura.</em></h2><a href="#orcamento" className="button button-light" onClick={() => trackAnalyticsEvent("cta_click", { location: "statement", destination: "orcamento" })}>Começar uma conversa <ArrowUpRight size={17} /></a></div>
        </section>

        <section id="orcamento" className="budget-section section-pad">
          <div className="container budget-grid">
            <div className="budget-intro reveal"><p className="eyebrow"><span className="eyebrow-dot" /> Orçamento</p><h2>Vamos tirar<br /><em>do papel?</em></h2><p>Fale sobre o que está nascendo. A partir daqui, o projeto encontra ritmo, formato e direção para ganhar presença.</p><div className="budget-checks"><span><Check size={15} /> Respondo em até 2 dias úteis</span><span><Check size={15} /> Conversa sem compromisso</span></div></div>
            <form className="budget-form reveal reveal-delay-1" onSubmit={handleSubmit}>
              <div className="form-row"><label>Seu nome<input required name="name" placeholder="Como podemos te chamar?" /></label><label>E-mail<input required type="email" name="email" placeholder="voce@empresa.com" /></label></div>
              <div className="form-row"><label>WhatsApp<input required name="phone" placeholder="(00) 00000-0000" /><span className="field-help">Inclua o DDD</span></label><label>Tipo de serviço<select required name="service" defaultValue=""><option value="" disabled>Escolha uma opção</option><option>Produção audiovisual</option><option>Gestão digital / tráfego pago</option><option>Os dois</option></select></label></div>
              <label>Fale sobre o projeto<textarea required name="project" rows={4} placeholder="O que precisa ganhar presença, ritmo ou movimento?" /></label>
              <div className="form-submit"><button className="button button-dark" type="submit">{sent ? "Mensagem enviada" : "Enviar projeto"} <ArrowUpRight size={17} /></button><span>Ao enviar, você concorda com nossa política de privacidade.</span></div>
            </form>
          </div>
        </section>

        <section id="contato" className="contact-section section-pad">
          <div className="container contact-grid"><div className="contact-main reveal reveal-delay-1"><p className="eyebrow light"><span className="eyebrow-dot" /> Contato</p><h2>Tem uma história<br />para <em>contar?</em></h2><p className="contact-lead">Vamos conversar sobre o próximo registro.</p><a className="contact-email" href="mailto:lopeseduarda.mkt@gmail.com">lopeseduarda.mkt@gmail.com <ArrowUpRight size={20} /></a></div><div className="contact-details reveal reveal-delay-2"><p>Projetos em todo o Brasil, com base em Capão da Canoa - RS.</p><a href="https://www.instagram.com/eduardalopesfilms/" target="_blank" rel="noreferrer" onClick={() => trackAnalyticsEvent("social_click", { network: "instagram" })}><Instagram size={16} /> Instagram</a><a href="https://wa.me/5551990165073?text=Ol%C3%A1%20Eduarda%2C%20quero%20conversar%20sobre%20um%20projeto." target="_blank" rel="noreferrer" onClick={() => trackAnalyticsEvent("social_click", { network: "whatsapp" })}><ArrowUpRight size={16} /> WhatsApp</a></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a href="#top" className="footer-brand"><img src={mark} alt="Eduarda Lopes Films" /></a><p>Atendimento personalizado<br />Capão da Canoa · RS</p><p>© 2026 Eduarda Lopes Films<br /><a href="#contato">Política de privacidade</a></p><a className="back-top" href="#top" aria-label="Voltar ao topo"><ArrowUpRight size={20} /></a></div></footer>

      {activeVideo && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title} onClick={() => setActiveVideo(null)}>
          <div className="video-modal-card" onClick={event => event.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setActiveVideo(null)} aria-label="Fechar vídeo"><X size={22} /></button>
            <video controls autoPlay muted playsInline>
              <source src={activeVideo.source} type="video/mp4" />
            </video>
            <p>{activeVideo.title}</p>
          </div>
        </div>
      )}

      <a className="whatsapp-float" href="https://wa.me/5551990165073?text=Ol%C3%A1%20Eduarda%2C%20quero%20conversar%20sobre%20um%20projeto." target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp" onClick={() => trackAnalyticsEvent("whatsapp_click", { location: "floating_button" })}><WhatsAppIcon size={30} /></a>
    </div>
  );
}
