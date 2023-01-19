/* eslint-disable react/no-array-index-key */
import TitleWrap from 'components/common/TItleWrap';
import Button from 'components/common/Button';
import HistoryText from 'components/common/HistoryText';
import { color } from 'shared/styles/theme';
import { useState } from 'react';
import * as S from './style';
import HistoryData from '../../data/HistoryData.json';

export default function History() {
  const [isBtnEvent, setBtnEvent] = useState([true, false, false]);

  const TabBarData = [
    {
      year: '2022',
      name: 'btnOne',
      set: [true, false, false],
    },
    {
      year: '2023',
      name: 'btnTwo',
      set: [false, true, false],
    },
    {
      year: '2024',
      name: 'btnThree',
      set: [false, false, true],
    },
  ];

  return (
    <S.History>
      <S.InnerFrame>
        <TitleWrap
          title="밤돌이로 연혁"
          desc={'밤돌이로의\n발자취를 만나보세요'}
        />
        <S.TabBar>
          {TabBarData.map((item, index) => {
            return (
              <>
                <Button
                  title={item.year}
                  color={isBtnEvent[index] ? color.gray04 : color.gray02}
                  onClick={() => setBtnEvent(item.set)}
                />
                {index === TabBarData.length - 1 ? '' : <S.WidthLine />}
              </>
            );
          })}
        </S.TabBar>
        <S.HistoryFrame>
          <S.HistoryTextFrame>
            {HistoryData.map((item, index) => {
              return (
                <HistoryText key={index} date={item.date} desc={item.cotent} />
              );
            })}
          </S.HistoryTextFrame>
          {/* 선 */}
          <S.HistoryLine>
            <S.Round />
            <S.HeightLine />
          </S.HistoryLine>
        </S.HistoryFrame>
      </S.InnerFrame>
    </S.History>
  );
}
