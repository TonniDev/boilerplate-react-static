// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import MinhaOi from '../../../config/themes/MinhaOi'

import Grid from './../Grid'
import Title from './../Title'
import Text from './../Text'
import List from '.'

storiesOf('Atoms/List', module)

//adiciona um subitem no storybook.
.add('Info', () => (
    <ThemeProvider theme={ MinhaOi }>
        <Grid container>
            <Grid row margin={[50, 0]}>
                <Grid col sizes={[12, 12]}>
                    <Title type={1} themeColor='primary' >List</Title>
                    <Text type='p'>Listas dispõem uma coleção de elementos, ordenada ou desordenadamente.</Text>
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
                <Title type={2} themeColor='primary' >Type</Title>
                <Text>Listas ordenadas e desordenadas (ul e ol)</Text>
                <Grid row margin={[20, 0]}>
                        <List type='ol'>
                            <Text themeColor='primary'>Primary</Text>
                            <Text themeColor='secondary'>Secondary</Text>
                            <Text themeColor='success'>Success</Text>
                            <Text themeColor='error'>Error</Text>
                            <Text themeColor='warning'>Warning</Text>
                            <Text themeColor='info'>Info</Text>
                            <Text themeColor='light'>Light</Text>
                            <Text themeColor='dark'>Dark</Text>
                        </List>
                        <List type='ul'>
                            <Text themeColor='primary'>Primary</Text>
                            <Text themeColor='secondary'>Secondary</Text>
                            <Text themeColor='success'>Success</Text>
                            <Text themeColor='error'>Error</Text>
                            <Text themeColor='warning'>Warning</Text>
                            <Text themeColor='info'>Info</Text>
                            <Text themeColor='light'>Light</Text>
                            <Text themeColor='dark'>Dark</Text>
                        </List>
                </Grid>
            </Grid>
        </Grid>
        
        <Grid row>
            <Grid col themeColor="light" sizes={[1, 12]}>
                <pre>
                    <code>
{`<List type='ol'>{collection_of_elements}</List>
<List type='ul'>{collection_of_elements}</List>`}
                    </code>
                </pre>
            </Grid>
        </Grid>

        <Grid row margin={[50, 0]}>
            <Grid col sizes={[12, 12]}>
                <Title type={2} themeColor='primary' >Direction</Title>
                <Text>Disposição dos elementos (horizontal ou vertical)</Text>
                <Grid row margin={[20, 0]}>
                    <List direction='vertical'>
                    <Text themeColor='primary'>Primary</Text>
                    <Text themeColor='secondary'>Secondary</Text>
                    <Text themeColor='success'>Success</Text>
                    <Text themeColor='error'>Error</Text>
                    <Text themeColor='warning'>Warning</Text>
                    <Text themeColor='info'>Info</Text>
                    <Text themeColor='light'>Light</Text>
                    <Text themeColor='dark'>Dark</Text>
                </List>
                <List direction='horizontal'>
                    <Text themeColor='primary'>Primary</Text>
                    <Text themeColor='secondary'>Secondary</Text>
                    <Text themeColor='success'>Success</Text>
                    <Text themeColor='error'>Error</Text>
                    <Text themeColor='warning'>Warning</Text>
                    <Text themeColor='info'>Info</Text>
                    <Text themeColor='light'>Light</Text>
                    <Text themeColor='dark'>Dark</Text>
                </List>
                        
                </Grid>
            </Grid>
        </Grid>
        
        <Grid row>
            <Grid col themeColor="light" sizes={[1, 12]}>
                <pre>
                    <code>
{`<List direction='vertical'>{collection_of_elements}</List>
<List direction='horizontal'>{collection_of_elements}</List>`}
                    </code>
                </pre>
            </Grid>
        </Grid>
    </Grid>
</ThemeProvider>
))