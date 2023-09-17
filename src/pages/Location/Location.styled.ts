import { styled } from 'styled-components';
import icon_location from 'assets/icons/btn-getLocation.svg';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 176px 18px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GetCurrentLocationButton = styled.button`
  width: 215px;
  font-size: var(--lg);
  font-weight: var(--font-semi-bold);
  color: var(--color-main-orange);
  background: url(${icon_location}) no-repeat 0 0/ 24px;
  text-align: right;
  line-height: 24px;
`;

export const Title = styled.h1`
  font-size: var(--sm);
  color: var(--color-main-orange);
  margin: 20px 0 0 0;
`;

export const Form = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddressInput = styled.input`
  width: 100%;
  margin: 30px auto;
  padding: 21px 0 22px 25px;
  border: 2px solid var(--color-main-orange);
  border-radius: 10px;
  display: block;
  font-size: var(--md);
  cursor: pointer;

  &::placeholder {
    color: var(--color-sub-gray);
  }
`;
