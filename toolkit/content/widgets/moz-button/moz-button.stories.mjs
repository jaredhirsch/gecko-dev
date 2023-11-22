/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { html } from "../vendor/lit.all.mjs";
// eslint-disable-next-line import/no-unassigned-import
import "./moz-button.mjs";

export default {
  title: "UI Widgets/Moz Button",
  component: "moz-button",
  argTypes: {
    type: {
      options: [
        "default",
        "primary",
        "destructive",
        "ghost",
        "icon",
        "icon ghost",
      ],
      control: { type: "select" },
    },
    l10nId: {
      options: [
        "moz-button-labelled",
        "moz-button-titled",
        "moz-button-aria-labelled",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["default", "small"],
      control: { type: "radio" },
    },
  },
  parameters: {
    actions: {
      handles: ["click"],
    },
    status: "in-development",
    fluent: `
moz-button-labelled = Button
moz-button-titled =
  .title = View logins
moz-button-aria-labelled =
  .aria-label = View logins
`,
  },
};

const Template = ({ type, size, l10nId, iconUrl, disabled }) => html`
  <style>
    moz-button[type~="icon"]::part(button) {
      background-image: url("${iconUrl}");
    }
  </style>
  <moz-button
    data-l10n-id=${l10nId}
    type=${type}
    size=${size}
    ?disabled=${disabled}
  ></moz-button>
`;

export const Default = Template.bind({});
Default.args = {
  type: "default",
  size: "default",
  l10nId: "moz-button-labelled",
  iconUrl: "chrome://global/skin/icons/more.svg",
  disabled: false,
};
export const Icon = Template.bind({});
Icon.args = {
  ...Default.args,
  type: "icon",
  l10nId: "moz-button-titled",
};
