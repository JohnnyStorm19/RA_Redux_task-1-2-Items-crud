interface IButtonProps {
  type: "button" | "submit" | "reset";
  btnText: string;
  onClick?: () => void;
}

const Button = ({ type, btnText, onClick }: IButtonProps) => {
  return (
    <button 
      type={type}
      className="btn-primary"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
