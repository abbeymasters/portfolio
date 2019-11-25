import { ADD_NAME, ADD_EMAIL, ADD_MESSAGE, ADD_MAILSENT, ADD_ERROR } from '../actions/contactActions'; 

const initialState = {
  fullName: '',
  email: '',
  message: '',
  error: null,
  mailSent: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NAME:
      return { ...state, fullName: action.payload };
    case ADD_EMAIL:
      return { ...state, email: action.payload };
    case ADD_MESSAGE:
      return { ...state, message: action.payload };
    case ADD_MAILSENT: 
      return { ...state, mailSent: action.payload };
    case ADD_ERROR: 
      return { ...state, error: 'Something went wrong!' };
    default:
      return state;
  }
}
