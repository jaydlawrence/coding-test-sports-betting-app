import styled, { css } from 'styled-components';
import { Toolbar, Drawer } from '@material-ui/core';

export const Bar = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
`;

export const CustomDrawer = styled(Drawer)`
  div.MuiDrawer-paper {
    width: 80%;
  }
`;