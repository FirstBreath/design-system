/**
 * Props for the SliderIndicator component
 */
export interface SliderIndicatorProps {
    /** The number of dots to display */
    length: number;
    /** The index of the currently active dot */
    activeIndex: number;
    /** The function to call when a dot is clicked */
    onClick?: (index: number) => void;
}