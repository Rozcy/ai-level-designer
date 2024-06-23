import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const BackgroundContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  overflow: 'hidden',
});

const Tree = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  width: 0,
  height: 0,
  borderLeft: '50px solid transparent',
  borderRight: '50px solid transparent',
  borderBottom: `200px solid ${theme.palette.primary.main}`,
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '-50px',
    bottom: '-220px',
    width: '100px',
    height: '20px',
    backgroundColor: theme.palette.secondary.main,
  },
}));

const ForestBackground = () => {
  return (
    <BackgroundContainer>
      <Tree style={{ left: '5%', transform: 'scale(0.7)' }} />
      <Tree style={{ left: '15%', transform: 'scale(0.9)' }} />
      <Tree style={{ left: '25%', transform: 'scale(0.6)' }} />
      <Tree style={{ right: '5%', transform: 'scale(0.8)' }} />
      <Tree style={{ right: '15%', transform: 'scale(0.7)' }} />
      <Tree style={{ right: '25%', transform: 'scale(0.9)' }} />
    </BackgroundContainer>
  );
};

export default ForestBackground;