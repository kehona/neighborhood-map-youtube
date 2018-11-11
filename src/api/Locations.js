const CLIENT_ID = "1JJJHSOT4I1D5FNH5YCGUTPSE0DVFH4Q4CVKXUD4TJQ5QQCB";
const CLIENT_SECRET = "URJG2NG3NW2SPUDPXDBSONB0POIYPXKD4RG1DGHHSVA4QL1O";

export const getLocations = () => {
  return fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=bentonville&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181101
`)
    .then(resp => resp.json())
    .then(result => result.response.groups[0].items);
};
