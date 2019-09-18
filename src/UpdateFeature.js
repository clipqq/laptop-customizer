import React from 'react'
import slugify from 'slugify';
// import UpdateFieldset from './UpdateFieldset'
import RenderApp from './RenderApp';

class UpdateFeature extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('UpdateFeature fired', this.props)

    const features = Object.keys(this.props.features).map((feature, idx) => {
      console.log(this.props)

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
              onChange={this.props.handleUpdateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
                  </label>
          </div>
        );
      });

      // return (
      //   // pass features, options, featureHash
      //   <UpdateFieldset features={this.features} options={this.options} featureHash={featureHash}/>
      //   // <RenderApp props={}/>
      // );

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );


    });

    return (
      <RenderApp
        USCurrencyFormat={this.props.USCurrencyFormat}
        // summary={this.props.summary}
        features={features}
      />
    )


  }

}



export default UpdateFeature