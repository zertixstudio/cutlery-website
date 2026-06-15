import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock, Menu, X } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import space1 from "@/assets/space-1.jpg";
import space2 from "@/assets/space-2.jpg";
import space3 from "@/assets/space-3.jpg";
import space4 from "@/assets/space-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cutlery" },
      { name: "description", content: "Cutlery in Porto: elegant fine dining, seasonal tasting menus and a curated wine list in a dark emerald sanctuary." },
      { property: "og:title", content: "Cutlery — Culinary Artistry in Porto" },
      { property: "og:description", content: "Elegant fine dining in the heart of Porto." },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Espaço", href: "#espaco" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

type MenuItem = { name: string; desc: string; price: string };
const MENU: Record<string, MenuItem[]> = {
  Starters: [
    { name: "Oyster & Champagne Mignonette", desc: "Gillardeau oysters, shallot, finger lime", price: "24" },
    { name: "Beef Tartare", desc: "Hand-cut tenderloin, smoked yolk, sourdough crisp", price: "22" },
    { name: "Burrata di Puglia", desc: "Heirloom tomato, basil oil, aged balsamic", price: "19" },
    { name: "Tuna Crudo", desc: "Yellowfin, yuzu kosho, avocado, sesame", price: "26" },
  ],
  Mains: [
    { name: "Dry-Aged Ribeye", desc: "45-day aged, bone marrow, charred shallot", price: "62" },
    { name: "Black Cod Miso", desc: "Saikyo marinade, daikon, pickled ginger", price: "48" },
    { name: "Wild Turbot", desc: "Brown butter, capers, Jersey royals", price: "54" },
    { name: "Truffle Risotto", desc: "Carnaroli, aged parmesan, fresh Alba truffle", price: "44" },
  ],
  Desserts: [
    { name: "Dark Chocolate Soufflé", desc: "Valrhona 70%, crème anglaise, sea salt", price: "16" },
    { name: "Pastel de Nata Reimagined", desc: "Vanilla custard, caramelised puff, port reduction", price: "14" },
    { name: "Tonka Bean Panna Cotta", desc: "Roasted figs, hazelnut praline", price: "15" },
  ],
  Drinks: [
    { name: "Douro Reserva 2018", desc: "Quinta do Crasto, full-bodied, dark fruit", price: "85" },
    { name: "Vintage Port Flight", desc: "Three pours, Taylor's, Graham's, Niepoort", price: "32" },
    { name: "Cutlery Martini", desc: "Sage-infused gin, dry vermouth, olive oil pearl", price: "18" },
    { name: "Espresso Negroni", desc: "Campari, sweet vermouth, cold brew", price: "16" },
  ],
};

