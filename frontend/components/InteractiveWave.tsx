"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

const POINTS = 120;

export function InteractiveWave() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight || window.innerHeight;

    const svg = d3
      .select(container)
      .append("svg")
      .attr("role", "presentation")
      .attr("aria-hidden", "true")
      .attr("preserveAspectRatio", "none")
      .style("position", "absolute")
      .style("inset", "0")
      .style("pointer-events", "none")
      .style("mix-blend-mode", "screen");

    const defs = svg.append("defs");

    const gradient = defs
      .append("linearGradient")
      .attr("id", "wave-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#6366f1")
      .attr("stop-opacity", 0.4);
    gradient
      .append("stop")
      .attr("offset", "50%")
      .attr("stop-color", "#4f46e5")
      .attr("stop-opacity", 0.6);
    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#22d3ee")
      .attr("stop-opacity", 0.55);

    const blurFilter = defs
      .append("filter")
      .attr("id", "wave-blur")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    blurFilter.append("feGaussianBlur").attr("stdDeviation", "45");

    const base = svg
      .append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "#020617")
      .style("opacity", 0.85);

    const glow = svg
      .append("path")
      .attr("fill", "url(#wave-gradient)")
      .attr("filter", "url(#wave-blur)")
      .attr("opacity", 0.65);

    const stroke = svg
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "url(#wave-gradient)")
      .attr("stroke-width", 2.5)
      .attr("opacity", 0.8);

    const line = d3
      .line<[number, number]>()
      .curve(d3.curveBasis)
      .x((d) => d[0])
      .y((d) => d[1]);

    let pointer = { x: 0.5, y: 0.45 };
    let current = { ...pointer };

    const updateWave = () => {
      const amplitude = height * (0.06 + 0.12 * (1 - current.y));
      const frequency = 1.4 + (current.x - 0.5) * 0.8;
      const offset = height * (0.32 + current.y * 0.25);

      const points = d3.range(POINTS).map<[number, number]>((i) => {
        const t = i / (POINTS - 1);
        const x = t * width;
        const wave =
          Math.sin(t * Math.PI * frequency) * amplitude +
          Math.sin(t * 12 + current.x * 6) * amplitude * 0.2;
        return [x, offset + wave];
      });

      const path = line(points) ?? "";
      const areaPath =
        (line.y((d) => d[1] + amplitude * 1.8)(points) ?? "") +
        " L " +
        width +
        " " +
        height +
        " L 0 " +
        height +
        " Z";

      glow.attr("d", areaPath);
      stroke.attr("d", path);
    };

    const animate = () => {
      current.x += (pointer.x - current.x) * 0.08;
      current.y += (pointer.y - current.y) * 0.08;
      updateWave();
      animationFrame = requestAnimationFrame(animate);
    };

    let animationFrame = requestAnimationFrame(animate);

    const handlePointer = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer = {
        x: (event.clientX - rect.left) / rect.width,
        y: Math.max(0.05, Math.min(0.95, (event.clientY - rect.top) / rect.height))
      };
    };

    const resetPointer = () => {
      pointer = { x: 0.5, y: 0.45 };
    };

    window.addEventListener("pointermove", handlePointer);
    window.addEventListener("pointerleave", resetPointer);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target !== container) continue;
        width = entry.contentRect.width || width;
        height = entry.contentRect.height || height;
        svg.attr("viewBox", `0 0 ${width} ${height}`);
        updateWave();
      }
    });

    resizeObserver.observe(container);
    svg.attr("viewBox", `0 0 ${width} ${height}`);
    updateWave();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerleave", resetPointer);
      resizeObserver.disconnect();
      svg.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
  );
}
