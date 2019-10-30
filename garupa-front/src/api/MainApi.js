import { loadData } from '../actions/actionCreator';
export default class MainApi {

  static loadDataInitial() {
    return dispatch => {
      fetch(`http://localhost:3001/api/v1/main/likes`,
        {
          method: 'GET',
          headers: {
            'x-access-token': localStorage.getItem('auth-token')
          }
        }
      ).then(response => response.json())
        .then(data => {
          dispatch(loadData(data));
          return data;
        }).catch(error => console.log('teste ', error.message));
    }
  }

  static deslike() {
    return dispatch => {
      fetch(`http://localhost:3001/api/v1/main/deslike`,
        {
          method: 'POST',
          headers: {
            'x-access-token': localStorage.getItem('auth-token'),
          }
        }
      ).then(response => {
        if (!response.ok) {
          throw new Error('Não foi possível realizar o deslike');
        }
        return response.json();
      }).then(data => {
        dispatch(loadData(data));
        return data;
      }).catch(err => console.log(err));
    }
  }

  static like() {
    return dispatch => {
      fetch(`http://localhost:3001/api/v1/main/like`,
        {
          method: 'POST',
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
        dispatch(loadData(data));
        return data;
      }).catch(err => console.log(err));
    }
  }
}