export const getQueryString = (params: { [key in string]: any }) => {
  let queryString = '';
  for (const elem in params) {
    if (typeof params[elem] === 'object') {
      for (const subElem in params[elem]) {
        queryString += `${elem}[${subElem}]=${params[elem][subElem]}&`;
      }
    } else {
      queryString += `${elem}=${params[elem]}&`;
    }
  }

  return queryString;
};
