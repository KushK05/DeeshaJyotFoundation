"use client";

import { useEffect, useRef, useState } from "react";

import { IMPACT_COUNTERS } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

interface CounterProps {
  target: number;
  suffix?: string;
}

function AnimatedCounter({ target, suffix = "" }: CounterProps) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1200;
    const start = performance.now();

    const frame = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const next = Math.floor(progress * target);
      setValue(next);
      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  }, [started, target]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function ImpactCounter() {
  return (
    <section id="impact" className="relative z-20 -mt-16 px-6 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {IMPACT_COUNTERS.map((item) => {
          const iconName =
            item.icon === "child"
              ? "child"
              : item.icon === "women"
                ? "women"
                : "history";

          const borderClass =
            item.borderColor === "primary"
              ? "border-primary"
              : item.borderColor === "secondary"
                ? "border-secondary"
                : "border-tertiary";

          const iconColorClass =
            item.borderColor === "primary"
              ? "text-primary"
              : item.borderColor === "secondary"
                ? "text-secondary"
                : "text-tertiary";

          return (
            <Card
              key={item.key}
              hoverable
              className={`border-b-4 bg-surface-container p-8 text-center ${borderClass}`}
            >
              <Icon name={iconName} className={`mx-auto mb-2 h-8 w-8 ${iconColorClass}`} />
              <h3 className="font-headline text-3xl font-bold text-on-surface">
                <AnimatedCounter target={item.value} suffix={item.suffix} />
              </h3>
              <p className="mt-1 text-sm tracking-wide text-on-surface-variant">
                {item.label}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
