const Button = ({ children, variant = 'primary', ...props }) => {
  const base =
    'px-4 py-2 rounded-lg font-medium transition focus:outline-none focus:ring';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    link: 'text-blue-600 hover:underline',
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
