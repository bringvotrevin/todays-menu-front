import { styled } from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-main-orange);
`;

export const Wrapper = styled.div`
  padding: 57px 19px;

  & li {
    margin-top: 25px;
  }

  & li:first-child {
    margin-top: 0;
  }
`;
