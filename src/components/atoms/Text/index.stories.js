// Importar bibliotecas do react.
import React from 'react';
import {storiesOf} from '@storybook/react';

import {ThemeProvider} from 'styled-components';
import MinhaOi from '../../../containers/themes/MinhaOi';

import Title from './../Title';
import Text from './../Text';

storiesOf('Atoms/Text', module)

//adiciona um subitem no storybook.
  .add('Info', () => (
    <ThemeProvider theme={MinhaOi}>
      <div>
        <Title type={1} themeColor='primary'>Text</Title>
        <Text type='p'>Tags de Texto componentizadas</Text>

        <Text type='p' themeColor="error">Inserir aqui tabela de props</Text>
      </div>
    </ThemeProvider>
  ))

  .add('Use Case', () => (
    <ThemeProvider theme={MinhaOi}>
      <div>
        <Title type={2} themeColor='primary'>ThemeColor</Title>
        <Text>Cores aplicadas direto do tema</Text>

        <hr/>
        <Text themeColor='primary'>Primary</Text>
        <Text themeColor='secondary'>Secondary</Text>
        <Text themeColor='success'>Success</Text>
        <Text themeColor='error'>Error</Text>
        <Text themeColor='warning'>Warning</Text>
        <Text themeColor='info'>Info</Text>
        <Text themeColor='light'>Light</Text>
        <Text themeColor='dark'>Dark</Text>
        <Text themeColor='link'>Link</Text>
        <hr/>
        <pre>
                    <code>
{`<Text themeColor='primary'>Primary</Text>
<Text themeColor='secondary'>Secondary</Text>
<Text themeColor='success'>Success</Text>
<Text themeColor='error'>Error</Text>
<Text themeColor='warning'>Warning</Text>
<Text themeColor='info'>Info</Text>
<Text themeColor='light'>Light</Text>
<Text themeColor='dark'>Dark</Text>
<Text themeColor='link'>Link</Text>`}
                    </code>
                </pre>
        <hr/>
        <Title type={2} themeColor='primary'>Gradient</Title>
        <Text>Texto com efeito gradiente com número de cores ilimitado</Text>

        <Text
          fontSize={6}
          margin={0}
          gradient={{
            direction: '135deg',
            colors: ['#900ae9', '#D4006E', '#FFD900']
          }}>Acesse as funcionalidades da Minha Oi como 2ª via de conta, consulta de saldo e muito mais.</Text>

        <hr/>
        <pre>
                    <code>
{`<Text
gradient={{
    direction: '{direction_in_string_or_degree}',
    colors:  [{array_of_ilimited_hexa}]
}}>{your_text}</Text>`}
                    </code>
                </pre>
        <hr/>
        <Title type={2} themeColor='primary'>Type</Title>
        <Text>Elementos HTML diferentes para o Texto. (Inspecione o elemento)</Text>
        <hr/>
        <Text type='p'>Parágrafo</Text>
        <Text type='span'>Span</Text>
        <Text type='strong'>Strong</Text>
        <Text type='abbr' title="Texto de abreviação">ABBR</Text>
        <Text type='legend'>Legend</Text>
        <Text type='small'>Small</Text>
        <Text type='sub'>Sub</Text>
        <Text type='sup'>Sup</Text>
        <hr/>
        <pre>
                    <code>
{`<Text type='p'>Parágrafo</Text>
<Text type='span'>Span</Text>
<Text type='strong'>Strong</Text>
<Text type='abbr' title="Texto de abreviação">ABBR</Text>
<Text type='legend'>Legend</Text>
<Text type='small'>Small</Text>
<Text type='sub'>Sub</Text>
<Text type='sup'>Sup</Text>`}
                    </code>
                </pre>
      </div>
    </ThemeProvider>
  ));
