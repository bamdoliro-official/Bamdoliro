import styled from 'styled-components';
import { color } from 'styles/theme';
import * as T from 'styles/text';

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 7.5px;
`;

export const ImgFrame = styled.div`
  height: 68.75%;
  width: 100%;
  padding: 16px;
  background-color: #ffffff;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  height: 31.25%;
  padding: 52px 24px;
  border-top: 2px solid #f0f0f0;
`;

export const Github = styled.a`
  cursor: pointer;
`;

export const InfoTitle = styled(T.BodyText)`
  color: ${color.gray04};
`;

export const InfoDate = styled(T.Caption)`
  color: ${color.gray02};
`;
