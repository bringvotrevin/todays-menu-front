import styled from 'styled-components';
import BottomSheet from './BottomSheet';
import { vars } from 'styles/GlobalStyle';

export const ShareBottomSheet = styled(BottomSheet)`
  ul {
    padding: 5px 30px 16px;
  }

  li {
    button {
      width: 100%;
      padding: 30px;
      display: flex;
      align-items: center;
    }

    p {
      margin: 0 auto;
      font-size: var(--sm);
    }
  }

  .line {
    display: block;
    width: 100%;
    border: 1px #d9d9d9 solid;
  }

  .shareViaLink {
    padding-left: 9px;
  }
`;
export const CopiedModal = styled.p`
  width: 70%;
  padding: 15px 15px;
  border-radius: 10px;
  background-color: #fff;
  position: fixed;
  text-align: center;
  font-size: var(--lg);

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
