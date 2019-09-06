import React from 'react'
import { directive } from '@babel/types';

class RenderApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            appState: props
        }
    }

    render() {
        return (
            <div className="App">
                {console.log('RenderApp fired')}
                <header>
                    <h1>ELF Computing | Laptops</h1>
                </header>
                <main>
                    <form className="main__form">
                        <h2>Customize your laptop</h2>
                        {this.state.appState.features}
                    </form>
                    <section className="main__summary">
                        <h2>Your cart</h2>
                        {this.state.appState.summary}
                        <div className="summary__total">
                            <div className="summary__total__label">Total</div>
                            <div className="summary__total__value">
                                {this.state.appState.USCurrencyFormat.format(this.state.appState.total)}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }

}

export default RenderApp