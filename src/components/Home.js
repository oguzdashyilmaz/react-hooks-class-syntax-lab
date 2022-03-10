import React from "react";

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1 style={{color: this.props.color}}>
          {this.props.name} is a web developer from {this.props.city}
        </h1>
      </div>
    )
  }
}

export default Home;
