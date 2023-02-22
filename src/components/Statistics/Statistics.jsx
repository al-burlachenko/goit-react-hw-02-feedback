const options = ['good', 'bad', 'neutral'];

const Statistics = args => {
  const { total, positivePercentage } = args;
  return (
    <ul className="stats">
      {options.map(option => (
        <li className="statOption" key={option}>
          {option} :{args[option]}
        </li>
      ))}
      {total !== 0 ? <li>Total: {total}</li> : undefined}
      <li>PositiveFeedBack: {positivePercentage}</li>
    </ul>
  );
};

export default Statistics;
