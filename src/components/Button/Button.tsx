interface ButtonProps {
  value: string;
  classname?: string;
  onClick: () => void;
}

export const Button = ({ value, classname, onClick }: ButtonProps) => {
  return <button className={`${classname}`} onClick={onClick}>{value} </button>;
};
