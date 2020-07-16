const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ latitude + '&lon='+ longitude + '&exclude=hourly,daily&units=metric&appid=7ea4e689b3bfc4c9985b8e794b61922b'

  request({url, json: true}, (error, {body}) => {
      if(error){
        callback('Unable to fetch weather', undefined)
      }else if(body.message){
        callback('Invalid Location', undefined)
      }
      else{
        callback(undefined, 'It is currently ' + body.current.temp + ' degrees but feels like ' + body.current.feels_like + ' degrees outside. And the general weather is ' + body.current.weather[0].description )
      }
  })
}

module.exports = forecast
