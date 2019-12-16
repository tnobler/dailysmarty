import axios from 'axios';

export function fetchRecentPosts() {
  return function(dispatch) {
    axios.get('https://api.dailysmarty.com/posts')
      .then(response => {
        console.log(response.data.posts);
      })
  }
}