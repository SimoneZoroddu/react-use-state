import Cards from './Cards'
import Button from './Button'
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
                    <Button object={language} openCloseDescrition={openCloseDescrition} indice={indice} setIndice={setIndice}/>
                    <Cards object={language} openCloseDescrition={openCloseDescrition} indice={indice} setIndice={setIndice}/>
                </div>
                ))
            }
        </>
    )
}