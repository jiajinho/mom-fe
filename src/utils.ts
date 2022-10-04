import { AreaMetadata } from "api/weather/types";
import { Location } from "types";

export function getNearestArea(location: Location, areaMetadata: AreaMetadata[]) {
  if (!areaMetadata.length) return null;

  const nearest = {
    distance: 100,
    area: areaMetadata[0]
  }

  for (let i = 1; i < areaMetadata.length; i++) {
    const xSq = Math.pow(location.latitude - areaMetadata[i].label_location.latitude, 2);
    const ySq = Math.pow(location.longitude - areaMetadata[i].label_location.longitude, 2);

    const distance = Math.sqrt(xSq + ySq);

    if (distance < nearest.distance) {
      nearest.distance = distance;
      nearest.area = areaMetadata[i];
    }
  }

  return nearest.area;
}