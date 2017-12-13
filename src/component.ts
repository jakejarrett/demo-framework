export default class Component {
    public type:string = "string";
    public el_identifier:string = "body";
    public el:HTMLElement = document.querySelector(this.el_identifier);
    public contents:string = '';
    public children:Array<Component> = [];

    constructor (options: Object) {
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
    render (value: string = null) : string {
        let return_value = '';
        if (null != value && typeof value === "string") return_value += value;
        return_value += this.contents;
        if (this.children.length !== 0) this.children.map(child => return_value += child.render());
        return return_value;
    }

}