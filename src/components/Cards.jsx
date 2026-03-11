export default function card({ object, indice }) {


    return (
        <>
            {indice == object.id && <div>
                <h2>{object.title}</h2>
                <p>{object.description}</p>
            </div>}
        </>
    )
}