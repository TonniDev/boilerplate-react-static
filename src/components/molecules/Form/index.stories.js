// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info' 

import { ThemeProvider } from 'styled-components'
import MinhaOi from '../../../config/themes/MinhaOi'

import Grid from './../../atoms/Grid'
import Title from './../../atoms/Title'
import Text from './../../atoms/Text'
import Form, {FormRadio, FormCheck, FormInput, FormSelect} from '.'

storiesOf('Molecules/Form', module)

//adiciona um subitem no storybook.
.add('Info', () => (
    
    <ThemeProvider theme={ MinhaOi }>
        <Grid container>
            <Grid row margin={[50, 0]}>
                <Grid col sizes={[12, 12]}>
                    <Title type={1} themeColor='primary' >Form</Title>
                    <Text type='p'>Itens de formulário componentizados.</Text>
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
                <Text>Componentes de formulário</Text>
                <Grid row margin={[20, 0]}>
                        <FormRadio
                            id='meu-id-unico1'
                            name="name-raio"
                            label='Alternando 1'
                            value="215762" />

                        <FormRadio
                            id='meu-id-unico2'
                            name="name-raio"
                            label='Nova escolha'
                            value="215762ddd" />

                            <FormCheck
                            id='meu-id-unico14'
                            name="name-raio-termos"
                            label='Aceito os termos'
                            value="215762" />

                            <FormInput
                            id='meu-id-unico-input1'
                            name="name-raio-input"
                            label='Digite aqui o CPF'
                            validationType='cpf'
                            placeholder="Digite aqui o CPF" />

                        <FormSelect
                            id='meu-id-unico-select1'
                            name="name-raio-select"
                            label='Escolha um produto'
                            options={[
                                {val: 1, name: 'Combo'},
                                {val: 2, name: 'TV HD'},
                                {val: 3, name: 'Celular'},
                                {val: 4, name: 'Internet'},
                                {val: 5, name: 'Fixo'}]} />
                            
                </Grid>
            </Grid>
        </Grid>
        
        <Grid row>
            <Grid col themeColor="" sizes={[1, 12]}>
                <pre>
                    <code>
{`<List type='ol'>{collection_of_elements}</List>
<List type='ul'>{collection_of_elements}</List>`}
                    </code>
                </pre>
            </Grid>
        </Grid>
    </Grid>
</ThemeProvider>
))