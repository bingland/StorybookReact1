import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import Switch1 from './Switch1'

// where your story goes in the story list
export default {
  title: 'Switch1',
  component: Switch1,
  decorators: [withDesign]
}

// storybook creates 'template' of how args map to renderings
const Template = args => <Switch1 {...args} />

export const SwitchPrimary = Template.bind({})
SwitchPrimary.args = {
  on: true,
  colorType: 'green',
}
SwitchPrimary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ew4XdbdPViYsWSV8BIR5M1/Untitled?node-id=0%3A1'
  }
}