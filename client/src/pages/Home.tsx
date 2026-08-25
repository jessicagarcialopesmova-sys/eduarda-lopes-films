import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Instagram,
  Menu,
  MessageCircle,
  Play,
  X,
} from "lucide-react";
import { toast } from "sonner";

const asset = (name: string) => `/assets/${name}`;
const heroVideo = asset("olhar-de-direcao.mp4");
const heroPoster = asset("eduarda-bastidor-refinado-02.png");
const mark = asset("elf-mark.png");
const aboutMain = asset("eduarda-retrato-refinado-01.png");
const aboutDetail = asset("eduarda-retrato-camera.webp");
const projectPortrait = asset("eduarda-retrato-espelho.webp");
const projectDirection = asset("eduarda-bastidor-direcao.webp");
const projectEvent = asset("eduarda-bastidor-evento.webp");
const projectCamera = asset("eduarda-retrato-camera.webp");
const projectCloseup = asset("eduarda-camera-closeup.webp");
const projectMonitor = asset("eduarda-camera-monitor.webp");
const projectVertical = asset("eduarda-camera-vertical.webp");
const projectEquipment = asset("eduarda-equipamento-mesa.webp");
const projectRestaurant = asset("eduarda-bastidor-restaurante.webp");
const behindTheScenes = asset("bastidores-em-movimento.mp4");
const presenceOnSet = asset("presenca-em-cena.mp4");
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
  poster: string;
};

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
  { title: "Olhar de direção", source: heroVideo, poster: heroPoster },
  { title: "Bastidores em movimento", source: behindTheScenes, poster: projectMonitor },
  { title: "Presença em cena", source: presenceOnSet, poster: projectCamera },
  { title: "Filme de campanha", source: campaign0716, poster: projectDirection },
  { title: "Filme de marca", source: allegro, poster: projectCloseup },
  { title: "Projeto imobiliário", source: alliance, poster: projectEvent },
  { title: "Campanha de alimentos", source: eggsCampaign, poster: projectEquipment },
  { title: "Campanha de produto", source: productCampaign, poster: aboutMain },
  { title: "Campanha residencial", source: kasanova, poster: projectEvent },
  { title: "Filme automotivo", source: trespach, poster: heroPoster },
  { title: "Conteúdo vertical", source: verticalape, poster: projectVertical },
  { title: "Conteúdo de marca 01", source: brandVideoOne, poster: projectDirection },
  { title: "Conteúdo de marca 02", source: brandVideoTwo, poster: heroPoster },
  { title: "Campanha de lançamento", source: vientos, poster: projectRestaurant },
  { title: "Campanha editorial", source: zenith, poster: projectEvent },
  { title: "Acompanhamento de obra", source: zonaNova, poster: heroPoster },
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
    setSent(true);
    toast.success("Recebi seu projeto. Em breve entro em contato.");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Eduarda Lopes Films — início">
          <img src={mark} alt="" />
          <span><b>Eduarda Lopes</b><small>Films &amp; Digital</small></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#orcamento">Vamos conversar <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(value => !value)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section hero-reframed" aria-labelledby="hero-title">
          <div className="hero-image" style={{ backgroundImage: `url(${heroPoster})` }} aria-hidden="true">
            <video autoPlay muted loop playsInline poster={heroPoster}>
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="hero-content container">
            <p className="eyebrow light"><span className="eyebrow-dot" /> Direção, imagem e movimento.</p>
            <h1 id="hero-title">Transformando<br /><em>intenção</em> em<br />imagem.</h1>
            <div className="hero-bottom">
              <p>Filmes que aproximam.<br />Estratégias que movimentam.</p>
              <a href="#sobre" className="circle-link" aria-label="Conheça meu trabalho"><ArrowDownRight size={24} /></a>
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
              <figure className="about-image-main"><img src={aboutMain} alt="Eduarda com uma câmera durante uma produção" loading="lazy" /></figure>
              <figure className="about-image-detail"><img src={aboutDetail} alt="Detalhe de uma câmera em processo de gravação" loading="lazy" /></figure>
              <div className="image-stamp">DIREÇÃO<br />COM PRESENÇA</div>
            </div>
            <div className="about-copy reveal reveal-delay-2">
              <p className="eyebrow"><span className="eyebrow-dot" /> Sobre o processo</p>
              <h2>Forma para o<br /><em>que precisa mover.</em></h2>
              <p className="lead">Toda marca tem uma história que merece ser vista — não só contada.</p>
              <p>Direção, sensibilidade e estratégia se encontram para criar imagens que fazem sentido no mundo real. Do roteiro à campanha, cada entrega constrói presença com intenção, ritmo e verdade.</p>
              <a href="#servicos" className="text-link">Conheça o processo <ArrowUpRight size={16} /></a>
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
            <p className="portfolio-intro reveal">Frames, processos e campanhas pensados para ganhar presença fora da tela.</p>
            <div className="project-grid project-grid-reframed">
              {projects.map((project, index) => (
                <article className={`project-card ${project.className} reveal reveal-delay-${index % 3}`} key={project.number}>
                  <div className="project-image-wrap"><img src={project.image} alt={project.title} loading="lazy" /><div className="project-overlay"><span>{project.type}</span><ArrowUpRight size={21} /></div></div>
                  <div className="project-meta"><span>{project.number}</span><h3>{project.title}</h3></div>
                </article>
              ))}
            </div>

            <div className="video-strip-heading reveal"><p className="eyebrow"><span className="eyebrow-dot" /> Em movimento</p><p>Algumas cenas do processo, do set e da direção por trás de cada entrega.</p></div>
            <div className="video-reel" aria-label="Esteira de vídeos do portfólio">
              <div className="video-reel-track">
                {[...videos, ...videos].map((video, index) => {
                  const duplicate = index >= videos.length;
                  return (
                    <article className={`video-card reveal reveal-delay-${index % 3}`} key={`${video.title}-${index}`} aria-hidden={duplicate || undefined}>
                      <div className="video-frame">
                        <button className="video-poster" onClick={() => setActiveVideo(video)} tabIndex={duplicate ? -1 : 0} aria-label={`Reproduzir ${video.title}`}>
                          <img src={video.poster} alt="" loading="lazy" /><span className="video-play"><Play size={17} fill="currentColor" /></span>
                        </button>
                      </div>
                      <div className="video-meta"><span>{String((index % videos.length) + 1).padStart(2, "0")}</span><h3>{video.title}</h3></div>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="portfolio-foot reveal"><span className="rule" /><p>Mais histórias e projetos em breve.</p></div>
          </div>
        </section>

        <section className="statement-section statement-reframed" style={{ backgroundImage: `url(${heroPoster})` }}>
          <div className="container statement-inner reveal"><img className="statement-mark" src={mark} alt="" /><p className="eyebrow light"><span className="eyebrow-dot" /> Para marcar sua presença</p><h2>Sua próxima fase<br />merece um registro<br /><em>à altura.</em></h2><a href="#orcamento" className="button button-light">Começar uma conversa <ArrowUpRight size={17} /></a></div>
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
          <div className="container contact-grid"><div className="contact-main reveal reveal-delay-1"><p className="eyebrow light"><span className="eyebrow-dot" /> Contato</p><h2>Tem uma história<br />para <em>contar?</em></h2><p className="contact-lead">Vamos conversar sobre o próximo registro.</p><a className="contact-email" href="mailto:lopeseduarda.mkt@gmail.com">lopeseduarda.mkt@gmail.com <ArrowUpRight size={20} /></a></div><div className="contact-details reveal reveal-delay-2"><p>Projetos em todo o Brasil, com base em Capão da Canoa - RS.</p><a href="https://www.instagram.com/eduardalopesfilms/" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a><a href="https://wa.me/5551990165073?text=Ol%C3%A1%20Eduarda%2C%20quero%20conversar%20sobre%20um%20projeto." target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> WhatsApp</a></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a href="#top" className="footer-brand"><img src={mark} alt="" /><span>Eduarda Lopes <small>Films &amp; Digital</small></span></a><p>Seg — Sex · 09h às 18h<br />Capão da Canoa · RS</p><p>© 2026 Eduarda Lopes Films<br /><a href="#contato">Política de privacidade</a></p><a className="back-top" href="#top" aria-label="Voltar ao topo"><ArrowUpRight size={20} /></a></div></footer>

      {activeVideo && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title} onClick={() => setActiveVideo(null)}>
          <div className="video-modal-card" onClick={event => event.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setActiveVideo(null)} aria-label="Fechar vídeo"><X size={22} /></button>
            <video controls autoPlay muted playsInline poster={activeVideo.poster}>
              <source src={activeVideo.source} type="video/mp4" />
            </video>
            <p>{activeVideo.title}</p>
          </div>
        </div>
      )}

      <a className="whatsapp-float" href="https://wa.me/5551990165073?text=Ol%C3%A1%20Eduarda%2C%20quero%20conversar%20sobre%20um%20projeto." target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><MessageCircle size={28} strokeWidth={1.8} /></a>
    </div>
  );
}
