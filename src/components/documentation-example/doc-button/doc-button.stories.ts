import { Meta, Story } from '@storybook/angular';
import { DocButtonComponent } from './doc-button.component';

export default {
  title: 'Addons/Docs/DocButton',
  component: DocButtonComponent,
} as Meta<DocButtonComponent>;

export const Basic: Story<DocButtonComponent> = (args) => ({
  props: args,
});
Basic.args = { label: 'Args test', isDisabled: false };
Basic.argTypes = {
  theDefaultValue: {
    table: {
      defaultValue: { summary: 'Basic default value' },
    },
  },
};

export const WithTemplate: Story<DocButtonComponent> = (args) => ({
  props: args,
  template: '<my-button [label]="label" [appearance]="appearance"></my-button>',
});
WithTemplate.args = { label: 'Template test', appearance: 'primary' };
