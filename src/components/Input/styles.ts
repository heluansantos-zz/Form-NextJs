import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: left;
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

export const TextInput = styled.input`
  background: #efeff1;
  padding: 10px;
  height: 48px;
  border-radius: 4px;
  border: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #404149;

  @media (max-width: 768px) {
    max-width: 360px;
    justify-content: center;
    align-items: center;
  }
`
export const InputSelect = styled.select`
  background: #efeff1;
  padding: 10px;
  height: 48px;
  border-radius: 4px;
  border: none;
  min-width: 360px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #404149;

  @media (max-width: 768px) {
    max-width: 360px;
    justify-content: center;
    align-items: center;
  }
`

export const Title = styled.span`
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;

  color: #404149;
`

export const ErrorTitle = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  margin-top: 20px;
  color: #d52b1e;
`
