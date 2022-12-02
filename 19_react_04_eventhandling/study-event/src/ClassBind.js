import React from "react";

class ClassBind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "KDT3rd",
    };

    //   this.printConsole = this.printConsole.bind(this)
  }

  //   printConsole() {
  //     console.log('>>>>',this.state);
  //   }

  printConsole = () => {
    console.log(">>>>", this.state);
  };

  render() {
    return (
      <div>
        <button onClick={this.printConsole}>printConsole</button>
      </div>
    );
  }
}

export default ClassBind;
