import React from 'react';
import * as S from './Error.styled';
import toPreviousPage from 'assets/icons/btn-to-previoud-page.svg';
import Button from 'components/common/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  return (
    <S.Background>
      <S.Wrapper>
        <S.PreviousButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <img className="toPreviousPageButton" src={toPreviousPage} alt="to previous icon" />
        </S.PreviousButton>
        <p className="description">화면을 불러오지 못했어요😓</p>
        <Button className="errorRetry" $variant="errorRetry" type="button">
          다시 시도하기
        </Button>
      </S.Wrapper>
    </S.Background>
  );
}
