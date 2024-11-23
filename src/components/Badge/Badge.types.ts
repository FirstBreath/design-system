import React from "react";

export enum BadgeTypes {
    BADGE = "badge",
    PILL = "pill",
}

export enum BadgeSizes {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

export enum BadgeColors {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    DANGER = "danger",
}

export interface BadgeProps {
    /** The content of the badge */
    children: React.ReactNode | string;
    /** The type of the badge */
    type?: BadgeTypes;
    /** The color of the badge */
    size?: BadgeSizes;
    /** The size of the badge */
    color?: BadgeColors;
}
