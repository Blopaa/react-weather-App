const getDays = (data, loading) => {
  // const weatherData = data.list.length
  const weatherData = data.list;

  let newData = [];

  console.log(data);

  for (let i = 0; i < weatherData.length; i += 8) {
    newData.push(weatherData[i]);
  }

  return newData;
};

export default getDays;
