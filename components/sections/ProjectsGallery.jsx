import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Section from "../ui/Section";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import Reveal from "../ui/Reveal";
import { CUSTOM_PROJECTS, cldUrl } from "../../lib/media";
import styles from "./ProjectsGallery.module.scss";

export default function ProjectsGallery({
  heading = "Obras realizadas",
  description = "Estruturas metálicas sob medida que fabricamos para clientes industriais — da bancada à pintura final.",
  items = CUSTOM_PROJECTS,
}) {
  const [index, setIndex] = useState(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () =>
      setIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (index === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, next, prev]);

  const active = index !== null ? items[index] : null;

  return (
    <Section tone="light" id="projetos">
      <Container>
        <div className={styles.header}>
          <Badge tone="accent">Projetos sob medida</Badge>
          <h2 className={styles.title}>{heading}</h2>
          {description ? <p className={styles.description}>{description}</p> : null}
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <Reveal key={item.photo.publicId} index={i % 4} className={styles.cell}>
              <button
                type="button"
                className={styles.card}
                onClick={() => setIndex(i)}
                aria-label={`Ampliar projeto: ${item.title}`}
              >
                <div className={styles.thumb}>
                  <Image
                    src={cldUrl(item.photo, { width: 720, height: 720, crop: "fill", gravity: "auto" })}
                    alt={item.photo.alt}
                    width={720}
                    height={720}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                    className={styles.thumbImg}
                  />
                  <span className={styles.thumbZoom} aria-hidden>
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.tag}>{item.tag}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {active ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
        >
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navClose}`}
            onClick={close}
            aria-label="Fechar"
          >
            <X size={22} aria-hidden />
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={26} aria-hidden />
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Próxima imagem"
          >
            <ChevronRight size={26} aria-hidden />
          </button>

          <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
            <Image
              src={cldUrl(active.photo, { width: 1600 })}
              alt={active.photo.alt}
              width={1600}
              height={1600}
              sizes="(max-width: 900px) 100vw, 1100px"
              className={styles.figureImg}
            />
            <figcaption>
              <strong>{active.title}</strong>
              <span>{active.desc}</span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </Section>
  );
}
