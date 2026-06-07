import React,{useState} from 'react'

export default function Component() {
    const[text, settext] = useState()
    const[updated, setUpdated] = useState()

    const TextOnChange = (event) => {
        settext(event.target.value)
    }

    const buttonOnClick = () => {
        setUpdated(text)
    }

    return (
    <div>
        <input type="text" value={text} onChange={TextOnChange}/>
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>texto input: {text}</p>
        <p>Texto actualizado {updated}</p>
    </div>
  )
}
