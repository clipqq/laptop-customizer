import React from 'react'

class Summarize extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            appSummary: props
        }
    }

    render() {
        return (
            <div>
                {console.log('Summarize fired')}
                <div className="summary__option" key={this.state.appSummary.featureHash}>
                    <div className="summary__option__label">{this.state.appSummary.feature} </div>
                    <div className="summary__option__value">{this.state.appSummary.selectedOptionName}</div>
                    <div className="summary__option__cost">
                        {this.state.appSummary.USCurrencyFormat.format(this.state.appSummary.selectedOptionCost)}
                    </div>
                </div>

            </div>
        )
    }


}

export default Summarize