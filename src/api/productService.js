import Axios from 'axios';
import {environment} from '../../Singleton';

export const getProducts = async () => {
  const url = `${environment.api}`;
  const method = 'get';
  return Axios({
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response)
    .then(response => response.data)
    .catch(error => console.log(error));
};
