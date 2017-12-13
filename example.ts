import { HTMLModifier, Component } from './src/index';

const first_component = new Component({
    type: "html",
    contents: '<p>Hello world</p>',
    el_identifier: "#hello"
});

const second_component = new Component({
    type: "html",
    contents: `<p>hello</p><section id="hello"></section>`,
    children: [first_component]
});

HTMLModifier.render(second_component);