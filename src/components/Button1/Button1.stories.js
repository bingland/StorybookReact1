import React from 'react'

import Button1 from './Button1'

// where your story goes in the story list
export default {
  title: 'Button1',
  component: Button1
}

// storybook creates 'template' of how args map to renderings
const Template = args => <Button1 {...args} />

export const FilledPrimary = Template.bind({})
FilledPrimary.args = {
  filled: true,
  colorType: 'green',
  label: 'Button'
}