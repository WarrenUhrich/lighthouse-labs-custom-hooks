# Lighthouse Labs | Custom Hooks

* [X] What are Custom Hooks?
* [ ] Example Custom Hooks!
    * [X] Toggle Hook -> `useToggle` -> state that can easily turn on and off
    1. Start by making a component that can toggle something...
    2. Refactor that code into a custom hook!
    * [X] Update Title Hook -> `useUpdateTitle` -> changes document title
    * [ ] Counter Hook -> `useCounter`
    1. ✅ Keep track of a number
    2. ✅ Increment the number
        * Choose how much to increment the number by
    3. ✅ Reset the number

## Custom Hooks!

* Custom hooks are helper functions that make use of React hooks
* Any time we have code that is repetitive in our components we can consider separating it out into its own custom hook
* Custom hooks can be used to help separate large logic blocks in our component into their own dedicated space (file and function)
* All custom hooks' names start with `use` -> `useState`, `useEffect`, `useReducer`
* Multiple components sharing the same custom hook, they do ***not*** share state.
* All custom hooks files can be `.js`, as our presentation layer is the component
    * (it is common for component files to instead use `.jsx`)