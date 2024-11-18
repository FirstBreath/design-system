import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Badge} from "./Badge.component";

export default {
    title: "Components/Badge",
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: {
            control: 'select',
            options: Object.values(Badge.Colors),
        },
        size: {
            control: 'select',
            options: Object.values(Badge.Sizes),
        },
        type: {
            control: 'select',
            options: Object.values(Badge.Types),
        },
    }
} as Meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: 'Badge',
        color: Badge.Colors.PRIMARY,
        size: Badge.Sizes.MEDIUM,
        type: Badge.Types.BADGE,
    },
};

export const All = (args: StoryObj) => {
    const colors = Object.values(Badge.Colors);
    const sizes = Object.values(Badge.Sizes);
    const types = Object.values(Badge.Types);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
        }}>
            {colors.map(color => (
                <div key={color} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '16px',
                }}>
                    {sizes.map(size => (
                        <div key={size} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                        }}>
                            {types.map(type => (
                                <Badge
                                    key={type}
                                    color={color}
                                    size={size}
                                    type={type}
                                >
                                    Badges
                                </Badge>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}