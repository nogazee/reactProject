import classes from "./InputList.module.css"

const InputList = (props) => {
  return (
    <ol className={classes.list}>
      {props.inputs.map((input, index) => (
        <li key={index} className={classes.li}>{input}</li>
      ))}
    </ol>
  );
};

export default InputList;
