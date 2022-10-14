import {useRef, useState} from 'react';
import {calculateMinProteinIntake} from './calculate-min-protein-intake';
import {Button, Form, FormLabel, RadioButtons, Select, TextInput} from './components';
import {Diet, Gender, WeightUnit} from './enums';

const GenderInput = ({inputRef}) => (
  <FormLabel label="Gender">
    <RadioButtons
      initialValue={Gender.Male}
      options={Object.keys(Gender).map(label => ({label, value: Gender[label]}))}
      onChange={value => (inputRef.current = value)}
    />
  </FormLabel>
);

const WeightInput = ({inputRef}) => {
  const unitRef = useRef();
  const amountRef = useRef();

  const updateValue = () => {
    inputRef.current = unitRef.current === WeightUnit.KG ? amountRef.current : Math.round(amountRef.current / 2.2);
  };

  return (
    <FormLabel label="Weight">
      <div className="flex items-center gap-2">
        <TextInput
          type="number"
          initialValue={75}
          min={10}
          onChange={value => {
            amountRef.current = value;
            updateValue();
          }}
        />
        <Select
          initialValue={WeightUnit.KG}
          options={Object.keys(WeightUnit).map(label => ({label, value: WeightUnit[label]}))}
          onChange={value => {
            unitRef.current = value;
            updateValue();
          }}
        />
      </div>
    </FormLabel>
  );
};

const DietInput = ({inputRef}) => (
  <FormLabel label="Diet">
    <Select
      initialValue={Diet.Omnivore}
      options={Object.keys(Diet).map(label => ({label, value: Diet[label]}))}
      onChange={value => (inputRef.current = value)}
    />
  </FormLabel>
);

const BodyFatInput = ({inputRef}) => (
  <FormLabel label="Body Fat">
    <TextInput
      type="number"
      initialValue={20}
      onChange={value => (inputRef.current = parseInt(value))}
      min={3}
      max={99}
    />
  </FormLabel>
);

const App = () => {
  const [minimumProteinIntake, setMinimumProteinIntake] = useState();

  const genderRef = useRef();
  const weightRef = useRef();
  const dietRef = useRef();
  const bodyFatRef = useRef();

  const handleSubmit = () => {
    const gender = genderRef.current;
    const weight = weightRef.current;
    const diet = dietRef.current;
    const bodyFat = bodyFatRef.current;

    const minimumProteinIntake = calculateMinProteinIntake(gender, diet, weight, bodyFat);
    setMinimumProteinIntake(minimumProteinIntake);
  };

  return (
    <div className="flex-col h-screen p-10 items-center">
      <h1 className="text-4xl text-center mb-1 text-primary">Minimum Protein Intake Calculator</h1>
      <h2 className="text-xl text-center mb-8">
        This website can be used in order to calculate your <b>minimum</b> recommended daily protein intake.
        <br />
        Fill your details below and we will do the calculations for you.
      </h2>
      <div className="flex justify-center">
        <Form onSubmit={handleSubmit}>
          <GenderInput inputRef={genderRef} />
          <DietInput inputRef={dietRef} />
          <WeightInput inputRef={weightRef} />
          <BodyFatInput inputRef={bodyFatRef} />
          <Button type="submit" className="mt-4">
            Calculate
          </Button>
        </Form>
      </div>
      {minimumProteinIntake && (
        <div className="flex-col align-center text-center mt-5">
          <p className="text-lg mb-4">Your minimum intake is {minimumProteinIntake}g of protein per day!</p>
          <span>
            Learn how this was calculated for you by watching{' '}
            <a
              className="text-primary underline"
              rel="external"
              target="_blank"
              href="https://www.youtube.com/watch?v=t_UQz2pTpQc"
            >
              this video
            </a>
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
