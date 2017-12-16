# Simple framework

## Why?
I just wanted to experiment with the idea of making a framework where i could get more granular control over how a component is rendered, but also have modern ideas like stateful & stateless components etc.

## Features
* Small <small>(1.83KB w/ all classes imported)</small>
* Stateless by default
* Stateful component w/ State reversion
    * `StatefulComponent.revert_state ()` will revert the state back one step
* Smart utilization of DOM
    * innerText when the contents is just text
    * innerHTML when it requires HTML parsing
* Modular
* Typescript definitions

## In Progress
* Profile the framework
* Write a basic application with it

## TODO
* Utilize a bundler
* Come up with a name
* Simplify any pain points
