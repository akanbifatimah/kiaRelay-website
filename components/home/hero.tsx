import { HeroSlider } from "@/components/home/hero-slider";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sidebar text-white">
      <div aria-hidden className="bg-grid-texture pointer-events-none absolute inset-0 opacity-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sidebar/40 via-sidebar to-sidebar"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <HeroSlider />
      </div>
    </section>
  );
}
