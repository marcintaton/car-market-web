import React, { useState, useEffect } from "react";

/**
 * Common function for modifying values of input fields in forms
 * @param {*} initialFieldValues values taken from fileds before modification
 * @param {*} validate custom validation callback
 */
const useForm = (initialFieldValues, validate = () => { }) => {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target
        const fieldValue = { [name]: value }
        setValues({
            ...values,
            ...fieldValue,
            [name]: value
        })
        validate(fieldValue)
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    };
}

export default useForm;

