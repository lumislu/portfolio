const Button = ({
  type,
  icon,
  href,
  onClick,
  children,
  classes,
  ...otherProps
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      className={`link d-flex align-items-center text-primary   ${
        type === "button" ? "fill_btn" : "hover"
      }`}
      {...otherProps}
    >
      {children}
      {icon}
    </a>
  );
};

export default Button;
