import styled from "styled-components";

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Label = styled.label`
    position: absolute;
    top: -8px;
    left: 12px;
    background: ${({theme}) => theme.colors.background};
    padding: 0 4px;
    font-size: ${({theme}) => theme.typographies.p.fontSize};
    font-family: ${({theme}) => theme.typographies.p.fontFamily};
    font-weight: ${({theme}) => theme.typographies.p.fontWeight};
    transition: 0.3s;
    color: ${({theme}) => theme.colors.textPrimary};
`;

export const Input = styled.input<{ isError?: boolean, isSuccess?: boolean }>`
    padding: 16px 8px 8px 8px;
    color: ${({theme}) => theme.colors.textSecondary};
    font-family: ${({theme}) => theme.typographies.p.fontFamily};
    font-weight: ${({theme}) => theme.typographies.p.fontWeight};
    font-size: ${({theme}) => theme.typographies.p.fontSize};
    background: none;
    border: 1px solid ${({theme}) => theme.colors.border};
    border-radius: ${({theme}) => theme.borderRadius};
    outline: none;
    box-shadow: ${({theme}) => theme.shadows.default};

    &:focus {
        border-color: ${({theme, isSuccess, isError}) => {
            if (isSuccess) {
                return theme.colors.success;
            } else if (isError) {
                return theme.colors.error;
            } else {
                return theme.colors.primary;
            }
        }
        };
`;