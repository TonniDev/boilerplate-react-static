// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import MinhaOi from '../../../config/themes/MinhaOi'


import Title from './../Title'
import Text from './../Text'

import Grid from '.'

storiesOf('Atoms/Grid', module)

//adiciona um subitem no storybook.
.add('Info', () => (
    <ThemeProvider theme={ MinhaOi }>
        <Grid className="container">
            <Grid className="row">
                <Grid className="col-12">
                    <Title type={1} themeColor='primary' >Grid</Title>
                    <Text type='p'>Componentes e opções para layout de páginas.</Text>
                </Grid>
            </Grid>
            <Grid className="row">
                <Grid className="col-12">
                    <Text type='p' themeColor="error">Inserir aqui tabela de props</Text>
                </Grid>
            </Grid>
        </Grid>
    </ThemeProvider>
))

.add('Use Case', () => (
    <ThemeProvider theme={ MinhaOi }>
    <Grid className="container">
        <Grid className="row">
            <Grid className="col-12">
                <Title type={2} themeColor='primary' >ThemeColor</Title>
                <Text>Cores aplicadas direto do tema</Text>
            </Grid>
        </Grid>

        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                <Grid className="row" >
                        <Grid className="col-4" themeColor="primary"><Text>Primary</Text></Grid>
                        <Grid className="col-4" themeColor="secondary"><Text>Secondary</Text></Grid>
                        <Grid className="col-4" themeColor="success"><Text>Success</Text></Grid>
                    </Grid>
                    <Grid className="row" >
                        <Grid className="col-4" themeColor="error"><Text>Error</Text></Grid>
                        <Grid className="col-4" themeColor="warning"><Text>Warning</Text></Grid>
                        <Grid className="col-4" themeColor="info"><Text>Info</Text></Grid>
                    </Grid>
                    <Grid className="row" >
                        <Grid className="col-4" themeColor="dark"><Text themeColor="light">Dark</Text></Grid>
                        <Grid className="col-4" themeColor="light"><Text>Light</Text></Grid>
                        <Grid className="col-4" themeColor="link"><Text>Link</Text></Grid>
                    </Grid>
            </Grid>
        </Grid>
        
        <Grid className="row">
            <Grid className="col-12" align="center" themeColor="light">
                <pre>
                    <code>
{`<Grid themeColor="primary" />
<Grid themeColor="secondary" />
<Grid themeColor="success" />
<Grid themeColor="error" />
<Grid themeColor="warning" />
<Grid themeColor="info" />
<Grid themeColor="dark" />
<Grid themeColor="light" />
<Grid themeColor="link" />
`}
                    </code>
                </pre>
            </Grid>
        </Grid>
    </Grid>
</ThemeProvider>
))