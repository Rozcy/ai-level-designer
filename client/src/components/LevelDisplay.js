import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const TileContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gap: 2,
}));

const Tile = styled(motion.div)(({ type, theme }) => ({
  width: '100%',
  paddingTop: '100%',
  borderRadius: 4,
  backgroundColor: 
    type === '#' ? theme.palette.secondary.main :
    type === 'S' ? theme.palette.success.main :
    type === 'E' ? theme.palette.error.main :
    type === 'T' ? theme.palette.warning.main :
    'transparent',
}));

const LevelDisplay = ({ level }) => {
  return (
    <TileContainer>
      {level.flat().map((tile, index) => (
        <Tile
          key={index}
          type={tile}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.01 }}
        />
      ))}
    </TileContainer>
  );
};

export default LevelDisplay;