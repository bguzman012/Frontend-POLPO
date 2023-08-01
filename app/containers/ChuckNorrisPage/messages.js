
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.ChuckNorrisPage';

export default defineMessages({
  tittleJoke: {
    id: `${scope}.titulo.chiste`,
    defaultMessage: 'Chiste Aleatorio de Chuck Norris',
  },
  buttonJoke: {
    id: `${scope}.button.joke`,
    defaultMessage:
      'Obtener Nueva Broma',
  }
});
