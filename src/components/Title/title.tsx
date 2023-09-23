interface TitleProps {
    text: string;
}

export const Title = (props: TitleProps) => {
    return (
        <div className="uppercase font-bebas font-bold text-5xl w-[1120px] h-10 m-auto">{props.text}</div>
    )
}