import { MouseEventHandler } from 'react';

const CustomButton = (props: { styles: string; text: string; onClickAction: MouseEventHandler<HTMLButtonElement>; }) => {
  const { styles, text, onClickAction } = props;
  return (
    <button className={`${styles}`} onClick={onClickAction}>
      {text}
    </button>
  );
};

export default CustomButton;


