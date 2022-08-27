import React from 'react';
import { Field, Input, TextArea, Label, Select, Option, ErrorMsg} from './Form.styles'

type optionType = {
    name: string;
}


type FormFieldTypes = {
    fieldtype: "text" | "textarea" | "date" | "select" | "checkbox";
    isLabel: boolean;
    labeltype?: "textarea" | "checkbox";
    labelText?: string;
    inputstyletype?: "checkbox-star";
    inputtype: string;
    inputname: string;
    inputvalue?: string | number | readonly string[] ;
    inputchecked?: boolean;
    onChangeHandler: (
        e:
        React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement>
    ) => void;
    error?: string;
    options?: optionType[]
};


const FormField = ({fieldtype, isLabel, labelText, inputstyletype, inputtype, inputname, inputvalue, inputchecked, onChangeHandler, error, labeltype, options}: FormFieldTypes) => {

    const [isFocused, setIsFocused] = React.useState<boolean>(false)

    const input = () => {
        switch(fieldtype){
            case 'text':
                return (
                    <Input
                        inputtype={inputstyletype}
                        type={inputtype}
                        name={inputname}
                        onChange={onChangeHandler}
                        value={inputvalue}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                );
            case 'textarea':
                return (
                    <TextArea
                        name={inputname}
                        value={inputvalue}
                        onChange={onChangeHandler}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                );
            case 'select':
                return (
                    <Select
                        name={inputname}
                        value={inputvalue}
                        onChange={onChangeHandler}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    >
                        {options?.map((item) => (
                            <Option key={item.name} value={item.name}>
                                {item.name}
                            </Option>
                        ))}
                    </Select>
                );
            case 'date':
                return (
                    <Input
                        inputtype={inputstyletype}
                        name={inputname}
                        type={inputtype}
                        value={inputvalue}
                        onChange={onChangeHandler}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                );
            // case 'checkbox':
            //     return (
            //         <Input
            //             inputtype={inputstyletype}
            //             name={inputname}
            //             type={inputtype}
            //             checked={inputchecked}
            //             onChange={onChangeHandler}

            //         />
            //     )

            default:
                return null;
        }
    }

    return (
        <Field
        fieldtype={fieldtype}
        error={Boolean(error)}
        active={isFocused}
        >
            {input()}
            {isLabel && (
                <Label
                error={Boolean(error)}
                active={isFocused}
                labeltype={labeltype}
                >
                    {labelText}
                </Label>
                )}
            {error && <ErrorMsg>{error}</ErrorMsg>}
        </Field>
    );
}

FormField.defaultProps = {
    isLabel: false
}

export default FormField;