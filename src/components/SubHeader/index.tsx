import React from 'react'

import BackIcon from '../../assets/ArrowLeft.svg'

import {
  Container,
  ButtonBack,
  DivBackTitle,
  Title,
  DivContainer
} from './styles'

const SubHeader: React.FC = () => {
  return (
    <Container>
      <DivContainer>
        <ButtonBack>
          <BackIcon />
        </ButtonBack>

        <DivBackTitle>
          <Title>Adesão a um tarifário</Title>
        </DivBackTitle>
      </DivContainer>
    </Container>
  )
}

export default SubHeader
