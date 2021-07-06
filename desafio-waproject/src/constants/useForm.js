import { useState } from "react"

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const clearInputs = () => {
        setForm(initialState)
    }

    return { form, onChange, clearInputs }
}