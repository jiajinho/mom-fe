# Take Home Technical Assessment
[Test question](https://docs.google.com/document/d/1YyOJyq460UM3j8EzQsFgR4_VRspXy_tcxv5HRfMthwg/edit)

Tech stack used: `React.js`

### Running in local environment
1) `git clone https://github.com/jiajinho/mom-fe.git`
2) `npm i`
3) `npm start`

### Getting the nearest area based on latitude & longitude
Traffic API returns a list of camera with its lat/long but not area name, while weather API returns a list of area and its lat/long.

To find the area of a camera currently resides in, Euclidean formula is used to find the nearest distance to an area. The space complexity in current implementation is O(n<sup>2</sup>).

> Euclidean distance formula: d = √[(x<sub>2</sub> – x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> – y<sub>1</sub>)<sup>2</sup>]