import React, {Fragment, useEffect, useState} from 'react';
import {Form, Radio} from 'react-daisyui';

export const RadioButtons = ({initialValue, options = [], onChange}) => {
  const [currentValue, setCurrentValue] = useState(initialValue);

  useEffect(() => {
    onChange?.(currentValue);
  }, [currentValue]);

  return (
    <div className="flex items-center justify-around">
      {options.map(({label, value}) => (
        <Fragment key={value}>
          <Form.Label title={label} />
          <Radio
            name={label}
            checked={currentValue === value}
            onChange={() => setCurrentValue(value)}
            color="primary"
          />
        </Fragment>
      ))}
    </div>
  );
};
