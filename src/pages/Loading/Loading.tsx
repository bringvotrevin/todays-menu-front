import React from 'react';
import * as S from './Loading.styled';
import graydot from 'assets/icons/gray-dot.svg';
import noodle from 'assets/icons/icon-noodle.svg';
import hamburger from 'assets/icons/icon-hamburger.svg';
import sushi from 'assets/icons/icon-sushi.svg';
import soup from 'assets/icons/icon-soup.svg';
import sandwich from 'assets/icons/icon-sandwich.svg';

const Loading = () => {
  return (
    <S.Wrapper>
      <S.ContentsWrapper>
        <S.LoadingH2>로딩중</S.LoadingH2>
        <S.ImgWrapper>
          <S.DotsIconsWrapper>
            <S.DotsIcons src={graydot} $left="0px" $delay="0s" />
            <S.DotsIcons src={graydot} $left="50px" />
            <S.DotsIcons src={graydot} $left="100px" />
            <S.DotsIcons src={graydot} $left="150px" />
            <S.DotsIcons src={graydot} $left="200px" />
            <S.DotsIcons src={graydot} $left="0px" $delay="0s" />
            <S.DotsIcons src={graydot} $left="50px" $delay="0.5s" />
            <S.DotsIcons src={graydot} $left="100px" $delay="1s" />
            <S.DotsIcons src={graydot} $left="150px" $delay="1.5s" />
            <S.DotsIcons src={graydot} $left="200px" $delay="2s" />
          </S.DotsIconsWrapper>
          <S.FoodsIconsWrapper>
            <S.FoodsIcons src={noodle} alt="loading image noodle" $left="-5px" $delay="0s" />
            <S.FoodsIcons src={hamburger} alt="loading image hamburger" $left="45px" $delay="0.5s" />
            <S.FoodsIcons src={sushi} alt="loading image sushi" $left="95px" $delay="1s" />
            <S.FoodsIcons src={soup} alt="loading image soup" $left="145px" $delay="1.5s" />
            <S.FoodsIcons src={sandwich} alt="loading image sandwich" $left="195px" $delay="2s" />
          </S.FoodsIconsWrapper>
        </S.ImgWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
};

export default Loading;
