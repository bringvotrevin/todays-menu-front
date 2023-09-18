import { styled } from 'styled-components';

export const MenuList = styled.li<{ $isSelected: boolean }>`
  padding: 16px 17px 17px;
  background: ${({ $isSelected }) => ($isSelected ? 'linear-gradient(rgba(239, 90, 57, 0.2), rgba(239, 90, 57, 0.2)), #FFFFFF' : '#FFFFFF')};
  /* border: 1px var(--color-sub-gray) solid; */
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  cursor: pointer;
`;

export const RestaurantName = styled.strong`
  font-weight: var(--font-semi-bold);
  font-size: var(--md);
`;

export const RestaurantLink = styled.img`
  display: inline-block;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

export const RestaurantTagsUl = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 3px 0 10px;
`;

export const RestaurantTag = styled.p`
  padding: 3px 0;
  margin-left: 2px;
  border-radius: 5px;
  color: var(--color-sub-gray);
  font-size: var(--sm);
  display: inline-block;
  vertical-align: bottom;
  line-height: normal;
  color: var(--color-main-orange);
`;

export const RestaurantDistance = styled.p`
  color: var(--color-sub-gray);
  font-size: var(--sm);
  font-weight: var(--font-light);
`;

export const RestaurantDetail = styled.button`
  color: var(--color-sub-gray);
  border: 1px #dbdbdb solid;
  padding: 4px 5px 3px;
  border-radius: 5px;
`;
