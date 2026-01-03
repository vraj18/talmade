import React, { useEffect, useRef, useState } from 'react';
import { RevealOnScroll } from './ui/RevealOnScroll';

const stats = [
  { label: 'Years of experience', value: 25 },
  { label: 'Team members', value: 150 },
  { label: 'Successful projects', value: 400 },
  { label: 'Positive reviews', value: 1000 },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat().format(value);
}

function useCountUp(target: number, duration = 1500, startWhen = true) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startWhen) return;

    let start: number | null = null;

    const easeOutQuad = (t: number) => t * (2 - t);

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = easeOutQuad(progress);
      setValue(Math.floor(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, startWhen]);

  return value;
}

export const StatsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-4">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-black">
              Numbers that speak for themselves
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {stats.map((s, i) => {
              const count = useCountUp(s.value, 1500, visible);
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">
                    {s.label}
                  </div>
                  <div className="text-3xl md:text-5xl font-display font-bold text-black">
                    {formatNumber(count)}+
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
