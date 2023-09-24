import styled from 'styled-components';
import icon_location from 'assets/icons/btn-getLocation.svg';
import { vars } from 'styles/GlobalStyle';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  padding: 176px 18px 25px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: ${vars.static.font700};
  font-size: ${vars.static.font20};
  line-height: 35px;
  color: ${vars.semantic.primrayOrange};
  margin: 20px 0 0 9px;
`;

export const Form = styled.form`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AddressInput = styled.input`
  width: 100%;
  margin: 30px auto 22px;
  padding: 21px 0 22px 12px;
  background-color: #f3f3f3;
  border-radius: 10px;
  display: block;
  font-size: var(--md);
  font-weight: ${vars.static.font600};
  color: ${vars.semantic.subGray};
  cursor: pointer;

  &::placeholder {
    color: var(--color-sub-gray);
    font-weight: ${vars.static.font500};
  }
`;

export const GetCurrentLocationButton = styled.button`
  width: 160px;
  font-size: ${vars.static.font15};
  font-weight: ${vars.static.font600};
  color: var(--color-main-orange);
  background: url(${icon_location}) no-repeat 0 0/ 24px;
  text-align: right;
  line-height: 24px;
  margin-bottom: auto;
`;

type StyledSubmitButtonProps = {
  $isActive: boolean;
};

export const SubmitButton = styled.button<StyledSubmitButtonProps>`
  height: 70px;
  border-radius: 20px;
  background-color: ${(props) => (props.$isActive ? 'var(--color-main-orange)' : '#F3F3F3')};
  color: ${(props) => (props.$isActive ? 'white' : '#A8A8A8')};
  font-size: var(--lg);
  font-weight: var(--font-bold);
`;
