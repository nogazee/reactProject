const DynamicInputs = (props) => {
  const inputChangeHandler = (index, event) => {
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

  const removeInputHandler = (index, event) => {
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
            id={`${props.type}${index + 1}`}
            type="text"
            value={input}
            onChange={(event) => inputChangeHandler(index, event)}
            onBlur={(event) => removeInputHandler(index, event)}
            placeholder={`${props.type} ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicInputs;
