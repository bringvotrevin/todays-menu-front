import React from 'react';
import * as S from './OverallRanking.styled';
import toDetail from 'assets/icons/btn-link-gray.svg';
import shareResult from 'assets/icons/icon-share-resut.svg';
import Button from 'components/common/Button/Button';
import winner from 'assets/icons/icon-winner.svg';

export default function OverallRanking() {
  return (
    <S.Wrapper>
      <S.OverallRankingWrapper>
        <h3 className="page-title">전체 순위</h3>
        <S.RestaurantList>
          <S.RestaurantItem>
            <S.Ranking>
              <img src={winner} alt="winner icon" />
              <strong className="ranking">1등</strong>
              <p>
                5<span className="total-number">/15명</span>
              </p>
            </S.Ranking>
            <S.RestaurantData>
              <strong className="name">오제제 강남점</strong>
              <p className="distance">120m</p>
              <div className="tags">
                <p># 양식</p>
                <p># 스테이크, 립</p>
              </div>
            </S.RestaurantData>
            <img src={toDetail} alt="more detail icon" />
          </S.RestaurantItem>
          {/* temp item */}
          <S.RestaurantItem>
            <S.Ranking>
              {/* <img src={winner} alt="winner icon" /> */}
              <strong className="ranking">1등</strong>
              <p>
                5<span className="total-number">/15명</span>
              </p>
            </S.Ranking>
            <S.RestaurantData>
              <strong className="name">오제제 강남점</strong>
              <p className="distance">120m</p>
              <div className="tags">
                <p># 양식</p>
                <p># 스테이크, 립</p>
              </div>
            </S.RestaurantData>
            <img src={toDetail} alt="more detail icon" />
          </S.RestaurantItem>
          <S.RestaurantItem>
            <S.Ranking>
              {/* <img src={winner} alt="winner icon" /> */}
              <strong className="ranking">1등</strong>
              <p>
                5<span className="total-number">/15명</span>
              </p>
            </S.Ranking>
            <S.RestaurantData>
              <strong className="name">오제제 강남점</strong>
              <p className="distance">120m</p>
              <div className="tags">
                <p># 양식</p>
                <p># 스테이크, 립</p>
              </div>
            </S.RestaurantData>
            <img src={toDetail} alt="more detail icon" />
          </S.RestaurantItem>
          <S.RestaurantItem>
            <S.Ranking>
              {/* <img src={winner} alt="winner icon" /> */}
              <strong className="ranking">1등</strong>
              <p>
                5<span className="total-number">/15명</span>
              </p>
            </S.Ranking>
            <S.RestaurantData>
              <strong className="name">오제제 강남점</strong>
              <p className="distance">120m</p>
              <div className="tags">
                <p># 양식</p>
                <p># 스테이크, 립</p>
              </div>
            </S.RestaurantData>
            <img src={toDetail} alt="more detail icon" />
          </S.RestaurantItem>
          <S.RestaurantItem>
            <S.Ranking>
              <strong className="ranking">1등</strong>
              <p>
                5<span className="total-number">/15명</span>
              </p>
            </S.Ranking>
            <S.RestaurantData>
              <strong className="name">오제제 강남점</strong>
              <p className="distance">120m</p>
              <div className="tags">
                <p># 양식</p>
                <p># 스테이크, 립</p>
              </div>
            </S.RestaurantData>
            <img src={toDetail} alt="more detail icon" />
          </S.RestaurantItem>
          {/* temp item */}
          <S.ButtonShare>
            <img src={shareResult} alt="share result icon" />
            공유하기
          </S.ButtonShare>
          <Button>다시하기</Button>
        </S.RestaurantList>
      </S.OverallRankingWrapper>
    </S.Wrapper>
  );
}
