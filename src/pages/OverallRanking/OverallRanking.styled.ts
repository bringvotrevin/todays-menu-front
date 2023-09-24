import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-main-orange);
`;

export const OverallRankingWrapper = styled.div`
  padding: 45px 19px 43px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 25px;

  .page-title {
    margin-bottom: 3px;
    font-size: 30px;
    font-weight: var(--font-bold);
    color: #fff;
    text-align: center;
  }
`;

export const RestaurantList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 18px;
`;

export const RestaurantItem = styled.li`
  width: 100%;
  min-height: 92px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;

  .detailbutton {
    margin: 0 22px;
  }
`;

export const Ranking = styled.div`
  margin: auto 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;

  img {
    width: 16px;
  }

  .ranking {
    display: block;
    font-size: 23px;
    font-weight: var(--font-bold);
    line-height: 1.5;
  }

  .total-number {
    display: inline-block;
    color: #c2c2c2;
  }
`;

export const RestaurantData = styled.div`
  width: 60%;
  line-height: 1.7;
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* .name-and-distance {
    width: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
  } */

  .name {
    width: 177px;
    font-size: var(--md);
    font-weight: var(--font-bold);
    margin-right: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  /* .distance {
    display: inline;
    color: var(--color-sub-gray);
    flex-shrink: 0;
  } */

  .tags {
    display: flex;
    gap: 5px;
    color: var(--color-main-orange);
  }
`;

export const Distance = styled.p`
  /* height: 100%; */
  /* vertical-align: center; */
  color: var(--color-sub-gray);
`;

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
`;

export const ButtonShare = styled.button`
  display: block;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 11px 48px;
  border-radius: 20px;
  margin: 0 auto;
  margin-bottom: auto;
  img {
    margin-right: 10px;
    vertical-align: bottom;
  }
`;
