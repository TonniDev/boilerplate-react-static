import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setConsoleOptions } from '@storybook/addon-console';

function loadStories() {
    require('../stories');
}

setDefaults({
    header: true, // Toggles display of header with component name and description
    inline: true, // Displays info inline vs click button to view
    source: true // Displays the source of story Component
});


configure(loadStories, module);