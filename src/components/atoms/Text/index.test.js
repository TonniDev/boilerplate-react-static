import React from 'react';
import {mount} from 'enzyme';
import {Text} from './index';

export const tests = describe('Text', () => {
  it('should have the text "Sample text.', () => {
    const output = mount(<Text>Sample text.</Text>);
    expect(output.text()).toContain('Sample text.');
  });
});
