interface InputFormProps {
    type: string,
    name: string,
    value?: string,
    placeholder: string,
    handleChange: (event: {target: {name:string, value: string}}) => void,
    className?: string,
    required?: boolean
}

const InputForm = ({type, name, value, placeholder, handleChange, className, required }:InputFormProps) => {
    return(
        <div className="w-full font-normal">
            <input type={type} value={value} name={name} placeholder={placeholder} onChange={(event) => handleChange(event)} className={`w-full bg-white font-normal outline-none px-3 ${className}`} required/>
            {required && <span className="flex-none">{placeholder} is required!</span>}
        </div>
    )
}
export default InputForm;