import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <h1 className="w-3/5 font-bebas font-bold mx-auto">
      Такой страницы не существует. <Link to="/" className="text-indigo-400">Вернуться на главную</Link>
    </h1>
  );
};
