import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-height: 120px;
  padding-left: 100px;
  padding-right: 100px;
  background: linear-gradient(91.82deg, #35363e 27.66%, #d52b1e 86.25%);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-direction: row;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    min-height: 80px;
  }
`

export const DivContainer = styled.div`
  min-width: 1100px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`

export const ButtonBack = styled.button`
  margin-top: 30px;
  background: transparent;
  border: none;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`

export const DivBackTitle = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`

export const Title = styled.span`
  font-family: Roboto;
  margin-left: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #ffffff;
`
