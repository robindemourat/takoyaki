/**
 * Takoyaki Data Module
 * =====================
 *
 * Module in charge of data parsing & edition.
 */
import CSV from 'papaparse';
import {resolver} from './helpers';

/**
 * Constants.
 */
const DATA_PARSED = '§Data/Parsed';

/**
 * Default state.
 */
const DEFAULT_STATE = {
  data: [],
  headers: []
};

/**
 * The reducer.
 */
export default resolver(DEFAULT_STATE, {

  // When file is parsed
  [DATA_PARSED](state, action) {
    return {
      ...state,
      data: action.data,
      headers: action.headers
    };
  }
});

/**
 * Actions.
 */
export function parseFile(file, delimiter) {
  return dispatch => {

    // Parsing the full file with provided options
    CSV.parse(file, {
      delimiter,
      header: true,
      complete(results) {

        return dispatch({
          type: DATA_PARSED,
          data: results.data,
          headers: results.meta.fields
        });
      }
    });
  };
}