function Index() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<keyof typeof MENU>("Starters");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#home" className="font-serif text-2xl tracking-widest text-foreground">
            <span className="text-[color:var(--gold)]">·</span> CUTLERY
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm tracking-[0.18em] uppercase text-foreground/80 hover:text-[color:var(--gold)] transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#reserve"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-xs tracking-[0.2em] uppercase bg-[color:var(--gold)] text-[color:var(--primary-foreground)] hover:bg-[color:var(--sage)] transition-colors"
          >
            Book a Table
          </a>
          <button
            aria-label="Open menu"
            className="md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/40 bg-[color:var(--emerald-darker)]/95 backdrop-blur-xl">
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.18em] uppercase text-foreground/80"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#reserve"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 text-xs tracking-[0.2em] uppercase bg-[color:var(--gold)] text-[color:var(--primary-foreground)]"
              >
                Book a Table
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--charcoal)] via-[color:var(--emerald-darker)] to-[color:var(--emerald-darker)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-[color:var(--gold)]" />
              <span className="text-xs tracking-[0.32em] uppercase text-[color:var(--sage)]">
                Welcome to Cutlery, Porto
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Culinary Artistry
              <br />
              <em className="not-italic text-[color:var(--gold)]">in Every Detail.</em>
            </h1>
            <p className="mt-8 max-w-lg text-base md:text-lg text-foreground/70 leading-relaxed">
              A refined sanctuary in the heart of Porto where seasonal ingredients,
              quiet craftsmanship and a curated cellar meet beneath candlelight.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#reserve"
                className="px-8 py-4 text-xs tracking-[0.24em] uppercase bg-[color:var(--gold)] text-[color:var(--primary-foreground)] hover:bg-[color:var(--sage)] transition-colors"
              >
                Reserve a Table
              </a>
              <a
                href="#menu"
                className="px-8 py-4 text-xs tracking-[0.24em] uppercase border border-foreground/30 text-foreground hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition-colors"
              >
                View Menu
              </a>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-8 max-w-md">
              {[
                ["12+", "Years Crafted"],
                ["1★", "Michelin Recognised"],
                ["100%", "Seasonal"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-serif text-3xl text-[color:var(--gold)]">{n}</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-foreground/60 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal relative">
            <div className="absolute -inset-4 border border-[color:var(--gold)]/30" />
            <img
              src={heroImg}
              alt="Cutlery restaurant interior in Porto"
              width={1280}
              height={1600}
              className="relative w-full h-[520px] md:h-[640px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="espaco" className="py-24 md:py-32 bg-[color:var(--charcoal)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal max-w-2xl mb-16">
            <span className="text-xs tracking-[0.32em] uppercase text-[color:var(--sage)]">Espaço</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">The Space &amp; The Experience</h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Designed as a moody, intimate haven — emerald velvet, brushed brass, and
              architectural shadow. Every corner of Cutlery is composed to slow the evening down.
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-5">
            {[
              { src: space1, alt: "Emerald velvet booth seating", cls: "md:col-span-7 h-[420px]", title: "The Dining Room" },
              { src: space2, alt: "Signature plated dish", cls: "md:col-span-5 h-[420px]", title: "Signature Plates" },
              { src: space3, alt: "Private dining room with marble table", cls: "md:col-span-5 h-[420px]", title: "Private Room" },
              { src: space4, alt: "Backlit emerald bar", cls: "md:col-span-7 h-[420px]", title: "The Bar" },
            ].map((c) => (
              <figure key={c.title} className={`reveal group relative overflow-hidden ${c.cls}`}>
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/85 via-transparent to-transparent" />
                <figcaption className="absolute left-6 bottom-6 right-6 flex items-end justify-between">
                  <span className="font-serif text-2xl text-foreground">{c.title}</span>
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--gold)]">Cutlery</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="reveal text-center mb-14">
            <span className="text-xs tracking-[0.32em] uppercase text-[color:var(--sage)]">À La Carte</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">The Menu</h2>
            <p className="mt-5 max-w-xl mx-auto text-foreground/70">
              Crafted in conversation with the seasons. Sourced from small Portuguese producers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-10 border-y border-border/60 py-5 mb-12">
            {(Object.keys(MENU) as Array<keyof typeof MENU>).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`text-xs tracking-[0.28em] uppercase px-2 py-1 transition-colors ${
                  tab === k
                    ? "text-[color:var(--gold)] border-b border-[color:var(--gold)]"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {k}
              </button>
            ))}
          </div>

          <div className="grid gap-0">
            {MENU[tab].map((item, i) => (
              <div
                key={item.name}
                className="reveal py-7 border-b border-border/40 flex items-start justify-between gap-8"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-foreground">{item.name}</h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed max-w-xl">{item.desc}</p>
                </div>
                <div className="font-serif text-xl text-[color:var(--gold)] whitespace-nowrap pt-1">
                  €{item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reserve" className="py-24 md:py-32 bg-[color:var(--charcoal)]">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="reveal text-center mb-14">
            <span className="text-xs tracking-[0.32em] uppercase text-[color:var(--sage)]">Reservations</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Reserve Your Table</h2>
            <p className="mt-5 text-foreground/70">
              We hold a limited number of tables each evening. Book in advance to secure your seat.
            </p>
          </div>

          <form
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              alert("Thank you. Your reservation request has been received.");
            }}
            className="reveal grid sm:grid-cols-2 gap-6"
          >
            <Field label="Full Name">
              <input required type="text" className="gold-border-input w-full px-4 py-3.5 text-foreground" />
            </Field>
            <Field label="Email or Phone">
              <input required type="text" className="gold-border-input w-full px-4 py-3.5 text-foreground" />
            </Field>
            <Field label="Date">
              <input required type="date" className="gold-border-input w-full px-4 py-3.5 text-foreground" />
            </Field>
            <Field label="Time">
              <select required className="gold-border-input w-full px-4 py-3.5 text-foreground">
                <option className="bg-[color:var(--charcoal)]">19:00</option>
                <option className="bg-[color:var(--charcoal)]">19:30</option>
                <option className="bg-[color:var(--charcoal)]">20:00</option>
                <option className="bg-[color:var(--charcoal)]">20:30</option>
                <option className="bg-[color:var(--charcoal)]">21:00</option>
                <option className="bg-[color:var(--charcoal)]">21:30</option>
              </select>
            </Field>
            <Field label="Guests" className="sm:col-span-2">
              <select required className="gold-border-input w-full px-4 py-3.5 text-foreground">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} className="bg-[color:var(--charcoal)]">
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Special Requests (optional)" className="sm:col-span-2">
              <textarea rows={3} className="gold-border-input w-full px-4 py-3.5 text-foreground resize-none" />
            </Field>
            <button
              type="submit"
              className="sm:col-span-2 mt-2 px-8 py-4 text-xs tracking-[0.28em] uppercase bg-[color:var(--gold)] text-[color:var(--primary-foreground)] hover:bg-[color:var(--sage)] transition-colors"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </section>

      <footer id="contact" className="bg-[color:var(--emerald-deep)] border-t border-border/40 pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="font-serif text-2xl tracking-widest">
              <span className="text-[color:var(--gold)]">·</span> CUTLERY
            </div>
            <p className="mt-5 text-sm text-foreground/60 leading-relaxed">
              Culinary artistry in every detail. A Porto institution since 2013.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 inline-flex items-center justify-center border border-[color:var(--gold)] text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--primary-foreground)] transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 inline-flex items-center justify-center border border-foreground/30 text-foreground/70 hover:border-foreground hover:text-foreground transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.28em] uppercase text-[color:var(--sage)] mb-5">Hours</h4>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li className="flex items-start gap-3"><Clock size={14} className="mt-1 text-[color:var(--gold)]" /> Tue – Thu · 19:00 – 23:00</li>
              <li className="flex items-start gap-3"><Clock size={14} className="mt-1 text-[color:var(--gold)]" /> Fri – Sat · 19:00 – 00:00</li>
              <li className="flex items-start gap-3"><Clock size={14} className="mt-1 text-[color:var(--gold)]" /> Sun – Mon · Closed</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.28em] uppercase text-[color:var(--sage)] mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li className="flex items-start gap-3"><MapPin size={14} className="mt-1 text-[color:var(--gold)]" /> Rua das Flores 124<br />4050-263 Porto, Portugal</li>
              <li className="flex items-start gap-3"><Phone size={14} className="mt-1 text-[color:var(--gold)]" /> +351 220 000 000</li>
              <li className="flex items-start gap-3"><Mail size={14} className="mt-1 text-[color:var(--gold)]" /> reserve@cutlery.pt</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.28em] uppercase text-[color:var(--sage)] mb-5">Find Us</h4>
            <div className="relative w-full h-44 overflow-hidden border border-border/60">
              <iframe
                title="Cutlery location in Porto"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-8.617%2C41.144%2C-8.605%2C41.150&layer=mapnik&marker=41.147%2C-8.611"
                className="w-full h-full grayscale opacity-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 text-xs tracking-[0.18em] uppercase text-foreground/50">
          <span>© {new Date().getFullYear()} Cutlery, Porto</span>
          <span>Crafted with intention</span>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[10px] tracking-[0.28em] uppercase text-foreground/60 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
