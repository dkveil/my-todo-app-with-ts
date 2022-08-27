import { Field, Input, Label} from './Form.styles'

type FormFieldTypes = {
    fieldtype: "text" | "textarea" | "date" | "select" | "checkbox";
    isLabel: boolean;
    labelText?: string;
    inputstyletype?: "checkbox-star";
    inputtype: string;
    inputname: string;
    inputvalue?: string | number | readonly string[];
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const FormField = ({fieldtype, isLabel, labelText, inputstyletype, inputtype, inputname, inputvalue, onChangeHandler}: FormFieldTypes) => {
    return(
        <Field fieldtype={fieldtype}>
            <Input
                inputtype={inputstyletype}
                type={inputtype}
                name={inputname}
                onChange={onChangeHandler}
                value={inputvalue}
            />
            {isLabel &&
            (
                <Label>{labelText}</Label>
            )}
        </Field>
    )
}

FormField.defaultProps = {
    isLabel: false
}

export default FormField;