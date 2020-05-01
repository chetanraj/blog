---
path: "/compose-in-styled-system"
date: "2019-08-01"
update: "2020-04-30"
title: "🧐 What is compose-in-styled-system ?"
description: "The compose utility in the styled-system is used to combine multiple style functions together into one"
published: true
---

### As per the [official document](https://styled-system.com/api/#compose) of styled system
> The compose utility is used to combine multiple style functions together into one. This utility can help improve performance when using multiple style props functions on the same component.

In this post let us build a Button component using the styled-components and styled-system as shown below. Let us build this component using **border, color, shadow, space & typography** functions from the styled-system.

```js
import styled from ‘styled-components’;
import { border, color, shadow, space, typography } from 'styled-system';

const Buttons = styled.div( border, color, shadow, space, typography);

export default Buttons;
```

So when we use multiple functions like border, color, shadow, space & typography, this will invoke multiple functions on render which will hamper the performance of app. It is even worse when the whole component is wrapped with state.

Here comes the compose function to the rescue 🚀 which is the super hero 💠 of styled-system API. The compose function will combine the multiple functions into one, which will invoke only one function on render [saved by the compose function 😊]

```js
import styled from 'styled-components';
import { compose, border, color, shadow, space, typography } from 'styled-system';

const Buttons = styled.div(
  compose(
    border,
    color,
    shadow,
    space,
    typography
  )
);

export default Buttons;
```

So using the above component, you can define any kind of a `<Button/>`

```js
<Button fontSize={16} borderRadius={5} p={3} color=”#fff” bg=”#5269e7">Click here</Button>

<Button opacity={.4} color=”#fff” bg=”#222">Disabled</Button>
```

DEMO - [Click here](https://codesandbox.io/embed/buttons-yb04h?fontsize=14)
