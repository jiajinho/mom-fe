import { Viewport } from "types";

const format = {
  datetime: {
    server: "yyyy-MM-dd'T'HH:mm:ssxxx",
    client: "do MMM yyyy hh:mm aa"
  }
}

const viewport: Viewport = {
  sm: "487px",
  md: "768px",
  lg: "1024px",
  xl: "1920px"
}

export default {
  format,
  viewport,
  weatherPageSize: 10
}