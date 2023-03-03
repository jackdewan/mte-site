import React from "react";

import { Header } from "./Header";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "mine/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    logo: "./mte2.png",
    backgroundColor: "primary",
  },
};

export const Alternative: Story = {
  args: {
    logo: "./mte2.png",
    backgroundColor: "midnight",
  },
};
