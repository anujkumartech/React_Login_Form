
import './input-field.css';
import { useRef, useEffect } from 'react';

export const InputField = ({id, labelValue, type, fieldValue, setFormData, isFocus}) => {
    const onChangeHandler = (event) => {
        setFormData(id, event.target.value);
    }

    // Reference Code From Parent
    // const setFormFromChildComponent = (fieldValue, value) =>  {
    //     setFormData({
    //       ...formData,
    //       fieldValue: value
    //     })
    // }

    const inputRef = useRef(null);

    useEffect(() => { 
        console.log(`is focus is ${isFocus}`)
        if (isFocus) {
            console.log('do focus on input');
            inputRef.current.focus();
        }
    }, [isFocus])
    
    return (
        <div className="input-label-container">
            <label htmlFor={id} className="label font-offwhite">
            {labelValue}:
            </label>
            <input
                ref={inputRef}
                id={id}
                type={type}
                value={fieldValue}
                onChange={onChangeHandler}
            />
        </div>
    )
};