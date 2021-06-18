import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import Tabs1 from './Tabs1'

// where your story goes in the story list
export default {
  title: 'Tabs1',
  component: Tabs1,
  decorators: [withDesign]
}

// storybook creates 'template' of how args map to renderings
const Template = args => <Tabs1 {...args} />

export const BlackTabs = Template.bind({})
BlackTabs.args = {
  tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
  colorType: 'black'
}
BlackTabs.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ew4XdbdPViYsWSV8BIR5M1/Untitled?node-id=0%3A1'
  }
}

export const BlueTabs = Template.bind({})
BlueTabs.args = {
  tabs: ['Home', 'About Us', 'Contact'],
  colorType: 'blue'
}
BlueTabs.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ew4XdbdPViYsWSV8BIR5M1/Untitled?node-id=0%3A1'
  }
}

export const GreenTabs = Template.bind({})
GreenTabs.args = {
  tabs: ['Home', 'About Us', 'Contact'],
  colorType: 'green'
}
GreenTabs.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ew4XdbdPViYsWSV8BIR5M1/Untitled?node-id=0%3A1'
  }
}