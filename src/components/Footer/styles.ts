import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-height: 96px;
  padding-left: 100px;
  padding-right: 100px;
  background: #fff;
  border-top: 1px solid #e6e6e6;
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  align-items: center;

  span {
    font-family: Roboto;
    margin-left: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
    justify-content: center;
  }
`

export const DivContainer = styled.div`
  min-width: 1120px;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
    min-width: 100%;
    max-width: 100%;
  }
`

export const ButtonConfirm = styled.button`
  width: 159px;
  height: 48px;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  background: #000;

  &:hover {
    background: #505050;
  }

  @media (max-width: 768px) {
    width: 360px;
  }
`
