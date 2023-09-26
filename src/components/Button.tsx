import styles from './Button.module.css'

interface ButtonProps {
    color?: 'primary' | 'secondary' | 'danger' | 'success';
}

export function Button({ color= 'primary' }: ButtonProps) {
    return (
        <button className={`${styles.button} ${styles[color]}`}>ENVIAR</button>
    )
}