const Button = ({ btnName, onClick }) => {
  //   console.log(onClick);
  return (
    <button type="button" onClick={() => onClick(btnName)} name={btnName}>
      {btnName}
    </button>
  );
};

export default Button;
