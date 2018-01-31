// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info' 

import { ThemeProvider } from 'styled-components'
import MinhaOi from '../../../config/themes/MinhaOi'

import Grid from './../../atoms/Grid'
import Title from './../../atoms/Title'
import Text from './../../atoms/Text'
import Accordion from '.'

storiesOf('Molecules/Accordion', module)

.add('Uso simples',
withInfo({
    text: 'Aplicação da cor do tema para a seta do Accordion', 
})(() =>
<ThemeProvider theme={ MinhaOi }>
    <Grid className="container-fluid">
        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                <Accordion name="accor-1" themeColor="primary">
                    <div title="Primary Accordion" >
                        <Title type={4}>Primary Accordion</Title>
                        <Text>Você pode passar qualquer componente dentro desta div</Text>
                    </div>
                </Accordion>
            </Grid>
        </Grid>
        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                <Accordion name="accor-2" themeColor="secondary">
                    <div title="Secondary Accordion" >
                        <Title type={4}>Title Accordion</Title>
                        <Text>Você pode passar qualquer componente dentro desta div</Text>
                    </div>
                </Accordion>
            </Grid>
        </Grid>
        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                <Accordion name="accor-3" themeColor="success">
                    <div title="Success Accordion" >
                        <Title type={4}>Title Accordion</Title>
                        <Text>Você pode passar qualquer componente dentro desta div</Text>
                    </div>
                </Accordion>
            </Grid>
        </Grid>
        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                <Accordion name="accor-4" themeColor="error">
                    <div title="Error Accordion" >
                        <Title type={4}>Title Accordion</Title>
                        <Text>Você pode passar qualquer componente dentro desta div</Text>
                    </div>
                </Accordion>
            </Grid>
        </Grid>
        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                <Accordion name="accor-5" themeColor="warning">
                    <div title="Warning Accordion" >
                        <Title type={4}>Title Accordion</Title>
                        <Text>Você pode passar qualquer componente dentro desta div</Text>
                    </div>
                </Accordion>
            </Grid>
        </Grid>
        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                <Accordion name="accor-6" themeColor="warning">
                    <div title="Warning Accordion" >
                        <Title type={4}>Title Accordion</Title>
                        <Text>Você pode passar qualquer componente dentro desta div</Text>
                    </div>
                </Accordion>
            </Grid>
        </Grid>
        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                <Accordion name="accor-7" themeColor="light">
                    <div title="Light Accordion" >
                        <Title type={4}>Title Accordion</Title>
                        <Text>Você pode passar qualquer componente dentro desta div</Text>
                    </div>
                </Accordion>
            </Grid>
        </Grid>
        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                <Accordion name="accor-8" themeColor="dark">
                    <div title="Dark Accordion" >
                        <Title type={4}>Title Accordion</Title>
                        <Text>Você pode passar qualquer componente dentro desta div</Text>
                    </div>
                </Accordion>
            </Grid>
        </Grid>
        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                <Accordion name="accor-9" themeColor="link">
                    <div title="Link Accordion" >
                        <Title type={4}>Title Accordion</Title>
                        <Text>Você pode passar qualquer componente dentro desta div</Text>
                    </div>
                </Accordion>
            </Grid>
        </Grid>
    </Grid>
</ThemeProvider>
    
)
)

.add('ThemeHeader',
withInfo({
    text: 'Aplicação da cor do tema para o header do Accordion', 
})(() =>
<ThemeProvider theme={ MinhaOi }>
    <Grid className="container">
        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                <Accordion name="accor-1" themeHeader themeColor="primary">
                    <div title="Primary Accordion" >
                        <Title type={4}>Primary Accordion</Title>
                        <Text>Você pode passar qualquer componente dentro desta div</Text>
                    </div>
                </Accordion>
            </Grid>
        </Grid>
    </Grid>
</ThemeProvider>
    
)
)

.add('Toggle',
withInfo({
    text: 'Alternar entre os conteúdos do Accordion', 
})(() =>
<ThemeProvider theme={ MinhaOi }>
    <Grid className="container">
        <Grid className="row">
            <Grid className="col-12" margin={[20, 0]}>
                <Accordion name="accor-1" toggle themeColor="primary">
                    <div title="Primary Accordion" >
                        <Title type={4}>Primary Accordion</Title>
                        <Text>Você pode passar qualquer componente dentro desta div</Text>
                    </div>
                    <div title="Primary Accordion" >
                        <Title type={4}>Primary Accordion</Title>
                        <Text>Você pode passar qualquer componente dentro desta div</Text>
                    </div>
                </Accordion>
            </Grid>
        </Grid>
    </Grid>
</ThemeProvider>
    
)
)
//adiciona um subitem no storybook.
