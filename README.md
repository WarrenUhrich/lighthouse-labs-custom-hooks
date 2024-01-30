# Lighthouse Labs | Custom Hooks

* [X] What are Custom Hooks?
* [X] Example Custom Hooks!

## To Explore Custom Hooks

So anytime we see that our code isn't very DRY... we want to break these re-used blocks of logic into re-usable functions!

Often this takes the form of helper functions, that may store in separate files.

What are some examples of hooks you've used so far?

* `useState`
* `useReducer`
* `useEffect`

Custom Hooks are basically helper functions that make use of built-in React hooks.

The React documentation specifies a few rules/ideas surrounding writing Custom Hooks:

1. We are able to pull repetitive code, or complex code, in our components and move it into a re-usable function (custom hook.)
2. Custom hooks are just JavaScript functions that use React hooks.
3. They must start with the prefix `use` so that React and React developers know that these are/use hooks.
4. Multiple components using the same custom hook ***do not*** share state.

## Example Hooks!

### [X] 1. "Toggle Hook" -> We want a re-usable state that can easily turn a value off/on || true/false.

1. Start by making a component that can successfully toggle something...
2. Refactor that functionality to exist in a custom hook.

### [X] 2. "Update Page Title Hook" -> We want to change the document title.

1. Start by making a component that can change the web page's title (the text we see in the tab.)
2. Refactor the core logic into a custom hook.

### [ ] 3. "Counter Hook" -> <Counter>

1. Keep track of a number.
2. Increment by 1. (Let the developer choose the increment.)
3. Reset the number (to zero.)
