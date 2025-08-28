const ScanButton = ({ children, variant = 'primary', ...props }) => {
  const base = 'px-4 py-2 rounded font-semibold transition';
  const variants = {
    primary: 'bg-brand text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    danger: 'bg-danger text-white hover:bg-red-700',
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default ScanButton;
