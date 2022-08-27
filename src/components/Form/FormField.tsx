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

    return (
        <Field
        fieldtype={fieldtype}
        error={Boolean(error)}
        >
            <Input
                inputtype={inputstyletype}
                type={inputtype}
                name={inputname}
                onChange={onChangeHandler}
                value={inputvalue}
            />
            {isLabel && <Label error={Boolean(error)}>{labelText}</Label>}
            {error && <ErrorMsg>{error}</ErrorMsg>}
        </Field>
    );
}

FormField.defaultProps = {
    isLabel: false
}

export default FormField;