import { format } from 'date-fns';

import config from 'config';
import type { Response } from './types';
import axios from '../instance';

async function getTrafficImages(date_time?: Date) {
  const serverTime = date_time ?
    format(date_time, config.format.datetime.server) :
    undefined;

  const response = await axios.get<Response>('transport/traffic-images', {
    params: {
      date_time: serverTime
    }
  });

  return response.data;
}

export default {
  getTrafficImages
}