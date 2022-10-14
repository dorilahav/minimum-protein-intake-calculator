import {useEffect} from 'react';
import {Select as DaisyUISelect} from 'react-daisyui';

export const Select = ({initialValue, name, disabled, options, onChange}) => {
  useEffect(() => {
    onChange?.(initialValue);
  }, []);

  return (
    <DaisyUISelect name={name} disabled={disabled} initialValue={initialValue} onChange={onChange}>
      {options.map(({label, value}) => (
        <DaisyUISelect.Option key={value} value={value}>
          {label}
        </DaisyUISelect.Option>
      ))}
    </DaisyUISelect>
  );
};
