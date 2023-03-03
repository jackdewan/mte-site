import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button2";

const meta: Meta<typeof Button> = {
  title: "Ex/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: "Secondary",
  },
};
