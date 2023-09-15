import { styled } from 'styled-components';

export const MenuList = styled.li`
  padding: 16px 17px 17px;
  background-color: #fff;
  border: 1px var(--color-sub-gray) solid;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

export const RestaurantName = styled.strong`
  font-weight: var(--font-semi-bold);
  font-size: var(--sm);
`;

export const RestaurantTagsUl = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 5px 0 17px;
`;

export const RestaurantTag = styled.p`
  padding: 3px 0;
  margin-left: 2px;
  border-radius: 5px;
  color: var(--color-sub-gray);
  font-size: var(--xs);
  display: inline-block;
  vertical-align: bottom;
  line-height: normal;
  color: var(--color-main-orange);
`;

export const RestaurantDistance = styled.p`
  color: var(--color-sub-gray);
  font-size: var(--xs);
`;

export const RestaurantDetail = styled.button`
  color: var(--color-sub-gray);
  font-weight: var(--font-medium);
  font-weight: var(--font-regular);
  border: 1px #dbdbdb solid;
  padding: 4px 5px 3px;
  border-radius: 5px;
`;
