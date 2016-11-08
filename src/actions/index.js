import _ from 'lodash';
import RPS from '../libs/RPS/RPS';

export const FETCH_SHAPES = 'FETCH_SHAPES';
export const SET_USER_SHAPE = 'SET_USER_SHAPE';
export const RUN = 'RUN';
export const RESTART = 'RESTART';

export function fetchShapes() {
    let rps = RPS.getInstance();

    return {
        type: FETCH_SHAPES,
        payload: rps.shapes
    }
}

export function setUserShape(shapeId) {
    let shape = RPS.getInstance().getShapeById(shapeId);

    return {
        type: SET_USER_SHAPE,
        payload: shape
    }
}

export function run(userShape) {
    let rps = RPS.getInstance(),
        CPUShape = rps.randomShape();

    rps.compareShapes(userShape, CPUShape);

    let payload = {
        CPUShape: CPUShape,
        userScore: rps.userScore,
        CPUScore: rps.CPUScore,
        status: { finished: rps.finished, winner: rps.winner }
    };

    return {
        type: RUN,
        payload: payload
    }
}

export function restart() {
    RPS.getInstance().restart();
    return { type: RESTART };
}
