import * as React from 'react';
import Container from '@mui/material/Container';
import Hero from '@/components/hero-section';
import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      <Container maxWidth={false}>
        <Hero />
      </Container>
    </Layout>
  );
}
