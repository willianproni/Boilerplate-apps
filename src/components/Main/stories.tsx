import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main', //Titulo do component
  component: Main, //Importando o componente
  parameters: {
    //Parâmetros
    layout: 'fullscreen'
  }
} as Meta //funciona como meta data

export const Default: StoryObj = {} //Criando uma story
