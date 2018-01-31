// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'  

import { ThemeProvider } from 'styled-components'
import MinhaOi from '../../../config/themes/MinhaOi'

import Grid from './../Grid'
import Title from './../Title'
import Text from './../Text'
import Link from '.'

storiesOf('Atoms/Link', module)

//adiciona um subitem no storybook.
.add('Uso simples',
withInfo({
    text: 'Âncoras de redirecionamento', 
})(() =>
<Grid className="container">
    <Grid className="row">
        <Grid className="col-md-4">
            <Link>Teste de Link</Link>
        </Grid>
        <Grid className="col-md-4">
            <Link>Olá, eu sou um link</Link>
        </Grid>
    </Grid>
</Grid>
    
))
