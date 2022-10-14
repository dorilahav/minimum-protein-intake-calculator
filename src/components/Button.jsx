import {Button as DaisyUIButton} from 'react-daisyui';

export const Button = ({type, children, className}) => {
  return (
    <DaisyUIButton type={type} className={className} color="primary">
      {children}
    </DaisyUIButton>
  );
};
