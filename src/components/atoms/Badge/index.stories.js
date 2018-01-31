// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';

import { ThemeProvider } from 'styled-components'
import MinhaOi from '../../../config/themes/MinhaOi'

import Grid from './../Grid'
import Title from './../Title'
import Text from './../Text'
import Badge from '.'


storiesOf('Atoms/Badge', module)
//adiciona um subitem no storybook.
.add('Uso Simples',
    withInfo({
        text: 'Rótulos ou contadores de notificações', 
    })(() =>
        <Badge themeColor='error' />
    )
)
.add('ThemeProvider',
    withInfo({
        text: 'Cores padrão quando se usa ThemeProvider', 
    })(() =>
        <ThemeProvider theme={ MinhaOi }>
            <div>
                <Badge themeColor="primary" />
                <Badge themeColor="secondary" />
                <Badge themeColor="success" />
                <Badge themeColor="error" />
                <Badge themeColor="warning" />
                <Badge themeColor="info" />
                <Badge themeColor="dark" />
                <Badge themeColor="light" />
                <Badge themeColor="link" />
            </div>
        </ThemeProvider>
    )
)