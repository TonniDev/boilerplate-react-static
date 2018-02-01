import React from 'react';
import {storiesOf, configure, addDecorator, setAddon} from '@storybook/react';
import infoAddon, {setDefaults} from '@storybook/addon-info';
import {setConsoleOptions} from '@storybook/addon-console';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {specs, describe, it} from 'storybook-addon-specifications';
import {mount} from 'enzyme';
import expect from 'expect';
import globalStyle from '../../src/components/styles/global-styles';

const store = storiesOf({}, module);
const req = require.context('../../src/components', true, /.stories.js$/);
setAddon(infoAddon);

function loadStories() {
  req.keys()
    .forEach(filename => req(filename));
}

addDecorator(story => (
  <Provider store={store}>
    <BrowserRouter>{story()}</BrowserRouter>
  </Provider>
));

setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true // Displays the source of story Component
});


configure(loadStories, module);
