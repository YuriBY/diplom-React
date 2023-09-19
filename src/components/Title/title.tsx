interface TitleProps {
    text: string;
}

export const Title = (props: TitleProps) => {
    return (
        <div className=" uppercase font-bebas-700 text-5xl w-4/6 h-10 m-auto">{props.text}</div>
    )
}