const Input = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
}) => {
  return (
    <div className="my-6">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className="rounded-md text-sm lg:text-base appearance-none relative block w-full px-3 py-4 border 
        border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none 
        focus:ring-pastel-purple focus:border-pastel-purple focus:z-10 sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
