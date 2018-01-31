// Importar bibliotecas do react.
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { ThemeProvider } from 'styled-components'
import MinhaOi from '../../../config/themes/MinhaOi'

import Grid from './../../atoms/Grid'
import Title from './../../atoms/Title'
import Text from './../../atoms/Text'
import Tab, {TabItem} from '.'

storiesOf('Organisms/Tab', module)
.add('Uso Simples',
withInfo({
    text: 'Rótulos ou contadores de notificações', 
})(() =>

<ThemeProvider theme={ MinhaOi }>
<Grid className="container">
    <Grid row margin={[50, 0]}>
        <Grid col sizes={[12, 12]}>
            
            <Grid row margin={[20, 0]}>
            <Tab>
                <TabItem label="Início">
                    <Text>Conteúdo de inicio</Text>
                </TabItem>
                <TabItem label="Conta">
                    <Text>Conteúdo de conta!</Text>
                </TabItem>
                <TabItem label="Assista e navegue">
                    <Text>Conteúdo de Assista e navegue!</Text>
                </TabItem>
                <TabItem label="Atendimento">
                    <Text>Conteúdo de Atendimento!</Text>
                </TabItem>
            </Tab>
            </Grid>
        </Grid>
    </Grid>
    
</Grid>
</ThemeProvider>

)
)
