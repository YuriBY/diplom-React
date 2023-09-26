interface ButtonProps {
  value: string;
  classname?: string;
}

export const Button = ({ value, classname }: ButtonProps) => {
  return <button className={`${classname}`}>{value} </button>;
};
