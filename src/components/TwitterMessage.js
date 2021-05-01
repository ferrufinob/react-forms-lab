import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState(
      {
        message: event.target.value,
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <strong>
          Your message: {this.props.maxChars - this.state.message.length}{" "}
          characters remaining
        </strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={(event) => this.handleChange(event)}
        />
      </div>
    );
  }
}

export default TwitterMessage;
