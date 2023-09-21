import styled from 'styled-components';
import BottomSheet from './BottomSheet';
import { vars } from 'styles/GlobalStyle';

export const ShareBottomSheet = styled(BottomSheet)`
  ul {
    padding: 0 30px;
  }

  li {
    padding: 30px;
    display: flex;
    align-items: center;
    font-weight: ${vars.static.font600};

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
