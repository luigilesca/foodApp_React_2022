import styles from "./RemoveButton.module.css";

function RemoveButton(props) {
  return (
    <div>
      <button className={styles.btn} onClick={props.onRemove}>
        Remove
      </button>
    </div>
  );
}

export default RemoveButton;
