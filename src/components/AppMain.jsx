import Cards from './Cards'
import Button from './Button'
import { useState } from "react"

export default function appMain({ languages }) {

    const [indice, setIndice] = useState(null)



    
    function openCloseDescrition(id) {
        if (indice == id) {
            setIndice(null)
        } else {
            setIndice(id)
        }
    }

    const [index, setIndex] = useState(0)

    function setIndexForCards(languageid) {
        setIndex(languageid)
    }

    return (
        <>
            <div className="container d-flex gap-3">
                {
                    languages.map(language => (
                        <div key={language.id}>
                            <Button singleLanguage={language} openCloseDescrition={openCloseDescrition} indice={indice} setIndexForCards={setIndexForCards} />
                        </div>
                    ))
                }
            </div>
            <div className="container d-flex gap-3">
                <Cards languageid={languages} indice={indice} index={index} />
            </div>
        </>
    )
}