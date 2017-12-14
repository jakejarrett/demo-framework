class Component {
    constructor(options) {
        this.type = "string";
        this.el_identifier = "body";
        this.el = document.querySelector(this.el_identifier);
        this.contents = '';
        this.children = [];
        Object.keys(options).map(option_key => {
            this[option_key] = options[option_key];
        });
        this.render();
    }
    /**
     * Render the component
     *
     * @param {string} value - The value to add into the rendered component.
     * @returns {string} The stringified value to render
     */
    render(value = null) {
        let return_value = '';
        if (null != value && typeof value === "string")
            return_value += value;
        return_value += this.contents;
        if (this.children.length !== 0)
            this.children.map(child => return_value += child.render());
        return return_value;
    }
}

class StatefulComponent extends Component {
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

class HTMLModifier {
    static render(component) {
        const type = component.type.toLocaleLowerCase();
        // Type coercion for falsey values so we default to a string
        if (type === "string" || type == null) {
            component.el.innerText = component.render();
        }
        if (type != null && type.toLocaleLowerCase() === "html") {
            component.el.innerHTML = component.render();
        }
    }
}

export { Component, StatefulComponent, HTMLModifier };