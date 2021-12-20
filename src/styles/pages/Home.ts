import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const Title = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 8px;
  margin-top: 50px;
  color: #000000;

  @media (max-width: 1023px) {
    align-self: start;
  }
`

export const SubTitle = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #000000;

  @media (max-width: 1023px) {
    align-self: start;
  }
`

export const SubContainer = styled.div`
  margin-bottom: 154px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  min-width: 1120px;

  @media (max-width: 1023px) {
    min-width: 100%;
    margin-bottom: 154px;
    padding-left: 30px;
    padding-right: 30px;
    justify-content: center;
    align-items: center;
  }
`

export const TitleCategory = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  margin-top: 40px;
  color: #000000;

  @media (max-width: 1023px) {
    align-self: start;
  }
`

export const DivInputsDoc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 740px;

  @media (max-width: 1023px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const DivInputsContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1120px;

  @media (max-width: 1023px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const DivInputsTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  @media (max-width: 1023px) {
    width: 360px;
  }
`
