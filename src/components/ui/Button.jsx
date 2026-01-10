const Button = ({
    children,
    variant = "primary", // primary | secondary | dark
    size = "md",         // sm | md | lg
    rounded = "full",    // full | md
    icon,
    onClick,
    className = "",
  }) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-medium transition focus:outline-none cursor-pointer";
  
    const variants = {
      primary: "bg-primary text-white hover:bg-secondary",
      secondary: "bg-secondary text-white hover:bg-primary",
      dark: "bg-black text-white hover:bg-primary",
    };
  
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };
  
    const radius = {
      full: "rounded-full",
      md: "rounded-md",
    };
  
    return (
      <button
        onClick={onClick}
        className={`${base} ${variants[variant]} ${sizes[size]} ${radius[rounded]} ${className}`}
      >
        {children}
        {icon && <span>{icon}</span>}
      </button>
    );
  };
  
  export default Button;
  