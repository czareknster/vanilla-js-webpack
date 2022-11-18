const itIsArray = data => {
  if (Array.isArray(data)) {
    return true;
  }

  throw new Error('Input data is not array', data);
};

const arrayContainsNumbers = data => {
  itIsArray(data);

  const containNumbers = data.every(item => typeof item === 'number');
  if (containNumbers) {
    return true;
  }

  throw new Error('Input array contain not only numbers', data);
};

export default arrayContainsNumbers;
