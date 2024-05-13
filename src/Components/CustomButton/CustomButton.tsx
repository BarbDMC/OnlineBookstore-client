import { MouseEventHandler } from 'react';

const CustomButton = (props: { styles: string; text: string; onClickAction: MouseEventHandler<HTMLButtonElement>; }) => {
  const { styles, text, onClickAction } = props;
  return (
    <button className={`rounded-2xl font-['Poppins'] w-16 h-8 ${styles}`} onClick={onClickAction}>
      {text}
    </button>
  );
};

export default CustomButton;


