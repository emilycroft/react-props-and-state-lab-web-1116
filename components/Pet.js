const React = require('react');

class Pet extends React.Component {
  constructor() {
    super()
  }

  handleClick() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name {this.props.pet.name} gender: {(this.props.pet.gender === "male") ?  '♂' :  '♀'} </a>
          <div className="meta">
            <span className="date">Pet type {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          // {!this.props.isAdopted && <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>}
          // {this.props.isAdopted && <button className="ui disabled button">Already adopted</button>}
          { this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleClick.bind(this)}>Adopt pet</button> }
        </div>
      </div>
    )
  }
}


module.exports = Pet
