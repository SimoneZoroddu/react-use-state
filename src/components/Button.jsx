


export default function Button({singleLanguage, openCloseDescrition, indice, setIndexForCards}) {
    

    
    return (
        <>
            <button onClick={()=> {openCloseDescrition(singleLanguage.id), setIndexForCards(singleLanguage.id - 1)} } className={indice == singleLanguage.id ? 'btn btn-warning': 'btn btn-primary'} >{singleLanguage.title}</button>
        </>
    )
}




/* indice == object.id && 'btn-warning' */