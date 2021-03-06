import styled from 'styled-components';
import { Card, CardContent, CardHeader, Typography} from '@material-ui/core';

export const CardContainer = styled.div`
  padding: 0.5rem;
`;

export const CustomCard = styled(Card)`
  background: rgba(101, 199, 137, 0.6) !important;
`

export const Header = styled(CardHeader)`
  span {
    text-align: center;
  }
`

export const Content = styled(CardContent)`
  text-align: center;
  padding: 0 !important;
`;

export const Price = styled(Typography)`
    margin-bottom: 1rem;
`