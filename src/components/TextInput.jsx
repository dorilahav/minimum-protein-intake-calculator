import {useEffect} from 'react';
import {Input as DaisyUIInput} from 'react-daisyui';

export const TextInput = ({name, type = 'text', disabled, initialValue = '', onChange, min, max}) => {
  useEffect(() => {
    onChange?.(initialValue);
  }, []);

  return (
    <DaisyUIInput
      name={name}
      type={type}
      disabled={disabled}
      defaultValue={initialValue}
      min={min}
      max={max}
      onChange={event => onChange?.(event.target.value)}
    />
  );
};
