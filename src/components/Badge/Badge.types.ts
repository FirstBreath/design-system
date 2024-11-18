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
    children: React.ReactNode | string;
    type?: BadgeTypes;
    size?: BadgeSizes;
    color?: BadgeColors;
}
