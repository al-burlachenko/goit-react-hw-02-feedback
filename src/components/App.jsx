import { Component } from 'react';
import Button from './Button/Button';

const options = ['good', 'bad', 'neutral'];

export class App extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  onHandleClick = btnName => {
    this.setState(prevState => ({ [btnName]: prevState[btnName] + 1 }));
  };

  countTotalFeedback = () => {
    return options.reduce((acc, option) => acc + this.state[option], 0);
  };

  countPositiveFeedbackPercentage = sum => {
    const { good, bad, neutral } = this.state;
    if (bad + neutral + good === 0) return null;
    if (bad + neutral === 0) return '100%';
    return (this.state['good'] / sum) * 100 + '%';
  };

  render() {
    const totalcount = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(totalcount);
    return (
      <>
        <div className="controls">
          <p>Please Leave FeedBack</p>
          <div className="buttons">
            {options.map(option => (
              <Button
                btnName={option}
                onClick={this.onHandleClick}
                className="btn"
                key={option}
              />
            ))}
          </div>
        </div>
        {positivePercentage ? (
          <ul className="stats">
            {options.map(option => (
              <li className="statOption" key={option}>
                {option} : {this.state[option]}
              </li>
            ))}
            {totalcount !== 0 ? <li>Total: {totalcount}</li> : undefined}
            <li>PositiveFeedBack: {positivePercentage}</li>
          </ul>
        ) : (
          <p>No FeedBack Given</p>
        )}
      </>
    );
  }
}
