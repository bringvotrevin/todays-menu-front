import { styled } from 'styled-components';

const MenuList = styled.li`
  padding: 16px 17px 17px;
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
  font-size: var(--sm);
`;

const RestaurantTagsUl = styled.ul`
  display: flex;
  align-items: center;
  margin: 5px 0 17px;
`;

const RestaurantTag = styled.p`
  padding: 3px 5px;
  border-radius: 5px;
  color: var(--color-sub-gray);
  font-size: var(--xs);
  display: inline-block;
  vertical-align: bottom;
  line-height: normal;
  color: var(--color-main-orange);
`;

const RestaurantDistance = styled.p`
  color: var(--color-sub-gray);
  font-size: var(--xs);
`;

const RestaurantDetail = styled.button`
  color: var(--color-sub-gray);
  font-weight: var(--font-bold);
  text-decoration: underline;
  text-underline-position: under;
`;

export { MenuList, ButtonsDiv, RestaurantName, RestaurantTagsUl, RestaurantTag, RestaurantDistance, RestaurantDetail };
