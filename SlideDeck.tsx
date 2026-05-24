import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { slides } from '../data/slides';
import { ChevronLeft, ChevronRight, Presentation } from 'lucide-react';
import { cn } from '../lib/utils';

export default function SlideDeck() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [revealedPoints, setRevealedPoints] = useState<Set<number>>(new Set());
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const currentSlide = slides[currentSlideIndex];
  const currentSlideFullyRevealed = currentSlide.points.every((point) =>
    revealedPoints.has(point.revealId),
  );
  const slideStepCounts = useMemo(
    () => slides.map((slide) => slide.points.length + 1),
    [],
  );
  const totalSteps = useMemo(
    () => slideStepCounts.reduce((total, count) => total + count, 0),
    [slideStepCounts],
  );
  const completedPreviousSteps = slideStepCounts
    .slice(0, currentSlideIndex)
    .reduce((total, count) => total + count, 0);
  const currentStep = completedPreviousSteps + revealedPoints.size + 1;
  const progress = (currentStep / totalSteps) * 100;
  const isAtBeginning = currentSlideIndex === 0 && revealedPoints.size === 0;
  const isAtEnd = currentSlideIndex === slides.length - 1 && currentSlideFullyRevealed;

  const handleNext = useCallback(() => {
    const nextUnrevealed = currentSlide.points.find((p) => !revealedPoints.has(p.revealId));

    if (nextUnrevealed) {
      setRevealedPoints((prev) => new Set(prev).add(nextUnrevealed.revealId));
    } else if (currentSlideIndex < slides.length - 1) {
      setDirection(1);
      setCurrentSlideIndex((prev) => prev + 1);
      setRevealedPoints(new Set());
    }
  }, [currentSlide.points, currentSlideIndex, revealedPoints]);

  const handlePrev = useCallback(() => {
    const revealedInOrder = currentSlide.points.filter((point) =>
      revealedPoints.has(point.revealId),
    );

    if (revealedInOrder.length > 0) {
      const lastRevealed = revealedInOrder[revealedInOrder.length - 1];
      setRevealedPoints((prev) => {
        const next = new Set(prev);
        next.delete(lastRevealed.revealId);
        return next;
      });
      return;
    }

    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex((prev) => prev - 1);
      const prevSlide = slides[currentSlideIndex - 1];
      setRevealedPoints(new Set(prevSlide.points.map((p) => p.revealId)));
    }
  }, [currentSlide.points, currentSlideIndex, revealedPoints]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'ArrowRight' ||
        e.key === 'ArrowDown' ||
        e.key === 'PageDown' ||
        e.key === 'Enter' ||
        e.key === ' ' ||
        e.code === 'Space'
      ) {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const slideVariants = {
    enter: (slideDirection: number) =>
      shouldReduceMotion
        ? { opacity: 0 }
        : {
            opacity: 0,
            x: slideDirection > 0 ? 90 : -90,
            scale: 0.98,
          },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (slideDirection: number) =>
      shouldReduceMotion
        ? { opacity: 0 }
        : {
            opacity: 0,
            x: slideDirection > 0 ? -90 : 90,
            scale: 0.98,
          },
  };

  return (
    <div className="deck-shell relative flex h-[100dvh] w-full flex-col overflow-hidden bg-[#071018] font-sans text-slate-50">
      <div aria-hidden="true" className="deck-backdrop absolute inset-0 pointer-events-none" />

      <div className="absolute top-0 z-50 flex w-full items-center px-4 py-3 sm:px-6 md:py-4">
        <div className="flex min-w-0 items-center gap-2">
          <Presentation className="text-slate-400" size={20} />
          <span className="truncate text-xs font-semibold uppercase tracking-wider text-slate-400">
            Cultural Exchange Presentation
          </span>
        </div>
      </div>

      <div className="absolute left-0 top-0 z-50 h-1 w-full bg-slate-950">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-300 via-amber-300 to-rose-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.35, ease: 'easeOut' }}
        />
      </div>

      <main className="relative z-10 flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-4 pb-28 pt-20 sm:px-8 md:pb-32">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={
              shouldReduceMotion
                ? { duration: 0.18 }
                : { type: 'spring', stiffness: 135, damping: 24, mass: 0.9 }
            }
            className="flex w-full max-w-7xl flex-col items-center justify-center"
          >
            <div className="mb-8 max-w-4xl text-center sm:mb-10 lg:mb-12">
              {currentSlide.icon && (() => {
                const Icon = currentSlide.icon;
                return (
                  <div className="mb-5 flex justify-center sm:mb-6">
                    <div className="rounded-lg bg-slate-900/70 p-3 text-emerald-300 ring-1 ring-white/10 sm:p-4">
                      <Icon className="h-9 w-9 sm:h-11 sm:w-11" strokeWidth={1.5} />
                    </div>
                  </div>
                );
              })()}

              {currentSlide.imageUrl ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-7 mt-2 flex justify-center"
                >
                  <img
                    src={currentSlide.imageUrl}
                    alt=""
                    className="max-h-72 rounded-lg object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:max-h-80"
                  />
                </motion.div>
              ) : currentSlide.emojis && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.12, duration: 0.35 }}
                  className={cn(
                    'mb-5 flex select-none items-center justify-center gap-3 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:gap-6',
                    currentSlideIndex === 0
                      ? 'text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem]'
                      : 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl',
                  )}
                >
                  {currentSlide.emojis.map((emoji, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: shouldReduceMotion ? 0 : 0.08 * i }}
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.08, rotate: i === 0 ? -6 : i === 2 ? 6 : 0 }}
                      className="cursor-default"
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.18 }}
                className="balanced-text mb-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {currentSlide.title}
              </motion.h1>

              {currentSlide.subtitle && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.24 }}
                  className="balanced-text text-lg font-medium text-slate-300 sm:text-xl md:text-2xl"
                >
                  {currentSlide.subtitle}
                </motion.p>
              )}
            </div>

            <div
              className={cn(
                'grid w-full grid-cols-1 gap-4 sm:gap-5',
                currentSlide.points.length === 2
                  ? 'max-w-5xl md:grid-cols-2'
                  : 'max-w-6xl md:grid-cols-3',
              )}
            >
              {currentSlide.points.map((point, index) => {
                const isRevealed = revealedPoints.has(point.revealId);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isRevealed ? 1 : 0,
                      y: isRevealed ? 0 : 20,
                      scale: isRevealed ? 1 : 0.96,
                    }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : index * 0.04,
                      duration: shouldReduceMotion ? 0.15 : 0.42,
                      type: shouldReduceMotion ? 'tween' : 'spring',
                      stiffness: 120,
                      damping: 18,
                    }}
                    className={cn(
                      'min-h-44 rounded-lg border border-white/10 bg-slate-950/70 p-5 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-6',
                      isRevealed ? 'pointer-events-auto' : 'pointer-events-none',
                    )}
                  >
                    <h3 className="mb-3 flex items-start gap-3 text-xl font-bold text-white sm:text-2xl">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-teal-300/10 text-sm font-bold text-teal-200 ring-1 ring-teal-200/20">
                        {index + 1}
                      </span>
                      <span className="min-w-0">{point.title}</span>
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-slate-200 sm:text-lg">
                      {point.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {currentSlide.source && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
                className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400 sm:mt-10"
              >
                <span>Source:</span>
                <span className="italic">{currentSlide.source}</span>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="pointer-events-none absolute bottom-5 left-0 z-40 flex w-full items-center justify-between px-4 sm:bottom-8 sm:px-8 md:px-12">
        <div className="rounded-md bg-slate-950/60 px-3 py-2 font-mono text-sm font-medium text-slate-400 ring-1 ring-white/10 backdrop-blur">
          {String(currentSlideIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>

        <div className="pointer-events-auto flex gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handlePrev}
            disabled={isAtBeginning}
            aria-label="Previous"
            className="rounded-full bg-slate-900/80 p-3 text-slate-300 ring-1 ring-white/10 backdrop-blur transition-all hover:bg-slate-800 hover:text-white disabled:opacity-30 disabled:hover:bg-slate-900 sm:p-4"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={isAtEnd}
            aria-label="Next"
            className="flex items-center justify-center rounded-full border border-teal-300/30 bg-teal-400/10 p-3 text-teal-200 shadow-[0_0_20px_rgba(45,212,191,0.18)] backdrop-blur transition-all hover:bg-teal-300/20 disabled:opacity-30 sm:p-4"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

    </div>
  );
}
