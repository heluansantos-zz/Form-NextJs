import React from 'react'

import { Container, TextInput, Title, InputSelect, ErrorTitle } from './styles'

export interface Props {
  title: string
  placeholder: string
  type?: string
  dimension?: boolean
}

const Input: React.FC<Props> = ({
  title,
  placeholder,
  type,
  dimension
}: Props) => {
  if (type === 'select') {
    return (
      <Container>
        <Title>{title}</Title>
        <InputSelect>
          <option value="volvo">{placeholder}</option>
        </InputSelect>
      </Container>
    )
  }
  return (
    <Container>
      <Title>{title}</Title>
      <TextInput
        placeholder={placeholder}
        style={dimension ? { width: 740 } : { width: 360 }}
        type={type}
      />
      {type === 'nif' && (
        <ErrorTitle>
          NIF inválido. Por favor introduza um NIF válido com 9 dígitos.
        </ErrorTitle>
      )}
    </Container>
  )
}

export default Input
