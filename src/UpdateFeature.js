import React, { Component } from 'react'
import slugify from 'slugify'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

export default class UpdateFeature extends Component {
    render() {
        const feature = this.props.feature
        const options = this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item))
            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(feature)}
                        checked={
                            item.name === this.props.selected[feature].name
                        }
                        onChange={e => this.props.updateFeature(feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({USCurrencyFormat.format(item.cost)})
                    </label>
                </div>
            )
        })
        return <>{options}</>
    }
}
