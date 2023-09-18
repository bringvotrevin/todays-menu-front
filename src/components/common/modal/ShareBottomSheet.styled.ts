import styled from 'styled-components';
import BottomSheet from './BottomSheet';

export const ShareBottomSheet = styled(BottomSheet)`
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

  .line {
    display: block;
    width: 100%;
    border: 1px #d9d9d9 solid;
  }

  .shareViaLink {
    padding-left: 40px;
  }
`;
