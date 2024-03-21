/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { LoginInfo } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LoginInfoUpdateFormInputValues = {
    email?: string;
    password?: string;
};
export declare type LoginInfoUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginInfoUpdateFormOverridesProps = {
    LoginInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoginInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: LoginInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    loginInfo?: LoginInfo;
    onSubmit?: (fields: LoginInfoUpdateFormInputValues) => LoginInfoUpdateFormInputValues;
    onSuccess?: (fields: LoginInfoUpdateFormInputValues) => void;
    onError?: (fields: LoginInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LoginInfoUpdateFormInputValues) => LoginInfoUpdateFormInputValues;
    onValidate?: LoginInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LoginInfoUpdateForm(props: LoginInfoUpdateFormProps): React.ReactElement;
