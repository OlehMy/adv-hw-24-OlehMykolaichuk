import {applyMiddleware, createStore} from 'redux'
import RickPhoto from './img/rick.jpg'
import MortyPhoto from './img/morty.jpg'
import MrPoopybuttholePhoto from './img/mr-poopybutthole.jpg'
import thunk from 'redux-thunk';

const users = [
  {
    name: 'Rick Sanches',
    username: '@rick_C-137',
    avatar: RickPhoto,
  },
  {
    name: 'Morty Smith',
    username: '@morty',
    avatar: MortyPhoto,
  },
  {
    name: 'Mr Poopybutthole',
    username: '@poopybutthole',
    avatar: MrPoopybuttholePhoto,
  }
];

const initialState = {
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "load_user":
      return {
        ...state,
        users
      };
      case 'new_user':
        return {
            ...state,
            users: [...state.users, action.payload]
        };
    default:
      return state;
  }
};

export const loadUsers = () => ({
  type: "load_user"
});

export const newUser = (user) => async (dispatch, getState) => {
  try{
    const response = await fetch("http://domer.tech:9999/users", {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
    const json = await response.json();
    console.log('json:', JSON.stringify(json));
  } catch (error) {
    console.error('Error:', error);
  };

  dispatch({
    type: 'new_user',
    payload: user
  });
}
// export const newUser = (user) => ({
//   type: 'new_user',
//   payload: user
// });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;