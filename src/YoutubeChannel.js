import React from "react";

class YoutubeChannel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Subscribe to my channel!😢',
      sub: 'Subscribe'
    }
  }

  ButtonChange = () => {
    this.setState({
      message: 'Thanks for subscribing!🙏',
      sub: 'Subscribed'
    })
  }

  render() {
    return (
      <>
        <h1>Welcome to My Youtube Channel</h1>
        <h2>{this.state.message}</h2>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
      </>
    )
  }
}

export default YoutubeChannel;