import Component from './component';

export default class StatefulComponent extends Component {
    private __state:Object = {};
    private __previousState:Array<Object> = [];

    reset_state () : void {
        this.__state = {};
        this.__previousState = [];
    }

    /**
     * Revert the state change so we're back in time.
     */
    public revert_state () {
        this.__state = this.__previousState[this.__previousState.length - 2];
    }

    set state (state: Object) {
        /** Add the state to a previous state object. */
        this.__previousState.push(Object.assign({}, this.__state));

        Object.keys(state).map(value => {
            this.__state[value] = state[value];
        });
    }

    get state () : Object {
        return Object.assign({}, this.__state);
    }

    /**
     * Should the component render
     * @param {Object} state - The current state at the time the component was going to render.
     */
    public shouldComponentRender (state: Object) : Boolean {
        return true;
    }

    /**
     * Render the component
     * 
     * @param {string} value - The value to add into the rendered component.
     * @returns {string} The stringified value to render
     */
    render (value: string = null) : any {
        if (this.shouldComponentRender(this.state)) {
            super.render(value);
        }
    }
}