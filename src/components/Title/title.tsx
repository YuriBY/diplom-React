interface TitleProps {
  text: string;
}

export const Title = (props: TitleProps) => {
  return (
    <div className="uppercase font-bebas font-bold text-2xl lg:text-5xl w-11/12 lg:w-3/5 h-10 m-auto">
      {props.text}
    </div>
  );
};
