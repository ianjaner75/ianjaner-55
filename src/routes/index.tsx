import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ArrowRight,
  Code2,
  Database,
  Cloud,
  Shield,
  Layers,
  Wrench,
  Award,
  Mic,
  GraduationCap,
  ExternalLink,
  Sparkles,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import cvAsset from "@/assets/cv.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ianjaner Beltran — Backend Developer Java & Spring Boot" },
      {
        name: "description",
        content:
          "Desarrollador Backend Junior especializado en Java 21, Spring Boot, microservicios y cloud. Ponente internacional CICOM 2025.",
      },
      { property: "og:title", content: "Ianjaner Beltran — Backend Developer" },
      {
        property: "og:description",
        content: "Java · Spring Boot · Microservicios · Cloud. Portafolio profesional.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Skills" },
  { href: "#certs", label: "Logros" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

const EXPERIENCE = [
  {
    role: "Desarrollador Backend Junior",
    company: "Innova Systems",
    date: "Mar 2024 – Oct 2025",
    bullets: [
      "Diseño y desarrollo de APIs RESTful escalables con Java 21 y Spring Boot.",
      "Optimización de persistencia con Spring Data JPA sobre PostgreSQL y SQL Server.",
      "Microservicios contenerizados con Docker para despliegues portables y eficientes.",
      "Seguridad de APIs con Spring Security y JWT (autenticación y autorización).",
      "Trabajo ágil SCRUM con Git/GitHub para control de versiones y code review.",
    ],
  },
  {
    role: "Desarrollador Backend Junior — Programa ONE",
    company: "Oracle Next Education (Alura LATAM + Oracle)",
    date: "2024 – 2025",
    bullets: [
      "API REST tipo Fintech con Java y Spring Boot (Spring Security + JWT).",
      "Modelado y gestión de base de datos PostgreSQL con JPA/Hibernate.",
      "Contenerización con Docker y despliegue en GCP y Oracle Cloud Infrastructure.",
      "Entregas iterativas en equipo ágil bajo metodología SCRUM.",
    ],
  },
  {
    role: "Desarrollador Web — Proyecto Autónomo",
    company: "Proyecto Personal",
    date: "Abr 2024 – Nov 2025",
    bullets: [
      "Aplicaciones web con PHP y Laravel siguiendo arquitectura MVC.",
      "CRUD, autenticación y conexión a bases de datos con Eloquent ORM.",
    ],
  },
  {
    role: "Analista de Visualización de Datos — Proyecto Académico",
    company: "Universidad Distrital Francisco José de Caldas",
    date: "Oct 2025 – Dic 2025",
    bullets: [
      "Dashboards interactivos y reportes académicos en Power BI.",
      "Métricas con DAX para análisis e interpretación de datos educativos.",
    ],
  },
  {
    role: "Auxiliar de Atención al Cliente y Ventas",
    company: "Sector Retail",
    date: "2024 – 2025",
    bullets: [
      "Gestión de ventas, atención al cliente y manejo de caja.",
      "Habilidades de comunicación, negociación y trabajo bajo presión.",
    ],
  },
];

const SKILLS: { title: string; icon: React.ComponentType<{ className?: string }>; items: string[] }[] = [
  { title: "Lenguajes", icon: Code2, items: ["Java 21", "Kotlin", "PHP", "JavaScript"] },
  { title: "Frameworks Backend", icon: Server, items: ["Spring Boot", "Spring Data JPA", "Spring Security", "NestJS", "Laravel"] },
  { title: "Bases de Datos", icon: Database, items: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "Firestore"] },
  { title: "Cloud & DevOps", icon: Cloud, items: ["Docker", "Google Cloud Platform", "Oracle Cloud Infrastructure"] },
  { title: "Seguridad", icon: Shield, items: ["JWT", "Spring Security", "Auth & Authz"] },
  { title: "Arquitectura", icon: Layers, items: ["APIs RESTful", "Microservicios", "MVC", "JPA/Hibernate", "Eloquent ORM"] },
  { title: "Herramientas & Métodos", icon: Wrench, items: ["Git", "GitHub", "SCRUM", "Power BI", "DAX"] },
];

const ACHIEVEMENTS = [
  {
    icon: Award,
    title: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    year: "2024",
    desc: "Certificación oficial de fundamentos de OCI: cómputo, redes, almacenamiento y seguridad en la nube.",
  },
  {
    icon: GraduationCap,
    title: "Programa Oracle Next Education (ONE)",
    issuer: "Alura LATAM + Oracle",
    year: "2024 – 2025",
    desc: "Formación intensiva en desarrollo backend con Java, Spring Boot y buenas prácticas profesionales.",
  },
  {
    icon: Mic,
    title: "Ponente Internacional — CICOM 2025",
    issuer: "15° Congreso Internacional de Computación",
    year: "Oct 2025",
    desc: 'Presentación del artículo técnico "Desarrollo de una Aplicación Móvil de Control Parental".',
  },
];

