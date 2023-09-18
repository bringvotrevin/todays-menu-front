import styled from 'styled-components';
import bg_vote from 'assets/images/background-top.png';
import icon_yummy from 'assets/icons/icon-yummy.svg';
import BottomSheet from 'components/common/modal/BottomSheet';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${bg_vote}) 0 0 no-repeat;
  background-color: var(--color-bg-gray);
  padding: 50px 18px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  width: 90%;
  margin: 0 auto 11px;
  font-size: var(--xxl);
  font-weight: var(--font-bold);
  color: white;
  position: relative;

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 27px;
    height: 27px;
    bottom: 2px;
    right: -10px;
    background: url(${icon_yummy}) 0 0 no-repeat;
  }
`;

export const CardUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 22px;
  flex-grow: 1;
`;

export const ButtonLayout = styled.div`
  height: 70px;
  display: flex;
  gap: 7px;
  button:first-child {
    position: relative;
    flex-basis: 1;
  }
`;

export const ShareImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const VoteBottomSheet = styled(BottomSheet)`
  ul {
    padding: 17px 30px 117px;
  }

  li {
    padding: 30px;
    display: flex;
    align-items: center;

    p {
      margin: 0 auto;
    }
  }

  .shareViaLink {
    padding-left: 40px;
  }
`;

export const Line = styled.p`
  width: 100%;
  border: 1px #d9d9d9 solid;
`;

export const shareLi = styled.li`
  img {
    display: inline;
  }

  p {
    display: inline;
  }
`;
