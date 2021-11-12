import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { nftFixture, NftListItem } from "./NftListItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/NftListItem",
  component: NftListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NftListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NftListItem> = (args) => (
  <NftListItem {...args} />
);

export const Unselected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unselected.args = nftFixture;

export const Selected = Template.bind({});
Selected.args = {
  ...nftFixture,
  selected: true,
};

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "NftListItem",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "NftListItem",
// };
