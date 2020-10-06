const getDataFirstDay = (data) => {
    // const weatherData = data.list.length
    const weatherData = data.list;
  
    const firstDay = weatherData.shift()

    return firstDay
  };
  
  export default getDataFirstDay;
  