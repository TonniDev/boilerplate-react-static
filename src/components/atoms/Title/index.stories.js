// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from 'styled-components'
import {MinhaOi} from '../../../containers/themes'
import Title from './../Title'

storiesOf('Atoms/Title', module)
.add('Uso simples',
    withInfo({
        text: 'Componente dos elementos de título HTML (h1 ao h6).',
    })(() =>
        <Title type={1}>Título de exemplo</Title>
    )
)
.add('ThemeProvider',
withInfo({
    text: 'Cores aplicadas direto do tema.',
})(() =>
<ThemeProvider theme={ MinhaOi }>
    <div>
        <Title themeColor='primary'>Primary</Title>
        <Title themeColor='secondary'>Secondary</Title>
        <Title themeColor='success'>Success</Title>
        <Title themeColor='error'>Error</Title>
        <Title themeColor='warning'>Warning</Title>
        <Title themeColor='info'>Info</Title>
        <Title themeColor='light'>Light</Title>
        <Title themeColor='dark'>Dark</Title>
        <Title themeColor='link'>Link</Title>
        <Title themeColor='black'>Black</Title>
        <Title themeColor='white'>White</Title>
    </div>
</ThemeProvider>
)
)
.add('FontSize',
withInfo({
    text: 'Todos os tamanhos de título disponíveis no StyleGuide. Todos estes tamanhos podem ser aplicados do h1 ao h6.',
})(() =>

    <div>
        <Title fontSize={-2}>Título -2 (12px)</Title>
        <Title fontSize={-1}>Título -1 (14px)</Title>
        <Title fontSize={1}>Título 1 (16px)</Title>
        <Title fontSize={2}>Título 2 (18px)</Title>
        <Title fontSize={3}>Título 3 (24px)</Title>
        <Title fontSize={4}>Título 4 (30px)</Title>
        <Title fontSize={5}>Título 5 (40px)</Title>
        <Title fontSize={6}>Título 6 (54px)</Title>
    </div>
)
)
.add('FontWeight',
withInfo({
    text: 'Todos as espessuras de fonte.',
})(() =>

    <div>
        <Title fontWeight={'Light'}>Título Light</Title>
        <Title fontWeight={'Regular'}>Título Regular</Title>
        <Title fontWeight={'Medium'}>Título Medium</Title>
        <Title fontWeight={'Bold'}>Título Bold</Title>
    </div>
)
)
.add('Gradiente',
    withInfo({
        text: 'Componente de título com cores em gradiente.',
    })(() =>
        <Title
        gradient={{
            direction: '135deg',
            colors:  ['#900ae9', '#D4006E', '#FFD900']
        }}>Acesse as funcionalidades da Minha Oi como 2ª via de conta, consulta de saldo e muito mais.
        </Title>
    )
)

