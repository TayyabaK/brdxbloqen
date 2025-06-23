'use client';

import { Box } from '@mui/material';

export default function Test() {
  return (
    <Box sx={{ p: 4, background: 'lightblue', border: '2px dashed red' }}>
      This box should have visible padding.
    </Box>
  );
}
