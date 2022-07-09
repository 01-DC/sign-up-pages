const Error = ({ error }) => (
  <p className="font-bold flex items-center mb-4 text-[0.8rem] text-[#e0133e]">
    <svg
      className="mr-1.5"
      focusable="false"
      viewBox="0 0 24 24"
      fill="#e0133e"
      style={{
        fontSize: '1.1rem',
        width: '17.6px',
        height: '17.6px',
      }}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
    <span className="inline-block w-11/12">{error}</span>
  </p>
);

export default Error;
