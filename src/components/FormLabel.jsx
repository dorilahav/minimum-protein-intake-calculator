import {Form} from 'react-daisyui';

export const FormLabel = ({label, children}) => {
  return (
    <div className="form-control w-full">
      <Form.Label title={label} />
      {children}
    </div>
  );
};
