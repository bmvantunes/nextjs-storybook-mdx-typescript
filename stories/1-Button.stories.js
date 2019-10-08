import { Button } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import React from 'react';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button variant="contained" color="primary" onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
