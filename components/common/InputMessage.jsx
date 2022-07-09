import React from 'react';

const InputMessage = ({ loading, message }) => (
  <div className="flex space-x-2">
    {loading ? (
      <div
        className="animate-spin h-4 w-4 rounded-full border-2 border-focus-cyan "
        style={{ borderRightColor: 'transparent' }}
      />
    ) : (
      <img
        src="/svg/check-mark-1.svg"
        alt="checkmark"
        className="w-4 h-4"
        width={16}
        height={16}
      />
    )}
    <p className="font-bold flex items-center mb-4 text-[0.8rem] text-focus-cyan">
      {message}
    </p>
  </div>
);
InputMessage.defaultProps = {
  loading: false,
  message: '',
};

export default InputMessage;
