"use client";

import { useEffect, useRef } from "react";

export function EncontroFrame() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    let resizeObserver: ResizeObserver | undefined;

    const resizeFrame = () => {
      const document = frame.contentDocument;
      if (!document) {
        return;
      }

      frame.style.height = `${Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      )}px`;
    };

    const handleLoad = () => {
      const document = frame.contentDocument;
      if (!document) {
        return;
      }

      resizeFrame();
      resizeObserver = new ResizeObserver(resizeFrame);
      resizeObserver.observe(document.documentElement);
    };

    frame.addEventListener("load", handleLoad);

    return () => {
      frame.removeEventListener("load", handleLoad);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <iframe
      ref={frameRef}
      title="Encontro de Mulheres e Carreira em Tecnologia 2026"
      src="/encontro.html"
      style={{
        border: 0,
        display: "block",
        minHeight: "100dvh",
        width: "100%",
      }}
    />
  );
}
