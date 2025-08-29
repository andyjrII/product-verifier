const ScanButton = ({ children, variant = 'primary', ...props }) => {
  const base =
    'px-8 py-4 w-[150px] rounded-xl font-semibold text-2xl transition focus:outline-none focus:ring flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-300',
    danger: 'bg-red-500 text-white hover:bg-red-700 focus:ring-red-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    link: 'text-blue-600 hover:underline',
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default ScanButton;
