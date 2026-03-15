export default function card({ languageid, indice, index}) {
  
    return (
        <>
            {
                indice == languageid[index].id && <div className="border rounded my-2 p-2">
                    <h2>{languageid[index].title}</h2>
                    <p>{languageid[index].description}</p>
                </div>
            }
        </>
    )
}