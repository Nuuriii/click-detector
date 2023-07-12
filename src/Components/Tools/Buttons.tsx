interface ButtonsProps {
   Click: () => void;
   text: string;
   className: string;
}

export const Buttons = ({ className, Click, text }: ButtonsProps) => {
   return (
      <button className={className} onClick={Click}>
         {text}
      </button>
   );
};
