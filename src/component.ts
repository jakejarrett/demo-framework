export default class Component {
    public type:string = "string";
    public identifier:string = "#root";
    public el:HTMLElement = document.querySelector(this.identifier);
    public contents:string = '';
    public children:Array<Component> = [];

    constructor (options: Object) {
        Object.keys(options).map(option_key => {
            this[option_key] = options[option_key];
        });
    }

    assert_node () {
        this.el = document.body.querySelector(this.identifier);
        if (this.el === null) {
            let el = document.createElement("div");
            if (this.identifier.indexOf("#") !== -1) {
                el.id = this.identifier.split("#")[1];
            } else {
                el.classList.add(this.identifier.split(".")[1]);
            }
            document.body.appendChild(el);
            this.el = document.body.querySelector(this.identifier);
        }
    }

    /**
     * Render the component
     * 
     * @param {string} value - The value to add into the rendered component.
     * @returns {string} The stringified value to render
     */
    render (value: string = null) : string {
        let return_value = "";
        if (null != value && typeof value === "string") return_value += value;
        return_value += this.contents;
        return return_value
    }

}