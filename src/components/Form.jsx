import React from 'react'
import { Button, FormContainer, Input, Label } from '../styles/Form'

const Form = () => {
  return (
    <FormContainer>
        <Label>Titulo</Label>
        <Input name='titulo' />
        <Label>Autor(a)</Label>
        <Input name='autor'/>
        <Label>Editora</Label>
        <Input name='editora'/>
        <Button type='submit'>Adicionar</Button>
    </FormContainer>
  )
}

export default Form
