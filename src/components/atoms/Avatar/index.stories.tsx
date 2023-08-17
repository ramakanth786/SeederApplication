import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from ".";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const PrimaryAvatar = Template.bind({});


PrimaryAvatar.args = {
  src: "\Images\SeederAvatar.svg",
  alt: "seederAvatar",
};

