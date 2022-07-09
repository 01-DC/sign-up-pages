const Backdrop = ({ children }) => (
  <div className="h-full w-full fixed flex flex-col items-center bg-black justify-center bg-opacity-50 z-50 top-0">
    {children}
  </div>
);

export default Backdrop;
