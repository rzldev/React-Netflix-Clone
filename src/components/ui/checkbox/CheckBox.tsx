// Components
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

interface Props {
    id?: string,
    className?: string,
    label: string,
    value?: string | number,
    textColor?: string,
    fontSize?: string | number,
    checkBoxSize?: string | number,
    checkBoxColor?: string,
    checked?: boolean,
}

// CheckBox
function CheckBox({ id, className, label, value, textColor, fontSize, checkBoxSize, checkBoxColor, checked }: Props) {
    return (
        <FormGroup id={id} className={className} >
            <FormControlLabel
                label={label}
                color={textColor}
                sx={{
                    '& .MuiFormControlLabel-label': {
                        fontSize: `${fontSize}px`
                    },
                }}
                control={
                    <Checkbox
                        defaultChecked
                        value={value}
                        sx={{
                            color: textColor,
                            '& .MuiSvgIcon-root': {
                                fontSize: `${checkBoxSize}px`,
                            },
                            '& .Mui-checked': {
                                color: checkBoxColor
                            }
                        }} />
                }
            />
        </FormGroup>
    )
}

export default CheckBox;