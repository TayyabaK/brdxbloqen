import * as React from 'react';
import Hero from '@/components/hero-section';
import Layout from '@/components/layout';
import Testimonials from '@/components/testimonials';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Box sx={{ my: 4 }} />
      <Testimonials />
    </Layout>
  );
}
