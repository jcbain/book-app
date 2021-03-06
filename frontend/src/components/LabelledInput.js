import './labelledInput.css'

const LabelledInput = ({ value, onInputChange, placeholder, label, inputId, ...rest }) => {

    const handleChange = event => {
        onInputChange(event.target.value);
    }

    return (
        <div className={'input-wrapper'} {...rest}>
            <label htmlFor={inputId}>{label} </label>
            <input id={inputId} type="text" onChange={handleChange} value={value} placeholder={placeholder}/>
        </div>
        
    )
}


export default LabelledInput;