import axios from 'axios';

// export const BASE_URL = 'https://api.curator.io/v1/feeds/ab2a9623-54f8-4335-ae63-53c0623bf670/posts';

export const BASE_URL = 'https://api.curator.io/v1/feeds/172fcca5-4e9c-4bb4-b11f-441db1a8cb0c/posts';


export const CURATOR_API_KEY=process.env.CURATOR_API_KEY;

const options = {
    params: {
      api_key: CURATOR_API_KEY
    },
  };

export const fetchPosts = async () => {
  const { data } = await axios.get(`${BASE_URL}`, options);
    console.log('loading data.. ');
    console.log(data.posts);
    console.log('post 0 id... ', data.posts[0].feed_id)
    console.log('post 0 text... \n\n', data.posts[0].text)
  return data;
};
