"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Language } from "../portfolio-data";
import type { ResearchFigure } from "../research-data";

export default function ResearchGallery({ figures, language }: { figures: ResearchFigure[]; language: Language }) {
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const figure = figures[selected];
  const vi = language === "vi";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (zoomed) dialog.showModal();
    else dialog.close();
    if (!zoomed) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [zoomed]);

  return (
    <div className="research-gallery">
      <figure>
        <button type="button" className="gallery-stage" onClick={() => setZoomed(true)} aria-label={`${vi ? "Phóng to" : "Enlarge"}: ${figure.title[language]}`}>
          <Image src={figure.src} alt={figure.title[language]} width={1800} height={1100} sizes="(max-width: 680px) 92vw, 85vw" />
          <span className="gallery-enlarge">{vi ? "Phóng to hình" : "Enlarge figure"} <span aria-hidden="true">↗</span></span>
        </button>
        <figcaption aria-live="polite"><strong>{figure.title[language]}</strong><span>{figure.caption[language]}</span></figcaption>
      </figure>
      <div className="gallery-thumbnails" role="group" aria-label={vi ? "Chọn hình nghiên cứu" : "Select a research figure"}>
        {figures.map((item, index) => (
          <button type="button" key={item.src} onClick={() => setSelected(index)} aria-pressed={selected === index}>
            <Image src={item.src} alt="" width={140} height={90} sizes="140px" />
            <span>{item.title[language]}</span>
          </button>
        ))}
      </div>
      <dialog ref={dialogRef} className="figure-dialog" onCancel={() => setZoomed(false)} onClose={() => setZoomed(false)} onClick={(event) => { if (event.target === event.currentTarget) setZoomed(false); }} aria-label={figure.title[language]}>
        <div className="figure-dialog-bar">
          <p>{figure.title[language]}</p>
          <button type="button" autoFocus onClick={() => setZoomed(false)}>{vi ? "Đóng" : "Close"} <span aria-hidden="true">×</span></button>
        </div>
        <div className="figure-dialog-image">
          {/* Native image retains the full source resolution for inspecting paper figures. */}
          <img src={figure.src} alt={figure.caption[language]} />
        </div>
        <div className="figure-dialog-bar">
          <button type="button" onClick={() => setSelected((selected + figures.length - 1) % figures.length)}>← {vi ? "Hình trước" : "Previous"}</button>
          <span>{selected + 1} / {figures.length}</span>
          <button type="button" onClick={() => setSelected((selected + 1) % figures.length)}>{vi ? "Hình tiếp" : "Next"} →</button>
        </div>
      </dialog>
    </div>
  );
}
