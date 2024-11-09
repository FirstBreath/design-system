import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import FirstBreath from "./FirstBreath";

addons.setConfig({
    theme: FirstBreath,
});