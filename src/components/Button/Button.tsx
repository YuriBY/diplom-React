interface ButtonProps {
    value: string,
    classname?: string
}

export const Button = ({value, classname}: ButtonProps) => {
    return (
        <button >{ value } </button>
    )
}