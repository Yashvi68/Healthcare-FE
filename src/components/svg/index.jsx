// 1. Success Icon (Green Tick)
export const SuccessIcon = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        fill="#22C55E"
        fillOpacity="0.2"
      />
      <path
        d="M7.75 12L10.58 14.83L16.25 9.17004"
        stroke="#15803D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// 2. Error Icon (Red Alert)
export const ErrorIcon = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        fill="#EF4444"
        fillOpacity="0.2"
      />
      <path
        d="M12 8V13"
        stroke="#B91C1C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9945 16H12.0035"
        stroke="#B91C1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// 3. Close Icon (Ye tumhare Senior wala code hai exact)
export const CloseIcon = ({ fillColor, handleClick, className }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      className={className}
      style={{ cursor: "pointer" }}
    >
      {/* Circle Background */}
      <circle cx="12.5" cy="12.5" r="12.5" fill={fillColor} />
      
      {/* X Line 1 */}
      <path
        d="M17.4309 7.56641L7.5625 17.4348"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* X Line 2 */}
      <path
        d="M7.56908 7.56641L17.4375 17.4348"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};