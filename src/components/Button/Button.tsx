interface ButtonProps {
    value: string
}

export const Button = ({value}: ButtonProps) => {
    return (
        <button >{ value } </button>
    )
}