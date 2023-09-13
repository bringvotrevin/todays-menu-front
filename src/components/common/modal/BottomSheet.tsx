import React from 'react';
import { ModalBackground, ModalLayout, SlideBar } from './BottomSheet.styled';

type Props = {
  children: React.ReactNode;
  handleModalClose: React.MouseEventHandler<HTMLDivElement>;
};

const BottomSheet = (props: Props) => {
  return (
    <ModalBackground onClick={props.handleModalClose}>
      <ModalLayout onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}>
        <SlideBar />
        {props.children}
      </ModalLayout>
    </ModalBackground>
  );
};

export default BottomSheet;
