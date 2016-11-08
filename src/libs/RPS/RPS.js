import _ from 'lodash';
import { maxScore, shapes } from './config';

let _instance = null,
    _userScore = 0,
    _cpuScore = 0,
    _cpuShape = null,
    _finished = false,
    _winner = null;

class RPS {

    static getInstance() {
        if (!_instance) {
            _instance = new RPS();
        }
        return _instance;
    }

    get shapes() {
        return shapes;
    }

    get CPUShape() {
        return _cpuShape;
    }

    get userScore() {
        return _userScore;
    }

    get CPUScore() {
        return _cpuScore;
    }

    get finished() {
        return _finished;
    }

    get winner() {
        return _winner;
    }

    restart() {
        _userScore = 0;
        _cpuScore = 0;
        _cpuShape = null;
        _finished = false;
        _winner = null;
    }

    getShapeById(shapeId) {
        return _.find(this.shapes, { "id": shapeId })
    }

    randomShape() {
        return _.sample(shapes);
    }

    compareShapes(shape1, shape2) {
        let shape1Beats = this.canBeat(shape1, shape2),
            shape2Beats = this.canBeat(shape2, shape1);

        _winner = null;

        if (shape1Beats == true && shape2Beats == false) { // User wins
            _userScore += 1;
            _cpuScore = 0;
            _winner = 'user';

            if (_userScore >= maxScore) {
                    _finished = true;
                    this.restart();
            }

        } else if (shape1Beats == false && shape2Beats == true) { // CPU wins
            _userScore = 0;
            _cpuScore += 1;
            _winner = 'cpu';

            if (_cpuScore >= maxScore) {
                    _finished = true;
                    this.restart();
            }
        } else {
            _winner = 'draw';
        }
    }

    canBeat(shape1, shape2) {
        let pos = _.indexOf(shape1.beats, shape2.id);
        return (pos == -1) ? false : true;
    }
}

export default RPS;
