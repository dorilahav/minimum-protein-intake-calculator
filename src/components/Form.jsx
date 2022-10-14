import {Form as DaisyUIForm} from 'react-daisyui';

export const Form = ({onSubmit, children}) => {
  const handleSubmit = event => {
    event.preventDefault();

    onSubmit?.();
  };

  return (
    <DaisyUIForm onSubmit={handleSubmit} className="border-primary border p-4">
      {children}
    </DaisyUIForm>
  );
};
