import { FETCH_SHAPES, SET_USER_SHAPE, RUN, RESTART } from '../actions/index';

const INITIAL_STATE = {
    shapes: [],
    user: { selectedShape: null, score: 0 },
    cpu: { selectedShape: null, score: 0 },
    status: { finished: false, winner: null }
};

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_SHAPES:
            return _.merge({}, state, { 'shapes': action.payload });
        case SET_USER_SHAPE:
            return _.merge({}, state, {
                'user': { 'selectedShape': action.payload },
                'cpu': { 'selectedShape': null },
                'roundWinner': null
            });
        case RUN:
            let { userScore, CPUScore, CPUShape, roundWinner, status } = action.payload;
            return _.merge({}, state, {
                'user': { 'score': userScore },
                'cpu': { 'score': CPUScore, 'selectedShape': CPUShape },
                'roundWinner': roundWinner,
                'status': status
            });
        case RESTART:
            return _.merge([], state, INITIAL_STATE);
        default:
            return state;
    }
}
