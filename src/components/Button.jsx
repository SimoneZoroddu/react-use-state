


export default function Button({object, openCloseDescrition}) {
    

    
    return (
        <>
            <button onClick={()=> openCloseDescrition(object.id) }>{object.title}</button>
        </>
    )
}