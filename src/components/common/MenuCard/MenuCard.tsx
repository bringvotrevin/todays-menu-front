import React, { useState } from 'react';
import * as S from './MenuCard.styled';
import retrybtn from 'assets/icons/btn-retry.svg';
import icon_change from 'assets/icons/btn-change.svg';
import splitCategory from 'util/splitCategory';
import icon_link from 'assets/icons/btn-link.svg';

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

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    window.open(link);
  };

  return (
    <S.MenuList $isSelected={isSelected} onClick={handleCardClick}>
      <section>
        <S.TitleLayout onClick={handleLinkClick}>
          <S.RestaurantName>{title}</S.RestaurantName>
          <S.RestaurantLink src={icon_link} />
        </S.TitleLayout>
        <S.RestaurantTagsUl>
          {categories.map((category, i) => (
            <S.RestaurantTag key={i}>{`# ${category}`}</S.RestaurantTag>
          ))}
        </S.RestaurantTagsUl>
        <S.RestaurantDistance>{`${distance}m | 주소어쩌고저쩌고 `}</S.RestaurantDistance>
      </section>
      <S.ButtonsDiv>
        <button>
          <img src={icon_change} alt="retry-btn" />
        </button>
      </S.ButtonsDiv>
    </S.MenuList>
  );
};
export default MenuCard;
