const getDataEvery24h = (data) => {
  // const weatherData = data.list.length
  const weatherData = data.list;

  let newData = [];

  for (let i = parseInt(0); i < weatherData.length; i += 8) {
    newData.push(data.list[i])
  }

  return newData;
};

export default getDataEvery24h;
