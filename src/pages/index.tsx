import * as React from 'react';
import Hero from '@/components/hero-section';
import Layout from '@/components/layout';
import Testimonials from '@/components/testimonials';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import StatsCarousel from '@/components/at-a-glance';
import Web3Solutions from '@/components/web3-solutions';
import SixStepProcess from '@/components/six-step-process';
import PartnershipSection from '@/components/partnership';
import FinalCTA from '@/components/final-cta';
import ReadyMadeProducts from '@/components/our-products';

export default function Home() {
  const testimonialRef = useRef(null);

  return (
    <Layout>
      <Hero />
      <Box sx={{ my: 4 }} />
      <Web3Solutions />
      <Box sx={{ my: 4 }} />
      <StatsCarousel />
      <Box sx={{ my: 4 }} />
      <PartnershipSection />
      <Box sx={{ my: 4 }} />
      <SixStepProcess />
      <Box sx={{ my: 4 }} />
      <ReadyMadeProducts />
      <Box sx={{ my: 4 }} />
      <motion.div
        ref={testimonialRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '0px 0px -100px 0px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}>
        <Testimonials />
      </motion.div>
      <Box sx={{ my: 4 }} />
      <FinalCTA />
      <Box sx={{ my: 4 }} />
    </Layout>
  );
}
