// @flow

import { getSampleUser } from '../../../../utils/test-helpers';
import { getBlankGame } from 'shared/reducers/game';
import LandscapeControls from '../../LandscapeControls';

const user = getSampleUser();
const game = getBlankGame({ id: 'dce6b11e', user });

export default {
  component: LandscapeControls,

  container: {},

  reduxState: {
    jsReady: true,
    curUser: user,
    games: {
      [game.id]: game
    },
    curGame: game.id
  }
};
