export interface InputsProps {
    label: string;
    placeholder: string;
    onChange?: (value: string) => void;
    validate?: (value: string) => string | null;
}
