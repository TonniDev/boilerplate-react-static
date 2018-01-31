// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'    

import { ThemeProvider } from 'styled-components'
import MinhaOi from '../../../config/themes/MinhaOi'
import Grid from './../Grid'
import Button from '.'

storiesOf('Atoms/Button', module)

//adiciona um subitem no storybook.
.add('Uso simples',
withInfo({
    text: 'Rótulos ou contadores de notificações', 
})(() =>
<Grid className="container">
    <Grid className="row">
        <Grid className="col-md-4">
            <Button type="button">Teste botão primário</Button>
        </Grid>
        <Grid className="col-md-4">
            <Button type="outline">Teste botão secundário</Button>
        </Grid>
        <Grid className="col-md-4">
            <Button type="linkface">Teste botão linkface</Button>
        </Grid>
    </Grid>
</Grid>
    
))

.add('Disabled',
withInfo({
    text: 'Rótulos ou contadores de notificações', 
})(() =>
<Grid className="container">
    <Grid className="row">
        <Grid className="col-md-4">
            <Button disabled type="button">Teste botão primário</Button>
        </Grid>
        <Grid className="col-md-4">
            <Button disabled type="outline">Teste botão secundário</Button>
        </Grid>
        <Grid className="col-md-4">
            <Button disabled type="linkface">Teste botão linkface</Button>
        </Grid>
    </Grid>
</Grid>
    
))