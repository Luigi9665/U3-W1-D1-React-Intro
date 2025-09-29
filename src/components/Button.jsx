const ButtonComponent = (props) => {
  return (
    <div>
      <button className={props.className}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.textButton}
      </button>
    </div>
  );
};

export default ButtonComponent;
