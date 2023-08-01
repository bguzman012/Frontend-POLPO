// app/containers/ChuckNorrisJokes.js

import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import H2 from 'components/H2';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import CenteredSection from './CenteredSection';


const ChuckNorrisJokes = ({ randomJoke, fetchRandomJoke }) => {
  return (
    <div>
       <CenteredSection>
          <H2>
          <FormattedMessage {...messages.tittleJoke} />
          </H2>
        </CenteredSection>
      <p>{randomJoke}</p>
      <Button onClick={fetchRandomJoke}><FormattedMessage {...messages.buttonJoke} /></Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  randomJoke: state.chuckNorris.randomJoke,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRandomJoke: () => dispatch({ type: 'FETCH_RANDOM_JOKE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChuckNorrisJokes);
