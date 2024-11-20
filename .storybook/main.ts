import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-actions",
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
};
export default config;
