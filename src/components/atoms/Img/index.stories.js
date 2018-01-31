// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import MinhaOi from '../../../config/themes/MinhaOi'

import Grid from './../Grid'
import Title from './../Title'
import Text from './../Text'

import AtLogoImg from './../../../assets/images/oi-logo-purple-degrade-1.svg'
import Img from '.'

storiesOf('Atoms/Img', module)

//adiciona um subitem no storybook.
.add('Info', () => (
    <ThemeProvider theme={ MinhaOi }>
        <Grid container>
            <Grid row margin={[50, 0]}>
                <Grid col sizes={[12, 12]}>
                    <Title type={1} themeColor='primary' >Img</Title>
                    <Text type='p'>Imagem componentizada.</Text>
                </Grid>
            </Grid>
            <Grid row>
                <Grid col sizes={[1, 12]}>
                <Text type='p' themeColor="error">Inserir aqui tabela de props</Text>
                </Grid>
                
            </Grid>
        </Grid>
    </ThemeProvider>
))

.add('Use Case', () => (
    <ThemeProvider theme={ MinhaOi }>
    <Grid container>
        <Grid row margin={[50, 0]}>
            <Grid col sizes={[12, 12]}>
                <Title type={2} themeColor='primary' >Thumb</Title>
                <Text>Imagem redimensionada para thumb</Text>
                <Grid row margin={[20, 0]}>
                        <Img src={AtLogoImg} thumb />
                </Grid>
            </Grid>
        </Grid>
        
        <Grid row>
            <Grid col themeColor="light" sizes={[1, 12]}>
                <pre>
                    <code>
{`<Img src={your_image_source_here} thumb />`}
                    </code>
                </pre>
            </Grid>
        </Grid>

        <Grid row margin={[50, 0]}>
            <Grid col sizes={[12, 12]}>
                <Title type={2} themeColor='primary' >Icon</Title>
                <Text>Imagem redimensionada para Icon</Text>
                <Grid row margin={[20, 0]}>
                    <Img src={AtLogoImg} icon />
                </Grid>
            </Grid>
        </Grid>
        
        <Grid row>
            <Grid col themeColor="light" sizes={[1, 12]}>
                <pre>
                    <code>
{`<Img src={your_image_source_here} icon />`}
                    </code>
                </pre>
            </Grid>
        </Grid>
    </Grid>
</ThemeProvider>
))