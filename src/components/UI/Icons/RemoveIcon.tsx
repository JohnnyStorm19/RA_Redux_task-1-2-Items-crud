interface RemoveIconProps {
    isEdited: boolean;
}

const RemoveIcon = ({isEdited}: RemoveIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`w-7 h-7 ${
        isEdited
          ? "fill-gray-400 hover:fill-gray-400"
          : "fill-black hover:fill-red-500"
      }`}
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default RemoveIcon;
