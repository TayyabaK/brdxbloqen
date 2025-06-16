'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import Layout from '@/components/layout';
import Hero from '@/components/hero-section';
import Web3Solutions from '@/components/web3-solutions';
import StatsCarousel from '@/components/at-a-glance';
import PartnershipSection from '@/components/partnership';
import SixStepProcess from '@/components/six-step-process';
import ReadyMadeProducts from '@/components/our-products';
import Testimonials from '@/components/testimonials';
import FinalCTA from '@/components/final-cta';

const sectionAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, // standard ease-out cubic bezier
  viewport: { once: false, amount: 0.2 },
};

export default function Home() {
  const testimonialRef = useRef(null);

  return (
    <Layout>
      <Hero />
      <Box sx={{ my: 6 }} />

      <motion.div {...sectionAnimation}>
        <Web3Solutions />
      </motion.div>
      <Box sx={{ my: 6 }} />

      <motion.div {...sectionAnimation}>
        <StatsCarousel />
      </motion.div>
      <Box sx={{ my: 6 }} />

      <motion.div {...sectionAnimation}>
        <PartnershipSection />
      </motion.div>
      <Box sx={{ my: 6 }} />

      <motion.div {...sectionAnimation}>
        <SixStepProcess />
      </motion.div>
      <Box sx={{ my: 6 }} />

      <motion.div {...sectionAnimation}>
        <ReadyMadeProducts />
      </motion.div>
      <Box sx={{ my: 6 }} />

      <motion.div
        ref={testimonialRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '0px 0px -100px 0px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Testimonials />
      </motion.div>
      <Box sx={{ my: 6 }} />

      <motion.div {...sectionAnimation}>
        <FinalCTA />
      </motion.div>
      <Box sx={{ my: 6 }} />
    </Layout>
  );
}
