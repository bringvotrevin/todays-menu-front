import * as S from './MenuCard.styled';
import retrybtn from '../../../assets/images/btn-retry.svg';

export default function MenuCard() {
  const url = 'https://map.naver.com/p/entry/place/1274621934?lng=127.0298087&lat=37.4950692&placePath=%2Fhome&c=15.01,0,0,0,dh';
  return (
    <S.MenuList>
      <div>
        <S.RestaurantName>오제제 강남점</S.RestaurantName>
        <S.RestaurantTagsUl>
          <S.RestaurantTag># 양식</S.RestaurantTag>
          <S.RestaurantTag># 스테이크, 립</S.RestaurantTag>
        </S.RestaurantTagsUl>
        <S.RestaurantDistance>120m | 서울 강남대로 385</S.RestaurantDistance>
      </div>
      <S.ButtonsDiv>
        <button>
          <img src={retrybtn} alt="retry-btn" />
        </button>
        <S.RestaurantDetail
          onClick={() => {
            window.open(url);
          }}
        >
          음식점 보기
        </S.RestaurantDetail>
      </S.ButtonsDiv>
    </S.MenuList>
  );
}
