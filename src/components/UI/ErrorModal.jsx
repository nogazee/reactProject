import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

const portalElement = document.getElementById("overlays");

const ErrorModal = (props) => {
  return <Fragment>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay {...props} />, portalElement)}
  </Fragment>
};

export default ErrorModal;
