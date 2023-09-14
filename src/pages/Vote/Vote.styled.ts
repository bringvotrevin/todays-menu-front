import { styled } from 'styled-components';
import background from 'assets/images/bg-vote.svg';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: url(${background}) no-repeat;
`;

export const Wrapper = styled.ul`
  /* box-shadow: inset 0 0 0 10px red; */
  padding: 0 19px 0;
  /* height: 95%; */
  display: flex;
  flex-direction: column;
  gap: 15px;

  & li:first-child {
    margin-top: 10%;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 14px;
`;
