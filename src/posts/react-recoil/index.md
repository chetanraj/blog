---
path: '/react-recoil'
date: '2020-05-16'
title: '💫 Understanding Recoil - The state management system for React.'
description: 'Recoil is an experimental state management system for React by Facebook'
published: true
hero_image: "./react-recoil.png"
tags: ['react', 'recoil']
---

> Recoil works and thinks like React.

### Definition

Recoil is an experimental state management system for React by Facebook. It offers several out of the box abilities which are difficult to achieve with React ⚛️ alone.

Recoil lets you create a data-flow graph that flows from **atoms** through **selectors** and down into your React components.

### What are Atoms ?

Atoms are units of state, which can be subscribed individually unlike many state management systems. When an atom is updated, each component which is subscribed to it is re-rendered with the updated value.

```js
export const nameStateAtom = atom({
  key: "nameStateAtom", // an unique id
  default: "", // default value
});
```

Atoms always need a unique key, which is used for debugging, persistence and some APIs which let us see the map of all atoms.

The `atom()` function takes an object as a parameter, that object contains a `key` which is a unique id. Make sure that you don't create two atoms with the same key.

To read and write an atom from a component, use a hook called `useRecoilState`. It is the same as React's `useState` but the useRecoilState can be shared between components.

```js
function Input() {
  const [name, setName] = useRecoilState(nameStateAtom);

  const onChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="input">
      <input placeholder="Enter name" type="text" value={name} onChange={onChange} /><br />
      <div className="comment">
          The state is shared using <a href="https://recoiljs.org/">recoil</a>
      </div>
    </div>
  );
}
```

When we enter any value in the input box above, the value of the input in the `Input` component is shared with other components which are subscribed to this atom `nameStateAtom`.

### Selectors

A **selector** is a pure function which accepts atom as an input. When an atom is updated which is subscribed by the selector, the selector function will be re-evaluated.  Components can also subscribe to selectors just like atoms, and will then be re-rendered when the selectors change.

```js
export const nameStateSelector = selector({
  key: "nameStateSelector", // unique ID
  get: ({ get }) => {
    const text = get(nameStateAtom);
    return text;
  },
});
```

Selectors also needs a unique key and a `getter` function, computed value can be accessed in the component.

In the above snippet of code, the `nameStateSelector` has one dependency, that is `nameStateAtom`. When the `nameStateAtom` changes/updates the `nameStateSelector` executes the getter and computes the value.

The Selectors can be reading the `useRecoilValue()`, which takes an atom or selector as an argument.


### useRecoilValue(state)

This is one of the important hooks in the Recoil API. This hook will just subscribe the component to the given Recoil state, it is used to return the value of the given Recoil state.

This is the recommended hook to use when a component intends to read the state.

```js
import {atom, selector, useRecoilValue} from 'recoil';

const nameStateAtom = atom({
  key: 'nameStateAtom',
  default: ''
});

const nameStateSelector = selector({
  key: 'nameStateSelector',
  get: ({get}) => get(nameStateAtom)
});

function NameDisplay() {
  const name = useRecoilValue(nameStateAtom);
  const nameSelector = useRecoilValue(nameStateSelector);

  return (
    <>
      Name: {name}
      <br />
      Name from selector: {name}
    </>
  );
}
```

> If the value has to be accessed directly in the component, then use atom inside the `useRecoilValue()`. If any computation is required for the value, then use the selector.

### A sample project is available on <a target="_blank" href="https://github.com/chetanraj/react-recoil-example/">GitHub</a>.



### Talk about [Recoil](https://www.youtube.com/watch?v=_ISAA_Jt9kI) in React Europe
