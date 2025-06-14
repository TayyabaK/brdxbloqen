import * as React from 'react';
import Container from '@mui/material/Container';
import Hero from '@/components/hero-section-1';

export default function Home() {
  return (
    <Container maxWidth={false}>
      <Hero />
    </Container>
  );
}
