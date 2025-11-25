import classes from "./ItemList.module.css"

const ItemList: React.FC<{items: string[]}> = (props) => {
  return (
    <ol className={classes.list}>
      {props.items.map((item, index) => (
        <li key={index} className={classes.li}>{item}</li>
      ))}
    </ol>
  );
};

export default ItemList;
