export const ADD_NAME = 'ADD_NAME';
export const addName = fullName => ({
  type: ADD_NAME,
  payload: fullName
});

export const ADD_EMAIL = 'ADD_EMAIL';
export const addEmail = email => ({
  type: ADD_EMAIL,
  payload: email
});

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = message => ({
  type: ADD_MESSAGE,
  payload: message
});

export const ADD_MAILSENT = 'ADD_MAILSENT';
export const addMailSent = data => ({
  type: ADD_MAILSENT,
  payload: data
});

export const ADD_ERROR = 'ADD_ERROR';
export const addError = error => ({
  type: ADD_ERROR,
  payload: error
});

