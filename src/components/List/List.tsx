interface Props {
    personajeNombre?: any;
}

export const List = ({ personajeNombre }: Props) => {
    return (
        <div>
            <h2>{personajeNombre.name}</h2>
            <img src={personajeNombre.image} alt={personajeNombre.name} />
            <p>Status: {personajeNombre.status}</p>

        </div>
    )
}