const Button = ({ children }) => {
  return (
    <button className="border-2 border-primary-black bg-primary-black px-10 py-4 text-[.75rem]/[1.125rem] text-white transition-all duration-300 ease-in-out hover:border-primary-black hover:bg-white hover:text-primary-black max-3xl:py-2 max-2xl:py-4 max-2xl:text-[.875rem] lg:max-xl:py-2 lg:max-xl:text-[.75rem] max-sm:w-full">
      {children}
    </button>
  );
};

export default Button;
