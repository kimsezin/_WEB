import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoudary';

//랜덤 색상을 정합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777245).toString(16); //16777245는 hex ffffff값
}

class App extends Component {
  state = {
    color: getRandomColor(),
  };
  render() {
    return <LifeCycleSample />;
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
