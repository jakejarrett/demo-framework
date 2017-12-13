import Component from './component';

export default class HTMLModifier {
    static render (component: Component) : any {
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