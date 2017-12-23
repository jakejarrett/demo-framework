import Component from './component.js';
export default class StatefulComponent extends Component {
    constructor() {
        super(...arguments);
        this.__state = {};
        this.__previousState = [];
    }
    reset_state() {
        this.__state = {};
        this.__previousState = [];
    }
    revert_state() {
        this.__state = this.__previousState[this.__previousState.length - 2];
    }
    set state(state) {
        /** Add the state to a previous state object. */
        this.__previousState.push(Object.assign({}, this.__state));
        Object.keys(state).map(value => {
            this.__state[value] = state[value];
        });
    }
    get state() {
        return Object.assign({}, this.__state);
    }
    shouldComponentRender() {
        return true;
    }
    render(value = null) {
        if (this.shouldComponentRender()) {
            super.render(value);
        }
    }
}
