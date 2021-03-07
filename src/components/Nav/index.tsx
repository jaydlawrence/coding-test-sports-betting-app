import React, { useState } from 'react';
import { AppBar, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { BetSlipDrawer } from '../BetSlipDrawer';
import { Bar, CustomDrawer } from './styles';


export const Nav: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <>
      <AppBar position="sticky">
        <Bar>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleOpen}>
            <Menu />
          </IconButton>
        </Bar>
      </AppBar>
      <CustomDrawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <BetSlipDrawer onClose={() => setIsOpen(false)} />
      </CustomDrawer>
    </>
  );
}