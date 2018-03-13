import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configure, addDecorator, setAddon} from '@storybook/react';
import infoAddon, {setDefaults} from '@storybook/addon-info';
import Adapter from 'enzyme-adapter-react-16';
import {configure as EnzymeConfigure} from 'enzyme';
import '@storybook/addon-console';
import store from '../../src/store';
import './test';

import '../../src/config/styles/global-styles.less';

const req = require.context('../../src/components', true, /.story.js$/);
setAddon(infoAddon);

EnzymeConfigure({adapter: new Adapter()});

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
