import React from 'react'
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class MapFeatureName extends React.Component {

    render() {
        // console.log('Map features completed', features)
        return (
            <div>
                {Object.keys(this.props.features).map((feature, idx) => {
                    const featureHash = feature + '-' + idx;
                    return (
                        <fieldset className="feature" key={featureHash} >
                            <legend className="feature__name">
                                <h3>{feature}</h3>
                            </legend>
                            {this.props.features[feature].map(item => {
                                const itemHash = slugify(JSON.stringify(item));
                                return (
                                    <div key={itemHash} className="feature__item">
                                        <input
                                            type="radio"
                                            id={itemHash}
                                            className="feature__option"
                                            name={slugify(feature)}
                                            checked={item.name === this.props.selected[feature].name}
                                            onChange={e => this.props.updateFeature(feature, item)}
                                        />
                                        <label htmlFor={itemHash} className="feature__label">
                                            {item.name} ({USCurrencyFormat.format(item.cost)})
                                              </label>
                                    </div>
                                );
                            })}
                        </fieldset>
                    )
                })}
            </div>
        )
    }
}

export default MapFeatureName