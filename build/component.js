export default class Component {
    constructor(options) {
        this.type = "text";
        this.identifier = "#root";
        this.el = document.querySelector(this.identifier);
        this.contents = '';
        this.children = [];
        Object.keys(options).map(option_key => {
            this[option_key] = options[option_key];
        });
    }
    shouldComponentRender() {
        return this.el.innerText === this.contents;
    }
    assert_node() {
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
    render(value = null) {
        let return_value = "";
        if (null != value && typeof value === "string") return_value += value;
        return_value += this.contents;
        return return_value;
    }
}
