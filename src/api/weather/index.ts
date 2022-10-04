import { format } from 'date-fns';

import config from 'config';
import type { Response } from './type';
import axios from '../instance';

async function getLatest2Hour(date_time?: Date) {
  const serverTime = date_time ?
    format(date_time, config.format.datetime.server) :
    undefined;

  const response = await axios.get<Response>('environment/2-hour-weather-forecast', {
    params: {
      date_time: serverTime
    }
  });
  return response.data;
}

export default {
  getLatest2Hour
}