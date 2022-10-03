import axios from './instance';

async function getLatest2Hour(date_time: string) {
  const response = await axios.get('environment/2-hour-weather-forecast');
  return response;
}

export default {
  getLatest2Hour
}
