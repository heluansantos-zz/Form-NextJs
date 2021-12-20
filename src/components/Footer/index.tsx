import React from 'react'

import { Container, ButtonConfirm, DivContainer } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <DivContainer>
        <ButtonConfirm onClick={() => alert('In construction!')}>
          Continuar
        </ButtonConfirm>
      </DivContainer>
    </Container>
  )
}

export default Footer
