import styled from 'styled-components';
import { vars } from 'styles/GlobalStyle';

type StyledButtonProps = {
  $variant: 'orange' | 'white' | 'gray' | 'retry';
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 22px 0px 20px;
  border: 2px var(--color-main-orange) solid;
  background-color: ${(props) => {
    switch (props.$variant) {
      case 'orange':
        return vars.semantic.primrayOrange;
      case 'gray':
        return '#fff';
      case 'retry':
        return 'transparent';
      default:
        return '#fff';
    }
  }};
  color: ${(props) => {
    switch (props.$variant) {
      case 'orange':
        return vars.semantic.primrayOrange;
      case 'gray':
        return vars.semantic.subGray;
      case 'retry':
        return 'rgba(250, 250, 250, 0.7)';
      default:
        return vars.semantic.primrayOrange;
    }
  }};
  border-radius: 20px;
  font-size: 20px;
  font-weight: var(--font-bold);
  width: 100%;
`;
