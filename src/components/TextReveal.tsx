import React from 'react';
import { motion, Variants } from 'framer-motion';

export type RevealVariant = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'words' | 'mask';

export interface TextRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  amount?: number | 'some' | 'all';
}

/**
 * TextReveal Component
 * Premium scroll-triggered text reveal animations for luxury web interfaces.
 * Supports fade in, fade up, directional slides, word-by-word staggered reveal, and clip mask reveal.
 */
export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  stagger = 0.04,
  once = true,
  as = 'div',
  className = '',
  amount = 0.2,
}) => {
  const Component = motion[as] || motion.div;

  // Word-by-word animation mode (Best for flagship headings and key statements)
  if (variant === 'words' && typeof children === 'string') {
    const words = children.split(' ');

    const containerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: stagger,
          delayChildren: delay,
        },
      },
    };

    const wordVariants: Variants = {
      hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(3px)',
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          duration,
          ease: [0.215, 0.61, 0.355, 1], // Smooth deceleration curve
        },
      },
    };

    return (
      <Component
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        className={`inline-block ${className}`}
        variants={containerVariants}
      >
        {words.map((word, idx) => (
          <span key={`${word}-${idx}`} className="inline-block overflow-hidden py-0.5 mr-[0.25em] last:mr-0 align-top">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </Component>
    );
  }

  // Mask overflow reveal mode (Text slides up from an overflow:hidden mask)
  if (variant === 'mask') {
    const maskContainerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          delayChildren: delay,
        },
      },
    };

    const maskChildVariants: Variants = {
      hidden: {
        opacity: 0,
        y: '100%',
      },
      visible: {
        opacity: 1,
        y: '0%',
        transition: {
          duration,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };

    return (
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        variants={maskContainerVariants}
        className={`block overflow-hidden ${className}`}
      >
        <Component variants={maskChildVariants} className="block">
          {children}
        </Component>
      </motion.span>
    );
  }

  // Standard directional animations (fadeUp, fadeIn, fadeLeft, fadeRight)
  const getVariants = (): Variants => {
    switch (variant) {
      case 'fadeIn':
        return {
          hidden: { opacity: 0, filter: 'blur(4px)' },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: 'easeOut' },
          },
        };
      case 'fadeLeft':
        return {
          hidden: { opacity: 0, x: 35 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration, delay, ease: [0.215, 0.61, 0.355, 1] },
          },
        };
      case 'fadeRight':
        return {
          hidden: { opacity: 0, x: -35 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration, delay, ease: [0.215, 0.61, 0.355, 1] },
          },
        };
      case 'fadeUp':
      default:
        return {
          hidden: { opacity: 0, y: 28, filter: 'blur(2px)' },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.215, 0.61, 0.355, 1] },
          },
        };
    }
  };

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </Component>
  );
};

export default TextReveal;
