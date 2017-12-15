import Component from './component';
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
    /**
     * Revert the state change so we're back in time.
     */
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
    /**
     * Should the component render
     * @param {Object} state - The current state at the time the component was going to render.
     */
    shouldComponentRender(state) {
        return true;
    }
    /**
     * Render the component
     *
     * @param {string} value - The value to add into the rendered component.
     * @returns {string} The stringified value to render
     */
    render(value = null) {
        if (this.shouldComponentRender(this.state)) {
            super.render(value);
        }
    }
}
