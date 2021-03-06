/**
 * Takoyaki Recipe Page Component
 * ===============================
 *
 * Page enabling the user to create a custom clustering recipe.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CLUSTERERS from '../../../definitions/clusterers';

import Button from '../../Button';
import {Level, LevelLeft, LevelRight, LevelItem} from '../../levels';
import StringPreprocessing from './StringPreprocessing';
import Clusterer from './Clusterer';
import Metric from './Metric';

import {actions as mainActions} from '../../../modules/main';
import {actions as recipeActions, selectors as recipeSelectors} from '../../../modules/recipes';

/**
 * Connection to store.
 */
const connectToStore = connect(
  state => {
    return {
      main: state.main,
      recipe: recipeSelectors.editedRecipe(state)
    };
  },
  dispatch => {
    return {
      actions: {
        main: bindActionCreators(mainActions, dispatch),
        recipe: bindActionCreators(recipeActions, dispatch)
      }
    };
  }
);

/**
 * Main component.
 */
class UploadPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
  }

  save() {
    const {actions} = this.props;

    actions.main.selectRecipe(this.props.recipe.id);
    actions.main.runRecipe();
    actions.main.changeStep('clusters');
  }

  render() {
    const {
      actions,
      main,
      recipe
    } = this.props;

    const selectedHeader = main.selectedHeader || main.headers[0];

    const preprocessingSample = main.preprocessingSample.map(row => {
      return main.data[row][selectedHeader];
    });

    const metricSample = main.metricSample.map(column => {
      return column.map(row => {
        return main.data[row][selectedHeader];
      });
    });

    const clusterer = CLUSTERERS[recipe.clusterer];

    const canSave = clusterer.needMetric ?
      !!recipe.metric :
      true;

    return (
      <div className="full-height">
        <section className="workspace recipe-editor">
          <div className="recipe-info">
            <div>
              <input
                className="recipe-title"
                placeholder="Recipe title..."
                spellCheck={false}
                type="text"
                value={recipe.label}
                onChange={e => actions.recipe.updateTitle(e.target.value)} />
            </div>
            <div>
              <textarea
                className="recipe-description"
                placeholder="Recipe description..."
                spellCheck={false}
                value={recipe.description}
                onChange={e => actions.recipe.updateDescription(e.target.value)} />
            </div>
          </div>
          <StringPreprocessing
            headers={main.headers}
            recipe={recipe}
            actions={actions.recipe}
            selectedHeader={main.selectedHeader}
            selectHeader={actions.main.selectHeader}
            sample={preprocessingSample}
            resample={actions.main.resamplePreprocessing} />
          <Clusterer
            recipe={recipe}
            actions={actions.recipe} />
          {clusterer.needMetric && (
            <Metric
              headers={main.headers}
              recipe={recipe}
              actions={actions.recipe}
              selectedHeader={main.selectedHeader}
              selectHeader={actions.main.selectHeader}
              sample={metricSample}
              resample={actions.main.resampleMetric} />
          )}
        </section>
        <Level className="action-bar">
          <LevelLeft />
          <LevelRight>
            <LevelItem>
              <Button
                disabled={!canSave}
                onClick={this.save}>Done</Button>
            </LevelItem>
          </LevelRight>
        </Level>
      </div>
    );
  }
}

export default connectToStore(UploadPage);
