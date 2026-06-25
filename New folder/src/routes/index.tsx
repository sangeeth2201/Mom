import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import ownerAsset from "@/assets/sangeetha.png.asset.json";

const WHATSAPP_NUMBER = "919047855935";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Sangeetha, I'd like to enquire about your tailoring services.",
)}`;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sangeetha Home Tailor — Stitching Elegance, Designing Perfection" },
      {
        name: "description",
        content:
          "Sangeetha Home Tailor in Katpadi, Vellore. 12+ years of expert ladies tailoring and Aari work — blouses, salwar, churidars, lehengas, bridal outfits.",
      },
      { property: "og:title", content: "Sangeetha Home Tailor — Vellore" },
      {
        property: "og:description",
        content:
          "Expert ladies tailoring & Aari work in Katpadi, Vellore. 12+ years of craftsmanship by Sangeetha.",
      },
      { property: "og:image", content: ownerAsset.url },
    ],
  }),
  component: Home,
});

const services = [
  {
    title: "Blouse Stitching",
    desc: "Perfectly fitted blouses with intricate neck patterns, princess cuts and designer sleeves.",
  },
  {
    title: "Salwar & Churidar",
    desc: "Custom salwar suits and churidars tailored to your measurements and comfort.",
  },
  {
    title: "Lehengas",
    desc: "Festive and party-wear lehengas with refined finishing and detailed handwork.",
  },
  {
    title: "Bridal Outfits",
    desc: "Bridal blouses and ensembles crafted with care for your most special day.",
  },
  {
    title: "Aari Work Designs",
    desc: "Signature handcrafted Aari embroidery — beads, stones and threadwork on bridal & party wear.",
  },
  {
    title: "Alterations & Fitting",
    desc: "Expert alterations to give your existing garments a perfect new fit.",
  },
];

const highlights = [
  { k: "12+", v: "Years of Experience" },
  { k: "500+", v: "Happy Customers" },
  { k: "5.0★", v: "Google Rating" },
  { k: "24/7", v: "Available" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container-tight flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Sangeetha Home Tailor" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <p className="font-serif text-lg font-semibold tracking-wide">Sangeetha</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Home Tailor</p>
            </div>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#aari" className="hover:text-gold transition-colors">Aari Work</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle size={14} strokeWidth={2.5} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>


      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gold-soft/40 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold-soft/30 blur-3xl" />
        </div>
        <div className="container-tight grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="divider-gold mb-6">Vellore · Est. with love</span>
            <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
              Stitching <em className="text-gold not-italic">Elegance</em>,
              <br /> Designing <em className="text-gold not-italic">Perfection</em>.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Bespoke ladies tailoring and intricate Aari work — handcrafted in
              Katpadi, Vellore by Sangeetha, with more than a decade of devotion to the needle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-full bg-foreground px-7 py-3 text-sm uppercase tracking-[0.2em] text-background transition-transform hover:-translate-y-0.5"
              >
                Explore Services
              </a>
              <a
                href="https://share.google/nklzjWtkG6CnTZ8J6"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-foreground/30 px-7 py-3 text-sm uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
              >
                View on Google
              </a>
            </div>
            <div className="mt-12 grid grid-cols-4 gap-4 border-t border-border pt-6">
              {highlights.map((h) => (
                <div key={h.v}>
                  <p className="font-serif text-2xl md:text-3xl">{h.k}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{h.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-full bg-gold/20 blur-2xl" />
            <div className="relative rounded-full border border-gold/40 p-3 shadow-[var(--shadow-gold)]">
              <img
                src={logoAsset.url}
                alt="Sangeetha Home Tailor logo"
                className="aspect-square w-full rounded-full object-contain bg-cream"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-border bg-cream/60 py-24">
        <div className="container-tight grid items-center gap-14 md:grid-cols-[5fr_6fr]">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 translate-x-4 translate-y-4 rounded-sm bg-gold/30" />
            <img
              src={ownerAsset.url}
              alt="Sangeetha — Founder & Master Tailor"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
          <div>
            <span className="divider-gold mb-5">Meet the Founder</span>
            <h2 className="font-serif text-4xl md:text-5xl">Sangeetha</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-gold">
              Master Tailor · Aari Work Designer
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                For more than <span className="text-foreground font-medium">12 years</span>, Sangeetha has
                turned fabric into feeling — running her home tailoring studio in
                Katpadi with the quiet patience that only true craftspeople know.
              </p>
              <p>
                What began as stitching for family and neighbours has grown into a
                trusted little atelier where women come for blouses that fit just
                right, salwars that drape beautifully, and bridal outfits that hold
                a lifetime of memories.
              </p>
              <p>
                She is also an expert <span className="text-foreground font-medium">Aari work designer</span>,
                hand-embroidering beads, stones and threads into the patterns that
                make a garment truly yours.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-gold pl-5 font-serif text-xl italic text-foreground/80">
              “Every stitch is a promise — to fit you, to flatter you, to last.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="container-tight">
          <div className="text-center">
            <span className="divider-gold mb-5">What We Craft</span>
            <h2 className="font-serif text-4xl md:text-5xl">Services & Specialities</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              A complete women's tailoring studio — from everyday wear to
              once-in-a-lifetime bridal pieces.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-sm border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-[var(--shadow-soft)]"
              >
                <span className="font-serif text-5xl text-gold/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-6 h-px w-10 bg-gold transition-all group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AARI */}
      <section id="aari" className="relative overflow-hidden bg-foreground py-24 text-background">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        </div>
        <div className="container-tight grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="divider-gold mb-5" style={{ color: "var(--gold-soft)" }}>
              Signature Craft
            </span>
            <h2 className="font-serif text-4xl md:text-5xl">The Art of Aari Work</h2>
            <p className="mt-5 text-background/80">
              Aari is the centuries-old Indian embroidery technique done with a
              fine hooked needle. At Sangeetha Home Tailor, every motif —
              flowers, peacocks, paisleys — is drawn and stitched by hand using
              shimmering beads, sequins, zardosi and silk thread.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Bridal blouse Aari work — full coverage & maggam designs",
                "Designer party-wear blouses with stone & bead work",
                "Custom motifs drawn to match your saree",
                "Restoration & re-embroidery on existing garments",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 inline-block h-px w-6 bg-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { c: "from-amber-200 to-amber-500", t: "Bridal" },
              { c: "from-rose-200 to-rose-500", t: "Party Wear" },
              { c: "from-emerald-200 to-emerald-600", t: "Festive" },
              { c: "from-violet-200 to-violet-600", t: "Custom" },
            ].map((card, i) => (
              <div
                key={card.t}
                className={`relative aspect-[3/4] overflow-hidden rounded-sm bg-gradient-to-br ${card.c} ${i % 2 === 1 ? "translate-y-6" : ""}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_60%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-serif text-xl text-foreground/90">{card.t}</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/70">Aari Collection</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="container-tight">
          <div className="text-center">
            <span className="divider-gold mb-5">Visit the Studio</span>
            <h2 className="font-serif text-4xl md:text-5xl">Come Say Hello</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Walk in for a fitting, a consultation, or to discuss your next
              Aari work design.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-sm border border-[#25D366]/40 bg-gradient-to-r from-[#25D366]/10 to-transparent p-7 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#128C7E]">Chat with us</p>
              <p className="mt-2 font-serif text-2xl">Quick enquiries on WhatsApp</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Share measurements, designs or questions — we reply quickly. +91 90478 55935
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white shadow-sm transition-transform hover:-translate-y-0.5 md:mt-0"
            >
              <MessageCircle size={16} strokeWidth={2.5} />
              Chat on WhatsApp
            </a>
          </div>



          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-sm border border-border bg-card p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Address</p>
              <p className="mt-3 font-serif text-xl leading-snug">
                Keel Vadugankuttai, No. 5
                <br /> Pilliyar Kovil Street
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Katpadi, Vellore<br />
                Tamil Nadu 632202, India
              </p>
            </div>
            <div className="rounded-sm border border-border bg-card p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Hours</p>
              <p className="mt-3 font-serif text-xl">Open 24 Hours</p>
              <p className="mt-2 text-sm text-muted-foreground">
                All days of the week.<br />Walk-ins welcome — a call ahead is appreciated.
              </p>
            </div>
            <div className="rounded-sm border border-border bg-card p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Find Us</p>
              <p className="mt-3 font-serif text-xl">Google Business</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Rated 5.0 on Google. See photos, directions and reviews.
              </p>
              <a
                href="https://share.google/nklzjWtkG6CnTZ8J6"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm uppercase tracking-[0.2em] text-gold underline-offset-4 hover:underline"
              >
                Open in Google →
              </a>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-sm border border-border">
            <iframe
              title="Sangeetha Home Tailor location"
              src="https://www.google.com/maps?q=keel+vadugankuttai,+pilliyar+kovil+street,+katpadi,+Vellore,+Tamil+Nadu+632202&output=embed"
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-cream/60 py-12">
        <div className="container-tight flex flex-col items-center gap-4 text-center">
          <img src={logoAsset.url} alt="" className="h-14 w-14 object-contain" />
          <p className="font-serif text-xl">Sangeetha Home Tailor</p>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Stitching Elegance · Designing Perfection
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sangeetha Home Tailor, Katpadi, Vellore. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle size={26} strokeWidth={2.2} />
      </a>
    </div>

  );
}
