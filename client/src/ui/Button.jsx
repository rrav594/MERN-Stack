import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "text-sm active:bg-slate-900 disabled:cursor-not-allowed bg-sky-400 focus:ring-offset-2 focus:bg-sky-300 focus:outline-none focus:ring focus:ring-sky-300 uppercase font-semibold text-stone-800 inline-block tracking-widest rounded-full hover:bg-sky-300 transition-all ease-in duration-300";

  const styles = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",
    small: base + "py-2 md:px-5 md:py-2.5 px-4 text-xs",
    secondary:
      "text-sm md:py-3.5 px-4 py-2.5 sm:px-6 sm:py-4 border-2 border-stone-300 active:bg-slate-900 disabled:cursor-not-allowed  focus:ring-offset-2 focus:bg-sky-300 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-stone-300 uppercase font-semibold text-stone-800 inline-block tracking-widest rounded-full hover:bg-stone-500 transition-colors duration-300",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
