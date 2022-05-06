import { useReducer } from "react";

// Type for input state
type InputState = {
    value: string,
    touched: boolean,
    isValid: boolean,
    errorMessage: string,
}

// Default input state
const defaultInputState: InputState = {
    value: '',
    touched: false,
    isValid: true,
    errorMessage: '',
}

// An enum that have all type of input actions needed
enum InputActionType {
    INPUT_CHANGE,
    INPUT_BLUR,
}

// An interface that used for determine 
type InputAction = {
    type: InputActionType,
    payload: {
        value?: string,
        rules?: ((value: string) => RuleInterface)[],
    },
}

// Reducer that used to handle every actions in this useInput hook
function inputReducer(state: InputState, action: InputAction): InputState {
    switch (action.type) {
        case InputActionType.INPUT_CHANGE:
            return {
                ...state,
                value: action.payload.value ?? '',
            }

        case InputActionType.INPUT_BLUR:
            for (const rule of action.payload.rules ?? []) {
                const isInvalid = rule(state.value).rule;
                const errorMessage = rule(state.value).error;

                if (isInvalid) { /* <<< If error found! */
                    return {
                        value: state.value,
                        touched: true,
                        isValid: false,
                        errorMessage
                    }
                }
            }

            return {  /*  */
                ...state,
                touched: true,
                isValid: true,
                errorMessage: '',
            };
    
        default:
            return defaultInputState;
    }
}

// An interface to handle the return from this useInput hook
interface useInputInterface {
    value: string,
    isValid: boolean,
    errorMessage: string,
    inputChangeHandler: (value: string) => void,
    inputBlurHandler: () => void,
}


// UseInput hook that can be used for handling input value from component
function useInput(rules: ((value: string) => RuleInterface)[]): useInputInterface {
    const [inputState, dispatchInput] = useReducer(inputReducer, defaultInputState);

    // Handler for input value change
    function inputChangeHandler(value: string) {
        dispatchInput({
            type: InputActionType.INPUT_CHANGE,
            payload: {value},
        })
    }

    // handler for input blur
    function inputBlurHandler() {
        dispatchInput({
            type: InputActionType.INPUT_BLUR,
            payload: { rules: rules },
        })
    }

    return {
        value: inputState.value,
        isValid: inputState.isValid,
        errorMessage: inputState.errorMessage,
        inputChangeHandler,
        inputBlurHandler,
    }
}

export default useInput;


/* ======================================================================================== */


// An interface to handle the return from useInputRules hook
interface InputRulesInterface {
    isEmpty: (value: string) => RuleInterface
    emailIsEmpty: (value: string) => RuleInterface
    emailInvalid: (value: string) => RuleInterface
    passwordIsEmpty: (value: string) => RuleInterface
    passwordLessThan8: (value: string) => RuleInterface
}

// An interface to handle the return from rules inside useInputRules hook
interface RuleInterface  {
    rule: boolean,
    error: string,
}

// UseInputRules is a hook that contains all the rules for useInput
export function useInputRules(): InputRulesInterface {

    // Rule if the value is empty
    const isEmpty = (value: string): RuleInterface => {
        return {
            rule: value.trim().length === 0,
            error: 'is empty!'
        }
    }

    // Rule if the value (email) is empty
    const emailIsEmpty = (value: string): RuleInterface => {
        return {
            rule: value.trim().length === 0,
            error: 'Email is required!'
        }
    }

    // Rule if the value (email) is invalid
    const emailInvalid = (value: string): RuleInterface => {
        return {
            rule: !(value.includes('@') && value.includes('.') && value.trim().length > 4),
            error: 'Email is invalid!',
        }
    }

    // Rule if the value (email) is empty
    const passwordIsEmpty = (value: string): RuleInterface => {
        return {
            rule: value.trim().length === 0,
            error: 'Password is required!'
        }
    }

    // Rule if password is less than 8 chars
    const passwordLessThan8 = (value: string): RuleInterface => {
        return {
            rule: value.trim().length < 8,
            error: 'Password is less than 8 characters!'
        }
    }

    return {
        isEmpty,
        emailIsEmpty,
        emailInvalid,
        passwordIsEmpty,
        passwordLessThan8,
    }
}