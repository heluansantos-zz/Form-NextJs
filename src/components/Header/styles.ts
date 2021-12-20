import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-left: 100px;
  padding-right: 100px;

  a {
    text-decoration: none;
  }

  span {
    color: rgba(0, 0, 0, 1);
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin: 5px;
  }

  @media (max-width: 1023px) {
    padding-left: 20px;
    padding-right: 20px;
    height: 80px;
  }
`

export const DivContainer = styled.div`
  min-width: 1100px;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1023px) {
    min-width: 100%;
    min-width: 100%;
  }
`

export const DivLogo = styled.div`
  width: 340px;
  height: 76px;
  display: flex;

  @media (max-width: 1023px) {
    max-width: 180px;
  }
`
export const DivMenu = styled.div`
  margin-top: 50px;
  height: 10px;
  min-width: 540px;
  display: flex;
  flex-direction: row;

  @media (max-width: 1023px) {
    display: none;
  }
`
export const MenuMobile = styled.div`
  display: none;

  @media (max-width: 1023px) {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    width: 80px;
    height: 80px;
    align-items: center;
  }
`

export const DivIcon = styled.div`
  margin-top: -22px;
  margin-left: 10px;
`
