# Lighthouse Labs | Custom Hooks

* [ ] What are Custom Hooks?
* [ ] Example Custom Hooks!

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
