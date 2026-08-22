/**
 * Direção visual: Editorial solar — cinema autoral, materiais naturais, contraste de cacau e areia,
 * composição assimétrica e interações discretas. Esta página alterna inspiração e ação para conduzir
 * o visitante da descoberta ao orçamento.
 */
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Check, Instagram, Linkedin, Menu, Play, X, Youtube } from "lucide-react";
import { toast } from "sonner";

const projects = [
  { title: "Uma marca em cena", type: "Filme institucional", image: "/manus-storage/elf-project-01_d9d97e0b.jpg", number: "01" },
  { title: "Direção em movimento", type: "Conteúdo para redes", image: "/manus-storage/elf-project-02_37dfdb86.jpg", number: "02" },
  { title: "No centro da história", type: "Filme publicitário", image: "/manus-storage/elf-project-03_d91b4ef6.jpg", number: "03" },
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

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    reveals.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    toast.success("Recebemos seu projeto. Em breve a gente entra em contato.");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Eduarda Lopes Films — início">
          <img src="/manus-storage/elf-mark_15392fb0.png" alt="" />
          <span><b>Eduarda Lopes</b><small>Films &amp; Digital</small></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#orcamento">Vamos conversar <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-content container">
            <p className="eyebrow light"><span className="eyebrow-dot" /> Produção audiovisual + gestão digital</p>
            <h1 id="hero-title">Transformamos<br /><em>intenção</em> em<br />imagem.</h1>
            <div className="hero-bottom">
              <p>Filmes que aproximam.<br />Estratégias que movimentam.</p>
              <a href="#sobre" className="circle-link" aria-label="Conheça a Eduarda Lopes Films"><ArrowDownRight size={24} /></a>
            </div>
          </div>
          <div className="hero-caption">ESTÚDIO CRIATIVO · BRASIL <span>© 2026</span></div>
        </section>

        <section id="sobre" className="intro-section section-pad">
          <div className="container intro-grid">
            <div className="section-index reveal">01 <span>/ 05</span></div>
            <div className="intro-copy reveal reveal-delay-1">
              <p className="eyebrow"><span className="eyebrow-dot" /> Sobre a marca</p>
              <h2>O que você quer <em>mover</em>?</h2>
              <p className="lead">A gente acredita que toda marca tem uma história que merece ser vista — não só contada.</p>
              <p>Na Eduarda Lopes Films, unimos direção, sensibilidade e estratégia para criar imagens que fazem sentido no mundo real. Do roteiro à campanha, construímos presença com intenção, ritmo e verdade.</p>
              <a href="#servicos" className="text-link">Conheça nosso jeito de fazer <ArrowUpRight size={16} /></a>
            </div>
            <div className="intro-note reveal reveal-delay-2">
              <span className="note-line" />
              <p>“Conte o que você quer mover.<br />A gente desenha o caminho.”</p>
            </div>
          </div>
        </section>

        <section id="servicos" className="services-section section-pad">
          <div className="container">
            <div className="section-heading reveal"><div className="section-index">02 <span>/ 05</span></div><div><p className="eyebrow light"><span className="eyebrow-dot" /> O que fazemos</p><h2>Imagem com<br /><em>direção.</em></h2></div></div>
            <div className="service-list">
              <article className="service-card reveal">
                <div className="service-top"><span>01</span><Play size={18} fill="currentColor" /></div>
                <h3>Produção<br /><em>audiovisual</em></h3>
                <p>Do primeiro take ao corte final, criamos filmes que traduzem a essência da sua marca com clareza e emoção.</p>
                <div className="service-tags"><span>Institucional</span><span>Redes sociais</span><span>Eventos</span><span>Publicidade</span></div>
              </article>
              <article className="service-card service-card-accent reveal reveal-delay-1">
                <div className="service-top"><span>02</span><ArrowUpRight size={18} /></div>
                <h3>Gestão digital<br /><em>+ tráfego pago</em></h3>
                <p>Estratégia, mídia e performance para transformar atenção em movimento — com decisões guiadas por dados.</p>
                <div className="service-tags"><span>Estratégia</span><span>Meta Ads</span><span>Google Ads</span><span>Performance</span></div>
              </article>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio-section section-pad">
          <div className="container">
            <div className="section-heading portfolio-heading reveal"><div className="section-index">03 <span>/ 05</span></div><div><p className="eyebrow"><span className="eyebrow-dot" /> Portfólio</p><h2>Feito para<br /><em>ficar.</em></h2></div><p className="heading-aside">Frames, processos e campanhas que ganharam presença fora da tela.</p></div>
            <div className="project-grid">
              {projects.map((project, index) => <article className={`project-card project-${index + 1} reveal reveal-delay-${index}`} key={project.number}>
                <div className="project-image-wrap"><img src={project.image} alt={project.title} /><div className="project-overlay"><span>{project.type}</span><ArrowUpRight size={21} /></div></div>
                <div className="project-meta"><span>{project.number}</span><h3>{project.title}</h3></div>
              </article>)}
            </div>
            <div className="portfolio-foot reveal"><span className="rule" /><p>Portfólio em construção — mais histórias em breve.</p></div>
          </div>
        </section>

        <section className="statement-section">
          <div className="container statement-inner reveal"><img className="statement-mark" src="/manus-storage/elf-mark_15392fb0.png" alt="" /><p className="eyebrow light"><span className="eyebrow-dot" /> Para marcas com presença</p><h2>Sua próxima fase<br />merece uma imagem<br /><em>à altura.</em></h2><a href="#orcamento" className="button button-light">Começar uma conversa <ArrowUpRight size={17} /></a></div>
        </section>

        <section id="orcamento" className="budget-section section-pad">
          <div className="container budget-grid">
            <div className="budget-intro reveal"><div className="section-index">04 <span>/ 05</span></div><p className="eyebrow"><span className="eyebrow-dot" /> Orçamento</p><h2>Vamos tirar<br /><em>do papel?</em></h2><p>Fale sobre o que está nascendo. A partir daqui, a gente encontra o ritmo, o formato e a direção para sua história.</p><div className="budget-checks"><span><Check size={15} /> Resposta em até 2 dias úteis</span><span><Check size={15} /> Conversa sem compromisso</span></div></div>
            <form className="budget-form reveal reveal-delay-1" onSubmit={handleSubmit}>
              <div className="form-row"><label>Seu nome<input required name="name" placeholder="Como podemos te chamar?" /></label><label>E-mail<input required type="email" name="email" placeholder="voce@empresa.com" /></label></div>
              <div className="form-row"><label>WhatsApp<input required name="phone" placeholder="(00) 00000-0000" /></label><label>Tipo de serviço<select required name="service" defaultValue=""><option value="" disabled>Escolha uma opção</option><option>Produção audiovisual</option><option>Gestão digital / tráfego pago</option><option>Os dois</option></select></label></div>
              <label>Fale sobre o projeto<textarea required name="project" rows={4} placeholder="O que precisa ganhar presença, ritmo ou movimento?" /></label>
              <div className="form-submit"><button className="button button-dark" type="submit">{sent ? "Mensagem enviada" : "Enviar projeto"} <ArrowUpRight size={17} /></button><span>Ao enviar, você concorda com nossa política de privacidade.</span></div>
            </form>
          </div>
        </section>

        <section id="contato" className="contact-section section-pad">
          <div className="container contact-grid"><div className="section-index reveal">05 <span>/ 05</span></div><div className="contact-main reveal reveal-delay-1"><p className="eyebrow light"><span className="eyebrow-dot" /> Contato</p><h2>Tem uma história<br />para <em>contar?</em></h2><a className="contact-email" href="mailto:oi@eduardalopesfilms.com">oi@eduardalopesfilms.com <ArrowUpRight size={20} /></a></div><div className="contact-details reveal reveal-delay-2"><p>Atendemos projetos em todo o Brasil, com base em São Paulo.</p><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a><a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="https://youtube.com" target="_blank" rel="noreferrer"><Youtube size={16} /> YouTube</a></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a href="#top" className="footer-brand"><img src="/manus-storage/elf-mark_15392fb0.png" alt="" /><span>Eduarda Lopes <small>Films &amp; Digital</small></span></a><p>Seg — Sex · 09h às 18h<br />São Paulo · Brasil</p><p>© 2026 Eduarda Lopes Films<br /><a href="#contato">Política de privacidade</a></p><a className="back-top" href="#top" aria-label="Voltar ao topo"><ArrowUpRight size={20} /></a></div></footer>
    </div>
  );
}
