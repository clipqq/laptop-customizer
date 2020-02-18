import React from 'react'
import UpdateFeature from './UpdateFeature';

export default class MapFeatureName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: '',
            item: '',
        }
    }

    render() {
        const features = Object.keys(this.props.features).map(
            (feature, idx) => {
                const featureHash = feature + '-' + idx
                return (
                    <UpdateFeature
                        key={featureHash}
                        feature={feature}
                        options={this.props.features[feature]}
                        selected={this.props.selected}
                        updateFeature={this.props.updateFeature}
                    />
                )
            },
        )
        return <form>{features}</form>
    }
}