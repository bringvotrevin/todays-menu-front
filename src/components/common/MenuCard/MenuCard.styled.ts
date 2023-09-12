import { styled } from 'styled-components';

const MenuList = styled.li`
  padding: 15px 14px 9px 17px;
  background-color: #fff;
  border: 1px var(--color-sub-gray) solid;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

const RestaurantName = styled.strong`
  font-weight: var(--font-semi-bold);
  font-size: 15px;
`;

const RestaurantTagsUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0 26px;
`;

const RestaurantTag = styled.p`
  padding: 3px 5px;
  border-radius: 5px;
  background-color: rgba(217, 217, 217, 0.24);
  color: var(--color-sub-gray);
  font-size: 12px;
  display: inline-block;
  vertical-align: bottom;
  line-height: normal;
`;

const RestaurantDistance = styled.p`
  color: var(--color-sub-gray);
`;

const RestaurantDetail = styled.button`
  color: var(--color-sub-gray);
  font-weight: var(--font-bold);
  text-decoration: underline;
  text-underline-position: under;
`;

export { MenuList, ButtonsDiv, RestaurantName, RestaurantTagsUl, RestaurantTag, RestaurantDistance, RestaurantDetail };
