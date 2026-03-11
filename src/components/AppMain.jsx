import { useState } from "react"



export default function appMain({languages}) {
    
    const [indice, setIndice] = useState(null)

    function openCloseDescrition(id) {
        if (indice == id) {
            setIndice(null)
        } else {
            setIndice(id)
        }
    }
    
    
    return (
        <>
            {
                languages.map(language => (
                <div key={language.id}>
                    <button onClick={()=> openCloseDescrition(language.id) }>{language.title}</button>
                  {indice==language.id &&<div>
                        <h2>{language.title}</h2>
                        <p>{language.description}</p>
                    </div>}
                </div>
                ))
            }
        </>
    )
}