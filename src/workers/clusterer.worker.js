/**
 * Takoyaki Clusterer Worker
 * ==========================
 *
 * WebWorker designed to run the cluster computations without freezing the UI.
 */
import MultiMap from 'mnemonist/multi-map';
import shuffleInPlace from 'pandemonium/shuffle-in-place';
import preprocessors from '../definitions/preprocessors';
import clusterers from '../definitions/clusterers';

/**
 * Message listener.
 */
function onMessage(data) {
  const values = data.values,
        recipe = data.recipe;

  const clusters = performClustering(values, recipe);

  return self.postMessage({clusters});
}

/**
 * Process outline.
 */
function performClustering(values, recipe) {

  //-- 1) Preprocessing & mapping unique values
  const preprocessor = preprocessors[recipe.preprocessor].build();

  const map = new MultiMap();

  for (let i = 0, l = values.length; i < l; i++)
    map.set(values[i], i);

  //-- 2) Retrieving & shuffling values
  const items = [...map.keys()];

  shuffleInPlace(items);

  //-- 3) Building clusterer & computing the clusters
  const clusterer = clusterers[recipe.clusterer].build(preprocessor);

  const clusters = clusterer(items);

  return clusters;
}

/**
 * Listening.
 */
self.addEventListener('message', e => onMessage(e.data));