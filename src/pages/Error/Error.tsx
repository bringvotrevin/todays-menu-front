import React, { useEffect } from 'react';
import * as S from './Error.styled';
import toPreviousPage from 'assets/icons/btn-to-previoud-page.svg';
import Button from 'components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';

export default function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '에러 화면',
      title: '에러_화면',
    });
  }, []);

  const refreshPage = () => {
    ReactGA.event({
      category: 'click',
      action: '다시_시도하기_버튼',
      label: '에러 화면',
    });
    window.location.reload();
  };

  return (
    <S.Background>
      <S.Wrapper>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <img className="toPreviousPageButton" src={toPreviousPage} alt="to previous icon" />
        </button>
        <p className="description">화면을 불러오지 못했어요😓</p>
        <Button className="errorRetry" $variant="errorRetry" type="button" onClick={() => refreshPage()}>
          다시 시도하기
        </Button>
      </S.Wrapper>
    </S.Background>
  );
}
