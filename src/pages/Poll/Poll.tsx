import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AsyncBoundary from 'components/common/AsyncBoundary';
import * as S from './Poll.styled';
import { useGetRoom } from 'apis/query/useGetRoom';
import MenuCard from 'components/common/MenuCard/MenuCard';
import Button from 'components/common/Button/Button';
import Loading from 'pages/Loading/Loading';
import ShareBottomSheet from 'components/common/modal/ShareBottomSheet';
import icon_share from 'assets/icons/icon-share.svg';
import { roomIdData } from 'recoil/roomIdData';
import { useRecoilValue } from 'recoil';
import { useVoteMutation } from 'apis/query/useVoteMutation';

const PollWrapper = () => {
  return (
    <AsyncBoundary errorFallback={<>...error</>} suspenseFallback={<Loading message={'오늘의 메뉴 생성중'} />}>
      <Poll />
    </AsyncBoundary>
  );
};

const Poll = () => {
  const isSharedPage = useRecoilValue(roomIdData);
  const [isShareModalOn, setIsShareModalOn] = useState<boolean>(!!isSharedPage);
  const [clickedIndexArray, setClickedIndexArray] = useState<number[]>([]);
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id: roomId } = useParams();
  const { data } = useGetRoom(roomId);
  const { mutate, isLoading } = useVoteMutation();

  useEffect(() => {
    console.log(clickedIndexArray);
    // if (clickedIndexArray.length) {
    //   setButtonActive(true);
    // }
  }, [clickedIndexArray]);

  const onSuccessFn = () => {
    // navigate(`/random-menu/${roomId}/result`);
  };

  const handleSubmit = () => {
    if (clickedIndexArray && roomId) {
      mutate({ roomId, voteList: clickedIndexArray }, { onSuccess: onSuccessFn });
      navigate(`/random-menu/${roomId}/result`);
    }
  };

  const handleShareClick = () => {
    setIsShareModalOn(true);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsShareModalOn(false);
  };

  const handleClick = (restaurantId: number) => {
    setClickedIndexArray((prev) => {
      const updatedList = [...prev];
      const i = prev.findIndex((el) => el === restaurantId);
      if (i === -1) {
        updatedList.push(restaurantId);
      } else {
        updatedList.splice(i, 1);
      }
      if (updatedList.length) {
        setButtonActive(true);
      } else {
        setButtonActive(false);
      }
      return updatedList.sort((a, b) => a - b);
    });
  };

  return (
    <>
      {isLoading ? (
        <Loading message={'투표 결과 가져오는중'} />
      ) : (
        <S.Layout>
          <S.Title>오늘 당기는 메뉴는? 🤤</S.Title>
          <S.CardUl>
            {data?.data.restaurantResList.map((el: any, i: number) => (
              <MenuCard
                key={i}
                information={{
                  restaurantId: el.id,
                  index: i,
                  title: el.title,
                  category: el.category,
                  link: el.link,
                  distance: el.distance,
                  address: el.address,
                }}
                isPoll={true}
                handleClick={handleClick}
              ></MenuCard>
            ))}
          </S.CardUl>
          <S.ButtonLayout>
            <Button onClick={handleShareClick} $style={{ width: '25%' }}>
              <S.ShareImg src={icon_share} alt="공유하기 버튼" />
            </Button>
            <Button $variant={buttonActive ? 'orange' : 'gray'} onClick={handleSubmit} disabled={!buttonActive}>
              투표하고 결과보기
            </Button>
          </S.ButtonLayout>
        </S.Layout>
      )}
      {isShareModalOn && <ShareBottomSheet handleModalClose={handleModalClose} />}
    </>
  );
};

export default PollWrapper;
