import styled, { css } from 'styled-components';
import { Button, Card, CardContent, CardHeader, Typography} from '@material-ui/core';

export const CardContainer = styled.div`
  padding: 1rem;
`;

export const Content = styled(CardContent)`
  padding: 0 !important;
`

export const CustomCard = styled(Card)`
  background: #F9F9F9 !important;
`

export const Header = styled(CardHeader)`
  span {
    text-align: center;
  }
`

export const MarketName = styled(Typography)`
  margin: 0.5rem 1rem !important;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: stretch;
  button {
    margin: 1rem;
  }
`;

export const SelectionButton = styled(Button)<{ selected: boolean }>`
  flex-grow: 1;
  ${props => (
    css`
      background: ${props.selected ? 'rgba(101, 199, 137, 0.6)' : 'white'} !important;
    `
    )
  }
  span {
    display: block
  }
`;

const SelectionPart = styled.span`
  display:block !important;
`;

export const SelectionName = styled(SelectionPart)`
  
`;

export const SelectionPrice = styled(SelectionPart)`
  
`;