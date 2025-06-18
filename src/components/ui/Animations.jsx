// components/AnimatedSection.jsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const SlideIn = ({ children, delay = 0,x_hidden=0 ,y_hidden=0,duration=1.0,threshold=0.5}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0,x:x_hidden, y: y_hidden },
    visible: {
      opacity: 1,
      x:0,
      y: 0,
      transition: { duration: duration, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      onAnimationStart={() => document.body.style.overflow = 'hidden'}
  onAnimationComplete={() => document.body.style.overflow = 'auto'}

    >
      {children}
    </motion.div>
  );
};


export const RotateZoom = ({ children, delay = 0 ,threshold}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}
    onAnimationStart={() => document.body.style.overflow = 'hidden'}
  onAnimationComplete={() => document.body.style.overflow = 'auto'} >
      {children}
    </motion.div>
  );
};
