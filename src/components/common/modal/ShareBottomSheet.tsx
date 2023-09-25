import React, { useState } from 'react';
import * as S from './ShareBottomSheet.styled';
import shareViaKakaoImg from 'assets/icons/icon-kakaotalk.svg';
import shareViaLinkImg from 'assets/icons/icon-share-link.svg';

declare global {
  interface Window {
    Kakao: any;
  }
}

type Props = {
  handleModalClose: React.MouseEventHandler<HTMLDivElement>;
};

export default function ShareBottomSheet(props: Props) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const urlToCopy: string = window.location.href;

  const handleCopyClick = async (): Promise<void> => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(urlToCopy);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = urlToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 메뉴',
        description: '메뉴 추천받고 오늘 당기는 음식을 골라봐요',
        imageUrl:
          'https://lh3.googleusercontent.com/fife/AK0iWDzyPpMYt3ZHs29TS2fkLB10TQAgyvsjH9Y_YGKRCgJPU_3GRZRtdD2w9SswlvraHqij-aUIShmFziSBUrSSeBojzPqiP9JyXFKDibsg-FoIsLPb0PApPpLVLqHcjzmvM8ETqZzsX4SvyJxJ8giAMJtPC9-MZKFusaxfEA9yW9SeOOLyAkrKZevPIgY7u9dvfKkRxXRpvJakW3j8geFM0_svAX2_uvZQbq-0saUWHsC60WKKz-fP2QSLCuXbvgB0h572_Fa_4vTkqbE_omJSU0cUStSrR1lCsQqqOKVpFeG2jM9bg8kDUH46UpeAKr7rUwen3cTJ_fZLxM1YjnUOKZ0G2qTh9cO0dwPCbGf3yhO9xpzrf5ZUWWZ8cNigWO3yzAQYAvMLZrvBi4496BeV7aKqlWwiFJKJfk2meCcXIlVgfZvq9XxmGue_973CS9wDs4PhTAE9m0W4Jf772ktxNP0pJAbPW2YA7IAyaqA1-ugb_n7iOA9XFAGotunoTuVOGBe9VkIZrK1QMB4Ohis-tqZLoS0SQxHTVs6ymj02ign-QPUhiuYGmTceijn9ehggLlCTF_ZjWbifmWQqC60OkrLNAcnYWcob03meJY_X7MSIXUqNIf0wpjM7nl6m6cGPRlYCwazQTfu6v5uyeV6f3ZdHAVP49xDeFNVEnd5i2gBAsTtbY8brrp0mxFVL-uWIyqk00bpGYWDFSwcUOj2pv2jvC1PEbyINvLBsDCIZMQfMCL-5Tj7wJyraZWSa-SAvbOnf3DellZbbM8Rs8s7CjOlsvKMMeT9xEY18caZG1lKBn11ooxvPzXzIjn7TYC9hgaQxrB8GVq1lTUvoKXHD3y7zEev50P7cortqtzyjJPwOFjwTWnYlD4uWbmnq6syY90YbVme3RO4qsu1IPnwSvAcOnGGSI3yJe-SqXiGN-xl2w2b9bHkAmnBid467s0_--sWiCpQkSFuC49SgZQWGmqV2KeVsiaFgf9oGdi-4AYZY0YTH_yH8yYpczakcO0CBt_70uRmXaxHKAZs4-dGPv009uC0NMCQRdUmA1i1dcG9OeBXl9oRBDAy7-ebkvA-bQjziWJEzyDAt38gNX1T7pfqqJ-nNtZphbB48Av9Bml23NejKfgi2sjtTQJEKJtnk_rS3UqN0tmCK5wIT83nxRmGQP7_Wma2ztXR-ALqUy45SygqKj6Xw89tymsFvbVvOhxhg9xmGIubbaxeteEb5JH87a8Yv8hj-RXJrx4cgaBC1TyEQ9IiksuaFCbokOTaz7z4EvB20mGFWStoh9XuE03RWSF_-5MWHQz1AfObDTqkFO5GpmDKrvImKo--iispLYpmTl8x1hkHK30ew7QymT3pfiBoram6Mj5fhqpn-Gv4mmbis_ObECGZDTbL-e4jsPNvr9uP7gpQPvOlJ67D85y3R3HFXod40wTdUmKXZ7jhyFUDTTIvKPsNQJfcQUoTEuUc_6K5oGYT-z5A0hVH29cvbWSUyiJTlGediHBRBg895GjX_vGGTv4O3drj-XJbo0xOVCsVYqslz-GBHymkB=w2782-h1580',
        link: {
          mobileWebUrl: `${urlToCopy}`,
          webUrl: `${urlToCopy}`,
        },
      },
      buttons: [
        {
          title: '오늘의 메뉴 확인하러 가기',
          link: {
            mobileWebUrl: `${urlToCopy}`,
            webUrl: `${urlToCopy}`,
          },
        },
      ],
    });
  };

  return (
    <S.ShareBottomSheet handleModalClose={props.handleModalClose}>
      <ul>
        <li className="shareViaKaKao">
          <button type="button" onClick={shareKakao}>
            <img src={shareViaKakaoImg} alt="share via kakaotalk icon" />
            <p>카카오톡으로 공유하기</p>
          </button>
        </li>
        <span className="line" />
        <li className="shareViaLink">
          <button type="button" onClick={handleCopyClick}>
            <img src={shareViaLinkImg} alt="share via link icon" />
            <p>링크 복사하기</p>
          </button>
        </li>
        {isCopied && <S.CopiedModal>링크가 복사되었습니다!</S.CopiedModal>}
      </ul>
    </S.ShareBottomSheet>
  );
}
