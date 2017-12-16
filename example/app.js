import { Component, StatefulComponent, HTMLModifier } from '../build/index.min.js';

const Counter = new StatefulComponent({
    type: "string",
    identifier: "#counter",
    render (value) {
        if (this.state.count == null) {
            this.state = { count: 0 };
        }
        value = this.state.count;
        return value;
    }
});

const second_component = new Component({
    type: "html",
    contents: `<p>hello</p><section id="counter" style="color:#c0ffee"></section>`,
    children: [Counter]
});

HTMLModifier.render(second_component);

window.setInterval(_ => {
    const new_number = Counter.state.count + 1 || 0;
    Counter.state = { count: new_number }

    HTMLModifier.render(second_component);

}, 1000);