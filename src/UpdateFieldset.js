import React from 'react'

class UpdateFieldset extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <fieldset className="feature" key={this.props.featureHash}>
            <legend className="feature__name">
              <h3>{this.props.feature}</h3>
            </legend>
            {this.props.options}
          </fieldset>
        )
    }

}

export default UpdateFieldset