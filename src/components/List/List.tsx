interface Props {
    personajeNombre: any[];
}

export const List = ({ personajeNombre }: Props) => {
    return (
        <div>
            <ul>
                {personajeNombre.map((personaje) => (
                    <li key={personaje.id}>
                        {personaje.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}