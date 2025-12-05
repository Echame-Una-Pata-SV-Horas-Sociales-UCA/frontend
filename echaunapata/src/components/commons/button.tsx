import { Link } from 'react-router-dom';

type ButtonProps = {
  text: string;
  color?: string;
  to?: string;
  onClick?: () => void;
};

export default function Button({ text, color = "#F23413", to, onClick }: ButtonProps) {
  const classes = `bg-[${color}] hover:bg-[${color}] text-white font-bold text-lg px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {text}
    </button>
  );
}