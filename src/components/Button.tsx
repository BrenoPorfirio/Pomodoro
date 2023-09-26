interface ButtonProps {
    color?: 'primary' | 'secondary' | 'danger' | 'success';
}

export function Button(props: ButtonProps) {
    return (
        <button>ENVIAR</button>
    )
}