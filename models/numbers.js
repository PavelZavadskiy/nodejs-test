const getPercent = inNumber => {
  const number = Number(inNumber);
  if (number >= 100 && number < 200) {
    return { percent: '1' };
  } else if (number >= 200) {
    return { percent: '2' };
  } else {
    const err = new Error('Bad request');
    err.status = 400;
    throw err;
  }
};

module.exports = {
  getPercent,
};
