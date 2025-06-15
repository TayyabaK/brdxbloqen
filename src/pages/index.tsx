import * as React from 'react';
import Hero from '@/components/hero-section';
import Layout from '@/components/layout';
import Testimonials from '@/components/testimonials';
import { Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const testimonialRef = useRef(null);
  const isInView = useInView(testimonialRef, {
    margin: '0px 0px -100px 0px',
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false); // Reset to allow reanimation
    }
  }, [isInView]);

  return (
    <Layout>
      <Hero />
      <Box sx={{ my: 4 }} />

      <motion.div
        ref={testimonialRef}
        initial={false}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}>
        <Testimonials />
      </motion.div>

      <Box sx={{ my: 4 }} />
    </Layout>
  );
}
