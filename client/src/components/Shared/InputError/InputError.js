import './inputError.css';

const InputError = ({children}) => {
    if(!children) {
        return null;
    }
    return (
        <div className="input_error">
            {children}
        </div>
    );
} 

export default InputError;