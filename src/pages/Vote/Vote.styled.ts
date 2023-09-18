import { styled } from 'styled-components';
import background from 'assets/images/background-vote.svg';
import BottomSheet from '../../components/common/modal/BottomSheet';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: url(${background}) no-repeat;
`;

export const Wrapper = styled.ul`
  padding: 4px 19px 0;
  display: flex;
  flex-direction: column;
  gap: 13px;

  & li:first-child {
    margin-top: 10%;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 8px;

  .renewList {
    width: 150px;
  }

  .makeNewList {
    width: 200px;
  }
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
