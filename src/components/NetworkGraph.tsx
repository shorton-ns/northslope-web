"use client";

import { useEffect, useRef } from "react";

const NODE_COUNT = 30;
const EDGE_DISTANCE = 175;

interface Node {
  x: number;
  y: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface Edge {
  from: number;
  to: number;
}

interface Packet {
  edgeIndex: number;
  progress: number;
  speed: number;
  direction: 1 | -1;
}

export default function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let animId: number;
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let packets: Packet[] = [];

    function init(w: number, h: number) {
      // Distribute nodes with some grid bias so coverage is even
      nodes = Array.from({ length: NODE_COUNT }, (_, i) => {
        const cols = Math.ceil(Math.sqrt(NODE_COUNT));
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cellW = w / cols;
        const cellH = h / Math.ceil(NODE_COUNT / cols);
        return {
          x: col * cellW + cellW * 0.2 + Math.random() * cellW * 0.6,
          y: row * cellH + cellH * 0.2 + Math.random() * cellH * 0.6,
          radius: 2 + Math.random() * 2,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.4 + Math.random() * 0.8,
        };
      });

      edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < EDGE_DISTANCE) {
            edges.push({ from: i, to: j });
          }
        }
      }

      packets = edges
        .filter(() => Math.random() < 0.28)
        .map((_, i) => ({
          edgeIndex: i,
          progress: Math.random(),
          speed: 0.06 + Math.random() * 0.1,
          direction: (Math.random() > 0.5 ? 1 : -1) as 1 | -1,
        }));
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init(w, h);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let last = performance.now();

    function draw(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Edges
      for (const edge of edges) {
        const a = nodes[edge.from];
        const b = nodes[edge.to];
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = "rgba(42, 110, 75, 0.18)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Packets (traveling light dots)
      for (const packet of packets) {
        packet.progress += packet.speed * dt * packet.direction;
        if (packet.progress > 1) packet.progress = 0;
        if (packet.progress < 0) packet.progress = 1;

        const edge = edges[packet.edgeIndex];
        if (!edge) continue;
        const a = nodes[edge.from];
        const b = nodes[edge.to];
        const px = a.x + (b.x - a.x) * packet.progress;
        const py = a.y + (b.y - a.y) * packet.progress;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, 7);
        grad.addColorStop(0, "rgba(62, 189, 120, 0.95)");
        grad.addColorStop(0.4, "rgba(62, 189, 120, 0.3)");
        grad.addColorStop(1, "rgba(62, 189, 120, 0)");
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Nodes
      const t = now / 1000;
      for (const node of nodes) {
        const pulse = 0.65 + 0.35 * Math.sin(t * node.pulseSpeed + node.pulsePhase);

        // Outer glow
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 5
        );
        glow.addColorStop(0, `rgba(62, 189, 120, ${0.12 * pulse})`);
        glow.addColorStop(1, "rgba(62, 189, 120, 0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(62, 189, 120, ${0.65 + 0.35 * pulse})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
