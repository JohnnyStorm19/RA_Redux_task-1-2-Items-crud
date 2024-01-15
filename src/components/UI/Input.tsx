interface InputProps {
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  type: "text" | "number";
  name: string;
  value: string;
  placeholder: string;
  required?: boolean;
}

const MyInput = (props: InputProps) => {
  return (
    <input
      className="input"
      {...props}
    />
  );
};

export default MyInput;
