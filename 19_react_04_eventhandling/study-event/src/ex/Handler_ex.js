import React from "react";

class Handler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hello World",
    };
  }

  changeConsole = () => {
    this.setState({
      name: "Good Bye World",
    });
    console.log(this.setState.name);
  };

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <button onClick={this.changeConsole}>클릭</button>
      </div>
    );
  }
}

export default Handler;
