type PrimaryButtonProps = {
  text: string;
  ariaLabel?: string;
  onClick?: () => void;
};

function PrimaryButton({ text, ariaLabel, onClick }: PrimaryButtonProps) {
  return (
    <button
      className="inline-flex cursor-pointer items-stretch overflow-hidden border-none p-0"
      aria-label={ariaLabel ?? text}
      onClick={onClick}>
      <span className="inline-flex h-[50px] min-w-[170px] items-center justify-center bg-[#2f4f77] px-4  font-medium text-white md:text-[1.55rem] lg:px-8 ">
        {text}
      </span>
      <span
        className="inline-flex h-[50px] w-[50px] items-center justify-center bg-white text-[#2f4f77]"
        aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 5L16 12L9 19"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

export default PrimaryButton;
