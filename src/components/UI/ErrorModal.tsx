import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop: React.FC<{onConfirm: () => void}> = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

const ModalOverlay: React.FC<{title: string, message: string, onConfirm: () => void}> = (props) => {
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

const portalElement: HTMLElement = document.getElementById("overlays")!;

const ErrorModal: React.FC<{title: string, message: string, onConfirm: () => void}> = (props) => {
  return <Fragment>
    {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay {...props} />, portalElement)}
  </Fragment>
};

export default ErrorModal;
