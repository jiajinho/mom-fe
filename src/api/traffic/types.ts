export type Camera = {
  camera_id: string,
  image: string,
  image_metadata: {
    height: number,
    width: number,
    md5: string
  },
  location: { latitude: number, longitude: number },
  timestamp: string
}

export type Item = {
  timestamp: string,
  cameras: Camera[]
}

export type Response = {
  api_info: { status: "healthy" | unknown },
  items: Item[]
}