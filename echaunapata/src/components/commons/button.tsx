import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  color?: string;
  to?: string;
  onClick?: () => void;
};

export default function Button({ text, color = "#F23413", to, onClick }: ButtonProps) {
  const classes =
    "text-white font-semibold text-xs sm:text-sm md:text-base px-4 py-2 rounded-full transition-all hover:scale-105 shadow-md inline-block";

  const styles = {
    backgroundColor: color,
  };

  if (to) {
    return (
      <Link to={to} className={classes} style={styles}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} style={styles}>
      {text}
    </button>
  );
}
