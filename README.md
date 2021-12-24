# React App Events

Use global events in your React app with hooks

## Install the package

```
yarn add react-app-events
```

No extra setup is needed


## Listen for events

We use a hook for event listener.

```jsx
import React from 'react'
import useOnEvent from 'react-app-events/lib/useOnEvent'

export default function ComponentA(props) {
  useOnEvent('buttonClicked', data => {
    console.log(data)
  })
  return <div>Hello world</div>
}
```

## Fire events

```jsx
import React from 'react'
import fireEvent from 'react-app-events/lib/fireEvent'

export default function ComponentB(props) {
  return (
    <div>
      <button
        onClick={event => {
          fireEvent('buttonClicked', event)
        }}>
        Click me
      </button>
    </div>
  )
}
```
