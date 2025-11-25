import { ChangeEvent, FocusEvent } from "react";

const DynamicInputs: React.FC<{inputValues: string[], setInputValues: (values: string[]) => void, type: string}> = (props) => {
  const inputChangeHandler = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const newValues = [...props.inputValues];
    newValues[index] = event.target.value;
    if (
      index === props.inputValues.length - 1 &&
      event.target.value.length === 1
    ) {
      props.setInputValues([...newValues, ""]);
    } else {
      props.setInputValues(newValues);
    }
  };

  const inputBlurHandler = (index: number, event: FocusEvent<HTMLInputElement>) => {
    if (
      index !== props.inputValues.length - 1 &&
      event.target.value.trim() === ""
    ) {
      const newValues = [...props.inputValues];
      newValues.splice(index, 1);
      props.setInputValues(newValues);
    }
  };

  return (
    <div>
      {props.inputValues.map((input, index) => (
        <div key={index}>
          <input
            id={Math.random().toString()}
            type="text"
            value={input}
            onChange={(event) => inputChangeHandler(index, event)}
            onBlur={(event) => inputBlurHandler(index, event)}
            placeholder={`${props.type} ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicInputs;
