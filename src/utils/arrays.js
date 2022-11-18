const itIsArray = data => {
  if (!Array.isArray(data)) {
    throw new Error('Input data is not array', data);
  } else {
    return true;
  }
};

const arrayContainsNumbers = data => {
  itIsArray(data);

  const containNumbers = data.every(item => typeof item === 'number');
  if (!containNumbers)
    throw new Error('Input array contain not only numbers', data);

  return true;
};

export default arrayContainsNumbers;
