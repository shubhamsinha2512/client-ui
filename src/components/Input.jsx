import PropTypes from "prop-types";

function Input({ name, value, ...props }) {
  return (
    <>
      <label
        htmlFor={name}
        className="block mx-2 mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {name}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={name}
        name={name}
        type="text"
        value={value}
        {...props}
      />
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
