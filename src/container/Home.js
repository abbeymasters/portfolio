import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import { addName, addEmail, addMessage, addError, addMailSent } from '../actions/contactActions';
// import axios from 'axios';
import { getState } from '../selectors/contentSelectors';

const API_PATH = 'http://localhost:7890/portfolio/src/api/contact/index.php';

const Home = () => {
  const dispatch = useDispatch();
  const theState = useSelector(state => getState(state));

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = ({ target }) => {
    event.preventDefault();
    return fetch(API_PATH, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: theState
    })
      .then(result => {
        console.log(result);
        dispatch(addMailSent(result.data.sent));
      })
      .catch(error => dispatch(addError(error)));
  };

  //   axios({
  //     method: 'post',
  //     url: API_PATH,
  //     headers: { 'content-type': 'application/json' },
  //     data: theState
  //   })
  //     .then(result => {
  //       console.log('hi');
  //       dispatch(addMailSent(result.data.sent));
  //     })
  //     .catch(error => dispatch(addError(error)));
  // };

  const handleEmailChange = ({ target }) => {
    event.preventDefault();
    dispatch(addEmail(target.value));
  };

  const handleMessageChange = ({ target }) => {
    event.preventDefault();
    dispatch(addMessage(target.value));
  };

  const handleChange = ({ target }) => {
    event.preventDefault();
    dispatch(addName(target.value));
  };

  return (
    <>
      <AboutMe />
      <Contact handleChange={handleChange} handleEmail={handleEmailChange} handleMessage={handleMessageChange} handleSubmit={handleSubmit} />
    </>
  );
};

export default Home;
