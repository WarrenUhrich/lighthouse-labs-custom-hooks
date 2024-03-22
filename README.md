# Lighthouse Labs | Custom Hooks

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-custom-hooks/tree/2024.03.22-web-immersive-national-5february2024) | [Vimeo Video Recording](https://vimeo.com/926380751/56243f97bc?share=copy)

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

## Example Hooks!

### [X] 1. "Toggle Hook" -> We want a re-usable state that can easily turn a value off/on || true/false.

1. Start by making a component that can successfully toggle something...
2. Refactor that functionality to exist in a custom hook.

### [X] 2. "Update Page Title Hook" -> We want to change the document title.

1. Start by making a component that can change the web page's title (the text we see in the tab.)
2. Refactor the core logic into a custom hook.

### [X] 3. "Counter Hook" -> <Counter>

1. Keep track of a number.
2. Increment by 1. (Let the developer choose the increment.)
3. Reset the number (to zero.)

## Resources

* [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
