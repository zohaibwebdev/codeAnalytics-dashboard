import { useContext, createContext } from "react"

const FormDataContext = createContext()

export const FormDataProvider = FormDataContext.Provider

export const useFormData = ()=> useContext(FormDataContext)