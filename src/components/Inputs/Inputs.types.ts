export interface InputsProps {
    /** The label for the input field */
    label: string;
    /** The placeholder text for the input field */
    placeholder: string;
    /** The change event handler */
    onChange?: (value: string) => void;
    /** The type of the input field */
    type: string;
    /** The validation function for the input field */
    validate?: (value: string) => string | null;
}
