// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { ThemeProvider } from 'styled-components'
import MinhaOi from '../../../config/themes/MinhaOi'

import Grid from './../../atoms/Grid'
import Title from './../../atoms/Title'
import Text from './../../atoms/Text'
import Icon from './../../atoms/Icon'
import Button from './../../atoms/Button'

import Popover, {PopContent} from '.'

storiesOf('Molecules/Popover', module)
.add('Uso Simples',
    withInfo({
        text: 'Rótulos ou contadores de notificações', 
    })(() =>

    <Grid className="container">
        <Grid className="row">
            <Grid className="col-md-4">
            <Popover className="testando2">
                <button>Clique aqui</button>
                <PopContent><Text>O conteúdo do popover pode ser qualquer coisa</Text></PopContent>
            </Popover>
            </Grid>
            <Grid className="col-md-4">
            <Popover className="testando2">
                <Button>clique aqui</Button>
                <PopContent><Text>O conteúdo do popover pode ser qualquer coisa</Text></PopContent>
            </Popover>
            </Grid>
        </Grid>
    </Grid>

    )
)
