# Lighthouse Labs | Custom Hooks

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-custom-hooks/tree/2024.01.12-web-immersive-13november2023-east) | [Vimeo Video Recording](https://vimeo.com/902323507/7a6dff2c2b?share=copy)

* [X] What are Custom Hooks?
* [X] Example Custom Hooks!
    
### Custom Hooks

* From the [React Docs](https://react.dev/learn/reusing-logic-with-custom-hooks):
> Building your own Hooks lets you extract component logic into reusable functions.
* We can pull repetitive or complex code out of our components and move it into _custom hooks_
* _Custom hooks_ are just JavaScript functions that can use React hooks
* They must start with the prefix `use` so that React knows they are hooks
* Multiple components using the same custom hook **do not share state**

```js
// simple custom hook
const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

// inside of a component
useDocumentTitle('My New Title');
```

## Example Hook Goals:

### [X] Toggle Hook -> `useToggle` -> state that can easily turn on and off
1. Start by making a component that can toggle something...
2. Refactor that code into a custom hook!

### [X] Update Title Hook -> `useUpdateTitle` -> changes document title

### [X] Counter Hook -> `useCounter`

1. ✅ Keep track of a number
2. ✅ Increment the number
    * Choose how much to increment the number by
3. ✅ Reset the number

## Custom Hook Examples
- [Browser Dimensions](https://codesandbox.io/s/custom-hooks-exercise-browser-dimensions-d5tv7)
- [Mouse Position](https://codesandbox.io/s/eloquent-allen-dxfns?fontsize=14)

## Useful Links
- [React Docs: Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
- [Easy to Understand Hook Recipes](https://usehooks.com/)
- [![awesome](https://camo.githubusercontent.com/1997c7e760b163a61aba3a2c98f21be8c524be29/68747470733a2f2f617765736f6d652e72652f62616467652e737667) React Hooks Resource](https://github.com/rehooks/awesome-react-hooks)
