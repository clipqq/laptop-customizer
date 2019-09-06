import React from 'react'

class UpdateFeature extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            featureToUpdate: props.featureState
        }
    }

    render() {
        const features = this.state.featureToUpdate.map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <div key={itemHash} className="feature__item">
                        <input
                            type="radio"
                            id={itemHash}
                            className="feature__option"
                            name={slugify(feature)}
                            checked={item.name === this.state.selected[feature].name}
                            onChange={e => this.props.updateFeature(feature, item)} // modified callback
                        />
                        <label htmlFor={itemHash} className="feature__label">
                            {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
                    </div>
                );
            });

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });
    }



}



export default UpdateFeature