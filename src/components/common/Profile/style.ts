import styled from "styled-components";
import * as T from '../../../shared/styles/text';

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    height: 412px;
    border-radius: 7.5px;
    overflow: hidden;
`

export const Image = styled.img`
`

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    height: 134px;
    padding: 18px 18px 12px;
    background-color: #F8F9FA;
`

export const Name = styled(T.SubTitle)`
    color: ${ ({ theme }) => theme.color.gray04 };
`

export const Part = styled(T.Caption)`
    margin-top: 12px;
    color: ${ ({ theme }) => theme.color.gray02 };
`

export const GitHubURL = styled.a`
    margin-top: auto;
    align-self: flex-end;
`

export const GitHubURLContent = styled(T.Caption)`
    display: flex;
    column-gap: 4px;
    align-items: center;
    color: ${ ({ theme }) => theme.color.gray03 };
`