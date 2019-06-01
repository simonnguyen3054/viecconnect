class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {
    return (
      <div>
        Bitcoin rate for {this.props.bpi.USD.description}: {this.props.bpi.USD.rate} {this.props.bpi.USD.code}
      </div>
    )
  }
}

export default Prices