import * as R from 'ramda';

import arrayContainsNumbers from './arrays.js';

const findPairsEqual = (data, sum) =>
  R.when(
    arrayContainsNumbers,
    R.pipe(
      R.map(x => {
        const y = R.find(i => x + i === sum)(data);
        if (y) {
          return [x, y].sort();
        }
      }),
      R.reject(R.isNil),
      R.reduce((acc, item) => {
        if (!R.find(i => R.equals(i, item))(acc)) {
          acc.push(item);
        }

        return acc;
      }, [])
    )
  )(data);

export default findPairsEqual;
