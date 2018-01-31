// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import MinhaOi from '../../../config/themes/MinhaOi'

import Grid from './../Grid'
import Title from './../Title'
import Text from './../Text'
import Burger from '.'

storiesOf('Atoms/Burger', module)

//adiciona um subitem no storybook.
.add('Info', () => (
    <ThemeProvider theme={ MinhaOi }>
        <Grid className="container">
            <Grid className="row">
                <Grid className="col-12">
                    <Title type={1} themeColor='primary' >Burger</Title>
                    <Text type='p'>Alertas de novas notificações.</Text>
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
        <Grid className="row" >
            <Grid className="col-12" margin={[20, 0]}>
                <Burger themeColor="primary" />
                <Burger themeColor="secondary" />
                <Burger themeColor="success" />
                <Burger themeColor="error" />
                <Burger themeColor="warning" />
                <Burger themeColor="info" />
                <Burger themeColor="dark" />
                <Burger themeColor="light" />
                <Burger themeColor="link" />
            </Grid>
        </Grid>
        <Grid className="row">
            <Grid className="col-12" align="center" themeColor="light">
                <pre>
                    <code>
{`<Badge themeColor="primary" />
<Badge themeColor="secondary" />
<Badge themeColor="success" />
<Badge themeColor="error" />
<Badge themeColor="warning" />
<Badge themeColor="info" />
<Badge themeColor="dark" />
<Badge themeColor="light" />
<Badge themeColor="link" />`}
                    </code>
                </pre>
            </Grid>
        </Grid>

        <Grid className="row">
            <Grid className="col-12" margin={[50, 0, 0]}>
                <Title type={2} themeColor='primary' >Type</Title>
                <Text>Animações diferentes no Burger. Padrão: spin</Text>
            </Grid>
        </Grid>
        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                
                <Burger type="3dx"><Text type='span'>3dx</Text></Burger>
                <Burger type="3dy-r"><Text type='span'>3dy-r</Text></Burger>
                <Burger type="arrow"><Text type='span'>arrow</Text></Burger>
                <Burger type="arrow-r"><Text type='span'>arrow-r</Text></Burger>
                <Burger type="arrowalt"><Text type='span'>arrowalt</Text></Burger>
                <Burger type="arrowalt-r"><Text type='span'>arrowalt-r</Text></Burger>
                <Burger type="arrowturn"><Text type='span'>arrowturn</Text></Burger>
                <Burger type="arrowturn-r"><Text type='span'>arrowturn-r</Text></Burger>
                <Burger type="boring"><Text type='span'>boring</Text></Burger>
                <Burger type="collapse"><Text type='span'>collapse</Text></Burger>
                <Burger type="collapse-r"><Text type='span'>collapse-r</Text></Burger>
                <Burger type="elastic"><Text type='span'>elastic</Text></Burger>
                <Burger type="elastic-r"><Text type='span'>elastic-r</Text></Burger>
                <Burger type="emphatic"><Text type='span'>emphatic</Text></Burger>
                <Burger type="emphatic-r"><Text type='span'>emphatic-r</Text></Burger>
                <Burger type="minus"><Text type='span'>minus</Text></Burger>
                <Burger type="slider"><Text type='span'>slider</Text></Burger>
                <Burger type="slider-r"><Text type='span'>slider-r</Text></Burger>
                <Burger type="spin"><Text type='span'>spin</Text></Burger>
                <Burger type="spin-r"><Text type='span'>spin-r</Text></Burger>
                <Burger type="spring"><Text type='span'>spring</Text></Burger>
                <Burger type="spring-r"><Text type='span'>spring-r</Text></Burger>
                <Burger type="stand"><Text type='span'>stand</Text></Burger>
                <Burger type="stand-r"><Text type='span'>stand-r</Text></Burger>
                <Burger type="squeeze"><Text type='span'>squeeze</Text></Burger>
                <Burger type="vortex"><Text type='span'>vortex</Text></Burger>
                <Burger type="vortex-r"><Text type='span'>vortex-r</Text></Burger>
                
            </Grid>
        </Grid>
        <Grid className="row">
            <Grid className="col-12" align="center" themeColor="light">
                <pre>
                    <code>
{`<Burger type={type_of_burger} />`}
                    </code>
                </pre>
            </Grid>
        </Grid>
    </Grid>
</ThemeProvider>
))