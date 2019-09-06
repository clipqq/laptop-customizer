import React from 'react'
import slugify from 'slugify';

class UpdateFeature extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            appUpdate: props
        }
    }

    render() {
        return (
            <div key={this.state.appUpdate.itemHash} className="feature__item">
              <input
                type="radio"
                id={this.state.appUpdate.itemHash}
                className="feature__option"

                name={slugify(this.state.appUpdate.feature)}
                checked={this.state.appUpdate.item.name === this.state.appUpdate.selected[this.state.appUpdate.feature].name}
                onChange={e => this.props.updateFeature(this.state.appUpdate.feature, this.state.appUpdate.item)}
              />
              <label htmlFor={this.state.appUpdate.itemHash} className="feature__label">
                {this.state.appUpdate.item.name} ({this.state.appUpdate.USCurrencyFormat.format(this.state.appUpdate.item.cost)})
              </label>
            </div>
          );  

    }

}



export default UpdateFeature