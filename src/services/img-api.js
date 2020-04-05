import axios from 'axios';
const KEY = '15289703-43002e1369874935da9758818';

export const fetchImg = (query = '', page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
        `,
    )
    .then(({ data }) => data.hits);
};
