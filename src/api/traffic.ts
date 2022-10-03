import axios from './instance';

async function getTrafficImages() {
  const response = await axios.get('transport/traffic-images');
  return response;
}

export default {
  getTrafficImages
}