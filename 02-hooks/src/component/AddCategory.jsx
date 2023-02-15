import { useState } from "react"
export const AddCategory = ({onNewCategory}) => {
    const [ value, setValue] = useState('');
    
    const onInputChange = ({ target}) => {
        setValue(target.value)
    }
    
    const onSubmit = (event) => {
        event.preventDefault()
        if (value.trim() <= 1 )
            return;
        onNewCategory( value.trim());
        setValue('')
        
    }
    
    
    return (
        <form onSubmit={ (event) => onSubmit(event)}>
            <input type="text" placeholder="Buscar gifs" value={value} onChange={(e)=> onInputChange(e)}></input>
        </form>
    )
}