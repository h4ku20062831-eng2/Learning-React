import "./Button.css"

interface Props {
    label: string,
    parentMethod: () => void;
}

// Componente tonto
export const Button = ({label, parentMethod}: Props) => {
    return (
        <button className="custom-buttton" onClick={parentMethod}>
            {label}
        </button>
    )

}