// Importar bibliotecas do react.
import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {specs, describe, it} from 'storybook-addon-specifications';
import {mount} from 'enzyme';
import expect from 'expect';

import {ThemeProvider} from 'styled-components';
import {MinhaOi} from '../../../containers/themes';

import Title from './../../atoms/Title';
import Text from './../../atoms/Text';
import Form, {FormRadio, FormCheck, FormInput, FormSelect} from '.';

storiesOf('Molecules/Form', module)

//adiciona um subitem no storybook.
  .add('Info', withInfo('Texto simples com tema aplicado')(() => {
    const story = <ThemeProvider theme={MinhaOi}>
      <div>
        <Title type={1} themeColor='primary'>Form</Title>
        <Text type='p'>Itens de formulário componentizados.</Text>
        <Text type='p' themeColor="error">Inserir aqui tabela de props</Text>
      </div>
    </ThemeProvider>;

    specs(() => describe('Container', () => {
      it('Should have the first child as a <div></div>', () => {
        let output = mount(story);
        let elements = output.node.children[0].tagName;
        expect(elements)
          .toBe('DIV');
      });
    }));

    return story;
  }))

  .add('Use Case', () => (
    <ThemeProvider theme={MinhaOi}>
      <div>
        <Title type={2} themeColor='primary'>Type</Title>
        <Text>Componentes de formulário</Text>
        <hr/>
        <FormRadio
          id='meu-id-unico1'
          name="name-raio"
          label='Alternando 1'
          value="215762"/>

        <FormRadio
          id='meu-id-unico2'
          name="name-raio"
          label='Nova escolha'
          value="215762ddd"/>

        <FormCheck
          id='meu-id-unico14'
          name="name-raio-termos"
          label='Aceito os termos'
          value="215762"/>

        <FormInput
          id='meu-id-unico-input1'
          name="name-raio-input"
          label='Digite aqui o CPF'
          validationType='cpf'
          placeholder="Digite aqui o CPF"/>

        <FormSelect
          id='meu-id-unico-select1'
          name="name-raio-select"
          label='Escolha um produto'
          options={[
            {
              val: 1,
              name: 'Combo'
            },
            {
              val: 2,
              name: 'TV HD'
            },
            {
              val: 3,
              name: 'Celular'
            },
            {
              val: 4,
              name: 'Internet'
            },
            {
              val: 5,
              name: 'Fixo'
            }]}/>

        <hr/>
        <pre>
                    <code>
{`<List type='ol'>{collection_of_elements}</List>
<List type='ul'>{collection_of_elements}</List>`}
                    </code>
                </pre>
        <hr/>
      </div>
    </ThemeProvider>
  ));
