import styled from 'styled-components';
import { vars } from 'styles/GlobalStyle';

type StyledButtonProps = {
  $variant?: 'white' | 'orange' | 'gray' | 'retry' | 'errorRetry';
  $style?: {
    [key: string]: string | undefined;
  };
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
      case 'errorRetry':
        return '#a8a8a8';
      default:
        return '#fff';
    }
  }};
  color: ${(props) => {
    switch (props.$variant) {
      case 'orange':
        return '#fff';
      case 'gray':
        return vars.semantic.subGray;
      case 'retry':
        return 'rgba(250, 250, 250, 0.7)';
      case 'errorRetry':
        return '#fff';
      default:
        return vars.semantic.primrayOrange;
    }
  }};
  border-radius: 20px;
  font-size: 20px;
  font-weight: var(--font-bold);
  width: ${(props) => (props.$style?.width ? props.$style.width : '100%')};
`;
