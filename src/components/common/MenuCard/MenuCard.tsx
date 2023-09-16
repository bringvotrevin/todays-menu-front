import { useState } from 'react';
import * as S from './MenuCard.styled';
import retrybtn from '../../../assets/images/btn-retry.svg';
import splitCategory from 'util/splitCategory';

interface MenuCardProps {
  information: {
    title: string;
    category: string;
    link: string;
    distance: string;
  };
}

const MenuCard = (props: MenuCardProps) => {
  const { title, category, link, distance } = props.information;
  const categories = splitCategory(category);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <S.MenuList $isSelected={isSelected} onClick={() => setIsSelected(!isSelected)}>
      <div>
        <S.RestaurantName>{title}</S.RestaurantName>
        <S.RestaurantTagsUl>
          {categories.map((category, i) => (
            <S.RestaurantTag key={i}>{`# ${category}`}</S.RestaurantTag>
          ))}
        </S.RestaurantTagsUl>
        <S.RestaurantDistance>{`${distance}m | 주소어쩌고저쩌고 `}</S.RestaurantDistance>
      </div>
      <S.ButtonsDiv>
        <button>
          <img src={retrybtn} alt="retry-btn" />
        </button>
        <S.RestaurantDetail
          onClick={(event) => {
            event.stopPropagation();
            window.open(link);
          }}
        >
          음식점 보기
        </S.RestaurantDetail>
      </S.ButtonsDiv>
    </S.MenuList>
  );
};
export default MenuCard;