const PROJECTS = [
  {
    title: "Fintech API REST",
    desc: "API tipo Fintech con autenticación JWT, gestión de usuarios y transacciones. Desarrollada durante el programa ONE.",
    tags: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Docker"],
    link: "https://github.com/ianjaner75",
  },
  {
    title: "Microservicios E-commerce",
    desc: "Arquitectura de microservicios contenerizados con Docker. APIs RESTful escalables con persistencia optimizada.",
    tags: ["Java 21", "Spring Boot", "Microservicios", "Docker", "SQL Server"],
    link: "https://github.com/ianjaner75",
  },
  {
    title: "App Móvil de Control Parental",
    desc: "Proyecto presentado en CICOM 2025. Solución móvil para monitorear y proteger la actividad digital de menores.",
    tags: ["Investigación", "Mobile", "Backend API"],
    link: "https://github.com/ianjaner75",
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster theme="dark" />
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--gradient-accent)] text-primary-foreground">
              IB
            </span>
            <span className="hidden sm:inline">ianjaner.dev</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a href={cvAsset.url} download className="hidden md:inline-flex">
            <Button size="sm" variant="outline" className="border-primary/40 hover:border-primary">
              <Download className="mr-1.5 h-4 w-4" /> CV
            </Button>
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
            </div>
          </button>
        </div>
        {open && (
          <div className="border-t border-border/40 bg-background/95 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a href={cvAsset.url} download className="mt-2">
                <Button size="sm" className="w-full">
                  <Download className="mr-1.5 h-4 w-4" /> Descargar CV
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="absolute left-1/2 top-1/3 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur animate-fade-up">
            <Sparkles className="h-3.5 w-3.5" />
            Disponible para nuevas oportunidades
          </div>
          <h1 className="animate-fade-up text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Ianjaner <span className="text-gradient">Beltran</span>
          </h1>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.3em] text-accent md:text-base">
            Backend Developer · Java &amp; Spring Boot
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Diseño APIs y microservicios escalables que impulsan productos digitales.
            Combino ingeniería sólida con comunicación clara — ponente internacional en CICOM 2025.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects">
              <Button size="lg" className="bg-[var(--gradient-accent)] text-primary-foreground hover:opacity-90 animate-pulse-glow">
                Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href={cvAsset.url} download>
              <Button size="lg" variant="outline" className="border-primary/40 hover:border-primary hover:bg-primary/10">
                <Download className="mr-2 h-4 w-4" /> Descargar CV
              </Button>
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-5 text-muted-foreground">
            <a href="https://github.com/ianjaner75" target="_blank" rel="noreferrer" className="transition hover:text-accent">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/ianjanerbeltran" target="_blank" rel="noreferrer" className="transition hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:ianjaner55@gmail.com" className="transition hover:text-accent">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="01 — Sobre mí" title="Backend con propósito y voz">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="reveal md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Soy <span className="text-foreground font-semibold">Desarrollador Backend Junior</span> con
              experiencia en <span className="text-primary">Java 21</span> y{" "}
              <span className="text-primary">Spring Boot</span> para el diseño y desarrollo de APIs RESTful
              escalables. Me especializo en arquitectura de microservicios, contenedores Docker, bases de datos
              relacionales (PostgreSQL, SQL Server) y seguridad con Spring Security y JWT.
            </p>
            <p>
              Soy <span className="text-accent font-semibold">ponente internacional</span> — presenté el
              artículo técnico "Desarrollo de una Aplicación Móvil de Control Parental" en el{" "}
              <span className="text-foreground">15° Congreso Internacional de Computación (CICOM 2025)</span>.
              Esto refleja algo que me define: combinar dominio técnico con la capacidad de comunicar ideas
              complejas con claridad.
            </p>
            <p>
              Certificado como <span className="text-foreground">Oracle Cloud Infrastructure Associate</span>{" "}
              y graduado del programa <span className="text-foreground">Oracle Next Education (ONE)</span> con
              Alura LATAM. Trabajo en equipos ágiles SCRUM y disfruto construir software que escala.
            </p>
          </div>
          <div className="reveal md:col-span-2">
            <Card className="border-border/60 bg-card p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-sm">
                <Fact k="Ubicación" v="Bogotá, Colombia" />
                <Fact k="Stack principal" v="Java · Spring · PostgreSQL" />
                <Fact k="Cloud" v="OCI · GCP · Docker" />
                <Fact k="Educación" v="Tecnólogo en Sistematización de Datos" />
                <Fact k="Próximo" v="Ing. Telemática 2026–2027" />
                <Fact k="Idiomas" v="Español (nativo)" />
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="02 — Experiencia" title="Trayectoria profesional">
        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
          <div className="space-y-10">
            {EXPERIENCE.map((e, i) => (
              <div
                key={e.role + e.date}
                className={`reveal relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`relative pl-10 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                  <span className="absolute left-0 top-2 grid h-6 w-6 place-items-center rounded-full bg-[var(--gradient-accent)] shadow-[0_0_20px_oklch(0.72_0.19_240/0.5)] md:left-1/2 md:-translate-x-1/2">
                    <span className="h-2 w-2 rounded-full bg-background" />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">{e.date}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{e.role}</h3>
                  <p className="text-sm text-primary">{e.company}</p>
                </div>
                <div className="mt-4 pl-10 md:mt-0 md:pl-12">
                  <Card className="border-border/60 bg-card p-5">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="03 — Stack" title="Habilidades técnicas">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <Card
              key={s.title}
              className="reveal group border-border/60 bg-card p-6 transition hover:border-primary/60 hover:shadow-[0_0_30px_oklch(0.72_0.19_240/0.15)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-[var(--gradient-accent)] group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <Badge
                    key={it}
                    variant="outline"
                    className="border-border bg-muted/40 font-mono text-xs text-muted-foreground"
                  >
                    {it}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="certs" eyebrow="04 — Logros" title="Certificaciones &amp; reconocimientos">
        <div className="grid gap-5 md:grid-cols-3">
          {ACHIEVEMENTS.map((a) => (
            <Card
              key={a.title}
              className="reveal relative overflow-hidden border-border/60 bg-card p-6"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--gradient-accent)] opacity-10 blur-2xl" />
              <span className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-accent)] text-primary-foreground">
                <a.icon className="h-6 w-6" />
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">{a.year}</p>
              <h3 className="mt-1 text-base font-semibold leading-snug">{a.title}</h3>
              <p className="mt-1 text-sm text-primary">{a.issuer}</p>
              <p className="mt-3 text-sm text-muted-foreground">{a.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="05 — Proyectos" title="Proyectos destacados">
        <div className="grid gap-5 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <Card
              key={p.title}
              className="reveal group flex flex-col border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:border-accent/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 font-mono text-accent">
                  {"</>"}
                </span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition hover:text-accent"
                  aria-label={`Repositorio ${p.title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-border bg-muted/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition hover:text-accent"
              >
                Ver en GitHub <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Algunos enlaces de proyecto son placeholders editables — actualízalos con los repositorios específicos.
        </p>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="06 — Contacto" title="Conversemos">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="reveal space-y-6">
            <p className="text-muted-foreground">
              ¿Tienes un proyecto, una oportunidad o una idea backend que necesita arquitectura sólida?
              Escríbeme y respondo en menos de 24 horas.
            </p>
            <div className="space-y-3">
              <ContactRow icon={Mail} label="ianjaner55@gmail.com" href="mailto:ianjaner55@gmail.com" />
              <ContactRow icon={Phone} label="+57 313 262 6226" href="tel:+573132626226" />
              <ContactRow
                icon={Linkedin}
                label="linkedin.com/in/ianjanerbeltran"
                href="https://linkedin.com/in/ianjanerbeltran"
              />
              <ContactRow icon={Github} label="github.com/ianjaner75" href="https://github.com/ianjaner75" />
            </div>
          </div>
          <Card className="reveal border-border/60 bg-card p-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Mensaje listo para enviar", {
                  description: "Conecta este formulario a tu backend o servicio de email.",
                });
                (e.target as HTMLFormElement).reset();
              }}
              className="space-y-4"
            >
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" required placeholder="Tu nombre" className="mt-1.5 bg-muted/40" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="tu@email.com" className="mt-1.5 bg-muted/40" />
              </div>
              <div>
                <Label htmlFor="msg">Mensaje</Label>
                <Textarea id="msg" required rows={5} placeholder="Cuéntame sobre tu proyecto…" className="mt-1.5 bg-muted/40" />
              </div>
              <Button type="submit" className="w-full bg-[var(--gradient-accent)] text-primary-foreground hover:opacity-90">
                Enviar mensaje <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Ianjaner Beltran. Construido con Java en el corazón.</p>
          <p className="font-mono">backend.developer / bogotá, co</p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28">
      <div className="reveal mb-12 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      {children}
    </section>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex items-start justify-between gap-3 border-b border-border/40 pb-2 last:border-0">
      <span className="text-muted-foreground">{k}</span>
      <span className="text-right font-medium text-foreground">{v}</span>
    </li>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-lg border border-border/60 bg-card p-3 transition hover:border-primary/60 hover:bg-card/80"
    >
      <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary transition group-hover:bg-[var(--gradient-accent)] group-hover:text-primary-foreground">
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-sm">{label}</span>
    </a>
  );
}
