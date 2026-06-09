import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins (only in browser)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Apple-style easing curves
export const appleEase = {
  smooth: 'power2.out',
  gentle: 'power1.inOut',
  snappy: 'power3.out',
  bounce: 'back.out(1.2)',
  spring: 'elastic.out(1, 0.5)',
};

// Animation presets
export const animations = {
  fadeUp: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: appleEase.smooth },
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 0.6, ease: appleEase.gentle },
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: appleEase.smooth },
  },
  slideInLeft: {
    from: { opacity: 0, x: -30 },
    to: { opacity: 1, x: 0, duration: 0.6, ease: appleEase.smooth },
  },
  slideInRight: {
    from: { opacity: 0, x: 30 },
    to: { opacity: 1, x: 0, duration: 0.6, ease: appleEase.smooth },
  },
};

// Stagger animation helper
export const stagger = (amount: number = 0.1) => ({
  each: amount,
  from: 'start' as const,
});

// Initialize scroll-triggered animations
export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    // Show all elements without animation
    gsap.set('.gsap-fade-up, .gsap-fade-in, .gsap-scale-in, .gsap-slide-left, .gsap-slide-right', {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    });
    return;
  }

  // Fade up animations
  gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: appleEase.smooth,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Fade in animations
  gsap.utils.toArray<HTMLElement>('.gsap-fade-in').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: appleEase.gentle,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Scale in animations
  gsap.utils.toArray<HTMLElement>('.gsap-scale-in').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: appleEase.smooth,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Slide left animations
  gsap.utils.toArray<HTMLElement>('.gsap-slide-left').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: appleEase.smooth,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Slide right animations
  gsap.utils.toArray<HTMLElement>('.gsap-slide-right').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: appleEase.smooth,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Staggered children animations
  gsap.utils.toArray<HTMLElement>('.gsap-stagger-children').forEach((container) => {
    const children = container.children;
    const staggerDelay = parseFloat(container.dataset.stagger || '0.1');

    gsap.fromTo(
      children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: appleEase.smooth,
        stagger: staggerDelay,
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

// Cleanup ScrollTrigger instances
export function cleanupScrollTriggers() {
  if (typeof window === 'undefined') return;
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

// Hero entrance animation
export function animateHero() {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const tl = gsap.timeline({ defaults: { ease: appleEase.smooth } });

  tl.fromTo(
    '.hero-image',
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.8 }
  )
    .fromTo(
      '.hero-title',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    )
    .fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.3'
    )
    .fromTo(
      '.hero-badge',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.4 },
      '-=0.2'
    );

  return tl;
}

export { gsap, ScrollTrigger };
