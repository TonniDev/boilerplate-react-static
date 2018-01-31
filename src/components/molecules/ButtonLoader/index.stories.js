// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { ThemeProvider } from 'styled-components'
import MinhaOi from '../../../config/themes/MinhaOi'
import Grid from './../../atoms/Grid'
import ButtonLoader from '.' 



storiesOf('Molecules/ButtonLoader', module)
.add('Uso Simples',
    withInfo({
        text: 'Rótulos ou contadores de notificações', 
    })(() =>
        <Grid className="container">
            <Grid className="row">
                <Grid className="col-md-4">
                <ButtonLoader tipoBotao="button" label="NOME DO BOTÃO"></ButtonLoader>
                </Grid>
            </Grid>
        </Grid>
        
    )
)
