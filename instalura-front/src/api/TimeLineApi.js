import { list, like, comment, notification } from '../actions/actionCreator';
export default class TimeLineApi {

  static search(query) {
    return dispatch => {
      fetch(`http://localhost:3000/api/v1/timeline/posts/search/${query}`,
        {
          method: 'GET',
          headers: {
            'x-access-token': localStorage.getItem('auth-token'),
          }
        }
      ).then(response => {
        if (!response.ok) {
          throw new Error('Não foi possível realizar a pesquisa');
        }
        return response.json();
      }).then(data => {
        if (data.length > 0) {
          dispatch(notification(''));
        } else {
          dispatch(notification('nenhum post encontrado'));
        }
        const posts = TimeLineApi.updateLikeada(data);
        dispatch(list(posts));
        return posts;
      }).catch(err => console.log(err));
    }
  }

  static loadPosts(url) {
    return dispatch => {
      fetch(url,
        {
          headers: {
            'x-access-token': localStorage.getItem('auth-token')
          }
        }
      ).then(response => response.json())
        .then(data => {
          const posts = TimeLineApi.updateLikeada(data);
          dispatch(list(posts));
          return posts;
        }).catch(error => console.log('teste ', error.message));
    }

  }

  static updateLikeada(posts) {
    return posts.map(post => {
      post.likeada = post.likers.some(s => s.userlogin === localStorage.getItem('userlogin'));
      return post;
    });
  }

  static like(postid) {
    return dispatch => {
      fetch(`http://localhost:3000/api/v1/timeline/posts/${postid}/like`,
        {
          method: 'PUT',
          headers: {
            'x-access-token': localStorage.getItem('auth-token')
          }
        }
      ).then(response => {
        if (!response.ok) {
          throw new Error('Não foi possível realizar o like desta foto')
        }
        return response.json();
      }).then(data => {
        dispatch(like(postid, data));
        return data;
      }).catch(err => console.log(err));
    }
  }

  static comment(postid, commentString) {
    return dispatch => {
      fetch(`http://localhost:3000/api/v1/timeline/posts/${postid}/comment`,
        {
          method: 'POST',
          headers: {
            'x-access-token': localStorage.getItem('auth-token'),
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ commentString })
        }
      ).then(response => {
        if (!response.ok) {
          throw new Error('Não foi possível realizar o comentário desta foto');
        }
        return response.json();
      }).then(data => {
        dispatch(comment(postid, data));
        return data;
      }).catch(err => console.log(err));
    }
  }
}