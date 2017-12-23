export default class HTMLModifier {
    static render(component) {
        const type = component.type.toLocaleLowerCase();
        component.assert_node();
        if (type === "string" || type == null && component.shouldComponentRender() !== false) component.el.innerText = component.render();
        if (type != null && type.toLocaleLowerCase() === "html" && component.shouldComponentRender()) component.el.innerHTML = component.render();
        component.children.map(child => this.render(child));
    }
}
