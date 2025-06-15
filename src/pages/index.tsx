import * as React from 'react';
import Container from '@mui/material/Container';
import Hero from '@/components/hero-section';
import Layout from '@/components/layout';
import Testimonials from '@/components/testimonials';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Layout>
      <Container maxWidth={false}>
        <Hero />
        <Box sx={{ my: 4 }} />
        <Testimonials />
      </Container>
    </Layout>
  );
}
