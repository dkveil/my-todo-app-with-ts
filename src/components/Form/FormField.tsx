import React from 'react';
import { Field, Input, Label, ErrorMsg} from './Form.styles'

type FormFieldTypes = {
    fieldtype: "text" | "textarea" | "date" | "select" | "checkbox";
    isLabel: boolean;
    labelText?: string;
    inputstyletype?: "checkbox-star";
    inputtype: string;
    inputname: string;
    inputvalue?: string | number | readonly string[];
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
};


const FormField = ({fieldtype, isLabel, labelText, inputstyletype, inputtype, inputname, inputvalue, onChangeHandler, error}: FormFieldTypes) => {

    const [isFocused, setIsFocused] = React.useState<boolean>(false)

    return (
        <Field
        fieldtype={fieldtype}
        error={Boolean(error)}
        active={isFocused}
        >
            <Input
                inputtype={inputstyletype}
                type={inputtype}
                name={inputname}
                onChange={onChangeHandler}
                value={inputvalue}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {isLabel && <Label error={Boolean(error)} active={isFocused}>{labelText}</Label>}
            {error && <ErrorMsg>{error}</ErrorMsg>}
        </Field>
    );
}

FormField.defaultProps = {
    isLabel: false
}

export default FormField;