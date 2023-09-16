import styled from 'styled-components';
import { vars } from 'styles/GlobalStyle';

type StyledButtonProps = {
  variant: 'orange' | 'white' | 'gray';
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 22px 0px 20px;
  border: 2px var(--color-main-orange) solid;
  background-color: ${(props) => {
    switch (props.variant) {
      case 'orange':
        return vars.semantic.primrayOrange;
      case 'gray':
        return '#fff';
      default:
        return '#fff';
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case 'orange':
        return vars.semantic.primrayOrange;
      case 'gray':
        return vars.semantic.subGray;
      default:
        return vars.semantic.primrayOrange;
    }
  }};
  border-radius: 20px;
  font-size: 20px;
  font-weight: var(--font-bold);
  width: 100%;
`;
