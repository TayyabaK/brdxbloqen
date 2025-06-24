// components/Web3Solutions.tsx
import React, { useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LockIcon from '@mui/icons-material/Lock';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SecurityIcon from '@mui/icons-material/Security';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CollectionsIcon from '@mui/icons-material/Collections';
import CasinoIcon from '@mui/icons-material/Casino';

const solutions = [
  {
    title: 'Launchpads & Presales',
    description: 'Full systems with token logic, dashboards, investor access',
    icon: <RocketLaunchIcon fontSize='large' />,
    bg: 'linear-gradient(135deg, #D6EFC7 0%, #A8DF8E 100%)',
    accent: '#5C9D3E',
  },
  {
    title: 'Staking Platforms',
    description:
      'Secure reward pools, analytics dashboards, wallet integration',
    icon: <LockIcon fontSize='large' />,
    bg: 'linear-gradient(135deg, #FFE5B4 0%, #FFD166 100%)',
    accent: '#E6A800',
  },
  {
    title: 'AI Chatbots (Telegram/Discord)',
    description: '24/7 automation for holder FAQs and onboarding',
    icon: <ChatBubbleOutlineIcon fontSize='large' />,
    bg: 'linear-gradient(135deg, #DAD4FF 0%, #B6A8FF 100%)',
    accent: '#7A6AFF',
  },
  {
    title: 'Tokenomics & Smart Contract Audits',
    description: 'Battle-tested smart contracts, audit-ready.',
    icon: <SecurityIcon fontSize='large' />,
    bg: 'linear-gradient(135deg, #C6E8FF 0%, #7AC3FF 100%)',
    accent: '#0085E6',
  },
  {
    title: 'NFT Collection Launchpad',
    description:
      'Tools to mint, manage, and deploy NFT collections with metadata',
    icon: <CollectionsIcon fontSize='large' />,
    bg: 'linear-gradient(135deg, #FADADD 0%, #F8BBD0 100%)',
    accent: '#E91E63',
  },
  {
    title: 'NFT Marketplace',
    description: 'Launch your own OpenSea-style marketplace in days.',
    icon: <StorefrontIcon fontSize='large' />,
    bg: 'linear-gradient(135deg, #D1F2EB 0%, #88D8C0 100%)',
    accent: '#00A896',
  },
  {
    title: 'Multi-Level Staking (MLM)',
    description:
      'Referral-based staking with tiered rewards, on-chain tracking, and payout logic',
    icon: <ReduceCapacityIcon fontSize='large' />,
    bg: 'linear-gradient(135deg, #FFF5BA 0%, #FFEE58 100%)',
    accent: '#F9A825',
  },
  {
    title: 'Blockchain Lottery',
    description:
      'Transparent, decentralized lottery systems with smart contract-based draws',
    icon: <CasinoIcon fontSize='large' />,
    bg: 'linear-gradient(135deg, #E6E6FA 0%, #B8B8FF 100%)',
    accent: '#7B68EE',
  },
];

type SolutionCardProps = {
  item: (typeof solutions)[number];
  index: number;
};

const SolutionCard: React.FC<SolutionCardProps> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ width: '100%' }}>
      <Card
        elevation={0}
        sx={{
          width: '100%',
          background: item.bg,
          borderRadius: 3,
          p: 2,
          minHeight: 300,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: item.accent,
            opacity: isHovered ? 0.1 : 0,
            transition: 'opacity 0.3s ease',
          },
        }}>
        <motion.div
          animate={{
            rotate: isHovered ? 10 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{
            position: 'absolute',
            top: -20,
            right: -20,
            opacity: 0.2,
            zIndex: 0,
          }}>
          {item.icon}
        </motion.div>

        <CardContent sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <motion.div
              animate={{
                color: isHovered ? item.accent : 'inherit',
              }}>
              {React.cloneElement(item.icon, { sx: { fontSize: 40 } })}
            </motion.div>
            <Typography variant='h6' sx={{ fontWeight: 700, color: '#1F2937' }}>
              {item.title}
            </Typography>
          </Box>
          <Typography
            variant='body1'
            sx={{ color: '#374151', lineHeight: 1.6 }}>
            {item.description}
          </Typography>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              height: 2,
              background: item.accent,
              marginTop: 16,
            }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Web3Solutions() {
  return (
    <Box
      sx={{
        py: 12,
        px: { xs: 2, sm: 4, md: 8 },
        background:
          'radial-gradient(circle at center, #F6FAFF 0%, #EAF2FF 100%)',

        position: 'relative',
        overflow: 'hidden',
      }}>
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(167,139,250,0.1) 0%, rgba(167,139,250,0) 70%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(110,231,183,0.1) 0%, rgba(110,231,183,0) 70%)',
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
        }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <Typography
            variant='h3'
            sx={{
              fontWeight: 800,
              color: '#111827',
              mb: 2,
              textAlign: 'center',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}>
            Our Web3 Solutions
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: '#6B7280',
              textAlign: 'center',
              maxWidth: 700,
              mx: 'auto',
              mb: 6,
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}>
            Cutting-edge blockchain solutions tailored to your project&apos;s
            needs
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}>
          <AnimatePresence>
            {solutions.map((item, index) => (
              <SolutionCard key={index} item={item} index={index} />
            ))}
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
}
