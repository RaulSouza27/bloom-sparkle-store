import { createFileRoute } from "@tanstack/react-router";
import { Search, User, Heart, ShoppingBag, Star, Truck, ShieldCheck, RefreshCcw, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

import heroImg from "@/assets/hero-jewelry.jpg";
import catRings from "@/assets/cat-rings.jpg";
import catNecklaces from "@/assets/cat-necklaces.jpg";
import catEarrings from "@/assets/cat-earrings.jpg";
import catBracelets from "@/assets/cat-bracelets.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = ["Novidades", "Anéis", "Colares", "Brincos", "Pulseiras", "Conjuntos", "Promoções"];

const categories = [
  { name: "Anéis", img: catRings },
  { name: "Colares", img: catNecklaces },
  { name: "Brincos", img: catEarrings },
  { name: "Pulseiras", img: catBracelets },
];

const products = [
  { id: 1, name: "Anel Solitário Aurora", price: 1290, oldPrice: 1490, img: p1, tag: "Best-seller", rating: 4.9, reviews: 128 },
  { id: 2, name: "Colar Pérola Lumière", price: 890, img: p2, rating: 4.8, reviews: 74 },
  { id: 3, name: "Brincos Gota Céline", price: 1150, img: p3, tag: "Novo", rating: 5.0, reviews: 42 },
  { id: 4, name: "Meia Aliança Éclat", price: 1690, oldPrice: 1890, img: p4, rating: 4.9, reviews: 96 },
];

const testimonials = [
  { name: "Marina S.", text: "Comprei o colar de pérola para presentear minha mãe. A embalagem já é um presente à parte — e a peça é ainda mais linda pessoalmente.", rating: 5 },
  { name: "Luiza R.", text: "Uso o anel solitário todos os dias há oito meses. Não escureceu, não perdeu o brilho. Vale cada centavo.", rating: 5 },
  { name: "Beatriz A.", text: "Atendimento impecável. Trocaram o tamanho do anel sem burocracia e chegou em três dias.", rating: 5 },
];

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Differentiators />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground text-xs tracking-[0.25em] uppercase text-center py-2.5 px-4">
      Frete grátis para todo o Brasil acima de R$ 300 · Parcele em até 10x
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20 gap-4">
          <button aria-label="Menu" className="lg:hidden" onClick={() => setOpen(!open)}>
            <span className="block w-5 h-px bg-foreground mb-1.5" />
            <span className="block w-5 h-px bg-foreground mb-1.5" />
            <span className="block w-5 h-px bg-foreground" />
          </button>
          <a href="/" className="font-serif text-3xl tracking-[0.3em] lg:text-4xl text-center lg:text-left">
            AURÉ
          </a>
          <nav className="hidden lg:flex items-center justify-center gap-8 col-start-2 row-start-1">
            {nav.map((item) => (
              <a key={item} href="#" className="text-[13px] tracking-wider text-foreground/80 hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5 justify-self-end">
            <button aria-label="Buscar" className="hover:text-accent transition-colors"><Search size={18} /></button>
            <button aria-label="Conta" className="hidden sm:block hover:text-accent transition-colors"><User size={18} /></button>
            <button aria-label="Favoritos" className="hidden sm:block hover:text-accent transition-colors"><Heart size={18} /></button>
            <button aria-label="Carrinho" className="relative hover:text-accent transition-colors">
              <ShoppingBag size={18} />
              <span className="absolute -top-2 -right-2 bg-gold text-primary-foreground text-[10px] rounded-full w-4 h-4 grid place-items-center font-medium">2</span>
            </button>
          </div>
        </div>
        {open && (
          <nav className="lg:hidden pb-6 flex flex-col gap-3 border-t border-border pt-4">
            {nav.map((item) => (
              <a key={item} href="#" className="text-sm tracking-wider">{item}</a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2 min-h-[70vh] lg:min-h-[85vh]">
        <div className="order-2 lg:order-1 flex items-center px-6 sm:px-12 lg:px-20 py-16 lg:py-0 bg-secondary/50">
          <div className="max-w-lg">
            <div className="eyebrow mb-6">Coleção Primavera · 2026</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.02] mb-6">
              Peças atemporais para <em className="italic text-marsala">quem ama</em> os pequenos rituais.
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-md">
              Joias em ouro 18k e prata 925, desenhadas para acompanhar suas manhãs, jantares e memórias. Feitas à mão, feitas para durar.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#produtos" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-marsala transition-colors">
                Descubra a coleção
              </a>
              <a href="#produtos" className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors">
                Presentear
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative overflow-hidden">
          <img src={heroImg} alt="Colar de ouro com pendente de diamante sobre seda cor champanhe" width={1600} height={1200} className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto" />
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
      <div className="text-center mb-14">
        <div className="eyebrow mb-4">Navegue por categoria</div>
        <h2 className="text-4xl lg:text-5xl">Cada peça, uma história</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {categories.map((c) => (
          <a key={c.name} href="#" className="group block">
            <div className="relative overflow-hidden bg-secondary aspect-[4/5]">
              <img src={c.img} alt={c.name} width={800} height={1000} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <h3 className="text-primary-foreground text-2xl">{c.name}</h3>
                <span className="text-primary-foreground text-xs tracking-[0.2em] uppercase underline-offset-4 group-hover:underline">Ver</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section id="produtos" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="eyebrow mb-4">Mais amadas</div>
            <h2 className="text-4xl lg:text-5xl">Favoritas da casa</h2>
          </div>
          <a href="#" className="text-sm tracking-wider underline-offset-8 underline decoration-gold hover:text-marsala">Ver todas as peças</a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {products.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: typeof products[number] }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden bg-background aspect-square mb-4">
        <img src={p.img} alt={p.name} width={800} height={800} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        {p.tag && (
          <span className="absolute top-3 left-3 bg-background text-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
            {p.tag}
          </span>
        )}
        <button aria-label="Favoritar" className="absolute top-3 right-3 bg-background/90 p-2 rounded-full hover:text-marsala transition-colors">
          <Heart size={14} />
        </button>
        <button className="absolute bottom-0 inset-x-0 bg-primary text-primary-foreground text-xs tracking-[0.25em] uppercase py-3.5 translate-y-full group-hover:translate-y-0 transition-transform">
          Adicionar ao carrinho
        </button>
      </div>
      <div>
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={11} className={i < Math.round(p.rating) ? "fill-gold text-gold" : "text-border"} />
          ))}
          <span className="text-[11px] text-muted-foreground ml-1">({p.reviews})</span>
        </div>
        <h3 className="text-lg leading-tight mb-1.5">{p.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium">{formatBRL(p.price)}</span>
          {p.oldPrice && <span className="text-xs text-muted-foreground line-through">{formatBRL(p.oldPrice)}</span>}
        </div>
      </div>
    </article>
  );
}

function Differentiators() {
  const items = [
    { icon: Truck, title: "Frete grátis", text: "Acima de R$ 300 para todo o Brasil" },
    { icon: ShieldCheck, title: "Compra segura", text: "Pagamento criptografado e certificado SSL" },
    { icon: RefreshCcw, title: "Troca fácil", text: "30 dias para trocar ou devolver, sem custo" },
    { icon: Star, title: "Garantia vitalícia", text: "Nossas peças têm garantia de manutenção" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {items.map((it) => (
          <div key={it.title} className="text-center">
            <it.icon className="mx-auto text-gold mb-4" size={28} strokeWidth={1.2} />
            <h3 className="text-lg mb-1.5">{it.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-primary text-primary-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="eyebrow mb-4 text-primary-foreground/60">Quem usa, ama</div>
          <h2 className="text-4xl lg:text-5xl text-primary-foreground">Mais de 12.000 clientes</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-t border-primary-foreground/20 pt-8">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-xl lg:text-2xl leading-snug mb-6 text-primary-foreground/95">
                “{t.text}”
              </blockquote>
              <figcaption className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 lg:py-28 text-center">
      <div className="eyebrow mb-4">Newsletter</div>
      <h2 className="text-4xl lg:text-5xl mb-4">10% de desconto <em className="italic text-marsala">na primeira compra</em></h2>
      <p className="text-muted-foreground mb-8">
        Receba novidades da coleção, curadorias exclusivas e convites para pré-vendas.
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <input
          type="email"
          required
          placeholder="seu melhor e-mail"
          aria-label="Endereço de e-mail"
          className="flex-1 bg-transparent border border-border px-5 py-3.5 text-sm focus:outline-none focus:border-gold placeholder:text-muted-foreground"
        />
        <button className="bg-primary text-primary-foreground px-8 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-marsala transition-colors">
          Assinar
        </button>
      </form>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Institucional", items: ["Sobre a Auré", "Nossa história", "Sustentabilidade", "Trabalhe conosco"] },
    { title: "Ajuda", items: ["Política de troca", "Frete e prazos", "Guia de tamanhos", "Perguntas frequentes"] },
    { title: "Contato", items: ["atendimento@aure.com.br", "WhatsApp: (11) 9 0000-0000", "Seg. a sex., 9h às 18h"] },
  ];
  return (
    <footer className="bg-secondary/60 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="font-serif text-3xl tracking-[0.3em] mb-4">AURÉ</div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Joias femininas atemporais, feitas à mão em ouro 18k e prata 925.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="hover:text-marsala"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-marsala"><Facebook size={18} /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="eyebrow mb-5 text-foreground">{c.title}</h4>
              <ul className="space-y-3">
                {c.items.map((i) => (
                  <li key={i}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="hairline mb-8" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Auré Joias. Todos os direitos reservados. CNPJ 00.000.000/0001-00</p>
          <p className="tracking-widest uppercase">Visa · Mastercard · Pix · Boleto · Amex</p>
        </div>
      </div>
    </footer>
  );
}
