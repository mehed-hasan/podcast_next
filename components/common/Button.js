import Link from "next/link";

function Button({ btnColors, btnText, hasArrow, link }) {
  return (
    <>
      <Link className={`them_btn  text-capitalize ${btnColors}`} href={`${link}`}>
        {btnText}
        {hasArrow && (
          <svg
            className="ms-2"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7046 0.26716L17.4375 5.00004L12.7046 9.73291L11.9091 8.93739L15.284 5.5625L0.589361 5.5625V4.4375L15.2839 4.4375L11.9091 1.06268L12.7046 0.26716Z"
              fill="#4A5568"
            />
          </svg>
        )}
      </Link>
    </>
  );
}

export default Button;
