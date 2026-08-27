"use client";

import { useState, useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface GraphNode {
  id: string;
  label: string;
  explain: string;
}

const nodes: GraphNode[] = [
  {
    id: "structured-data",
    label: "Structured Data",
    explain: "Organization, Service and Review schema — the machine-readable proof behind your claims.",
  },
  {
    id: "citations",
    label: "Citations",
    explain: "Third-party mentions AI models weigh above your own website's claims about itself.",
  },
  {
    id: "reviews",
    label: "Reviews",
    explain: "Consistent review signal across Google, Maps and category platforms.",
  },
  {
    id: "gbp",
    label: "Google Business Profile",
    explain: "The single most-queried local trust signal AI grounding relies on.",
  },
  {
    id: "sameas",
    label: "sameAs Links",
    explain: "Explicit links that resolve every mention of you across the web to one entity.",
  },
  {
    id: "authority-content",
    label: "Authority Content",
    explain: "Content written to be extracted and quoted by AI answer engines, not just ranked.",
  },
];

const VIEW = 600;
const CENTER = VIEW / 2;
const RADIUS = 220;
const NODE_R = 46;
const SATELLITE_R = 30;

function satellitePosition(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  };
}

export function KnowledgeGraph() {
  const [active, setActive] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const gradientId = useId();
  const activeNode = nodes.find((n) => n.id === active);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      <div className="relative mx-auto aspect-square w-full max-w-[560px]">
        <svg
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          className="h-full w-full overflow-visible"
          role="img"
          aria-label="Diagram: your brand entity at the center, connected to structured data, citations, reviews, Google Business Profile, sameAs links and authority content."
        >
          <defs>
            <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-signal)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={CENTER} cy={CENTER} r={RADIUS + 60} fill={`url(#${gradientId})`} />

          {/* connecting lines */}
          {nodes.map((node, i) => {
            const pos = satellitePosition(i, nodes.length);
            const isActive = active === node.id;
            return (
              <motion.line
                key={`line-${node.id}`}
                x1={CENTER}
                y1={CENTER}
                x2={pos.x}
                y2={pos.y}
                stroke={isActive ? "var(--color-signal-ink)" : "var(--color-ink-faint)"}
                strokeOpacity={isActive ? 1 : 0.35}
                strokeWidth={isActive ? 2 : 1}
                initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
                whileInView={prefersReducedMotion ? undefined : { pathLength: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: "easeOut" }}
              />
            );
          })}

          {/* satellite nodes */}
          {nodes.map((node, i) => {
            const pos = satellitePosition(i, nodes.length);
            const isActive = active === node.id;
            return (
              <motion.g
                key={node.id}
                initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.6 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                style={{ cursor: "pointer" }}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                aria-label={`${node.label}: ${node.explain}`}
                onMouseEnter={() => setActive(node.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(node.id)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(isActive ? null : node.id)}
              >
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={SATELLITE_R}
                  fill={isActive ? "var(--color-signal)" : "var(--color-paper)"}
                  stroke="var(--color-ink)"
                  strokeWidth={1.5}
                />
                <text
                  x={pos.x}
                  y={pos.y + SATELLITE_R + 20}
                  textAnchor="middle"
                  className="fill-ink font-mono text-[11px] uppercase tracking-wide"
                >
                  {node.label.length > 18 ? node.label.split(" ")[0] : node.label}
                </text>
              </motion.g>
            );
          })}

          {/* center node */}
          <motion.g
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.7 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <circle cx={CENTER} cy={CENTER} r={NODE_R} fill="var(--color-ink)" />
            <text
              x={CENTER}
              y={CENTER + 5}
              textAnchor="middle"
              className="fill-paper font-mono text-[12px] uppercase tracking-wide"
            >
              Your Brand
            </text>
          </motion.g>
        </svg>
      </div>

      <div className="min-h-[140px]">
        {activeNode ? (
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
              {activeNode.label}
            </p>
            <p className="mt-2 text-lg leading-relaxed">{activeNode.explain}</p>
          </motion.div>
        ) : (
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
              Hover or focus a node
            </p>
            <p className="mt-2 text-lg leading-relaxed text-ink-faint">
              Every connection is a signal an AI model cross-references before it decides
              whether to trust — and recommend — your brand.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
