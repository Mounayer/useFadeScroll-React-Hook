The useFadeScroll React Hook
-

This hook simply allows you to gradually display an element as soon as the element's position is on the display screen.

A video demonstrating how your elements would behave after applying the hook: [useFadeScroll React Hook Showcase](https://www.youtube.com/watch?v=o8jKOes-93E)

A video demonstrating how to apply the useFadeScroll hook on your elements: [How To Use the useFadeScroll React Hook](https://www.youtube.com/watch?v=6s5WfGONCeQ)

How To Use
-

Accepts an array of `useRef()` for elements.

#### Step 1: Import necessary hooks and components

In the beginning of your component:

```javascript
import { useRef } from "react";
import useFadeScroll from "@/components/hooks/useFadeScroll";
```

#### Step 2: Initialize useRef and useFadeScroll in the component body

In your component's body:

```javascript
const elementsRef = useRef([]);
useFadeScroll(elementsRef.current);
```

#### Step 3: Add required attributes to the elements

For every element you want to use this on, you need to add the following attributes:

- `className="faded"` - Can be customized in global.css for transition effects, opacity 0.
- `ref={(el) => (elementsRef.current[0] = el)}` - Increment for every extra element.


#### Example Use:

```javascript
import { useRef } from "react";
import useFadeScroll from "../../components/hooks/useFadeScroll";

export default function Home() {
  // Create mutable reference object that contains an empty array
  // using the useRef hook from React
  const elementsRef = useRef([]);

  // Pass the current value of the mutable reference to useFadeScroll
  useFadeScroll(elementsRef.current);

  let paragraphs = [];
  for (let i = 0; i < 15; ++i) {
    paragraphs.push({
      header: "Header",
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Pellentesque mattis molestie augue non interdum.
        Vivamus nunc lectus, posuere id nisi vitae, tempor rutrum quam.
        Praesent quis porttitor lorem. Phasellus tincidunt commodo sem eu interdum.
        Nunc eget leo vel orci varius blandit.`,
    });
  }

  let idx = 0;
  const element = paragraphs.map((i) => {
    return (
      <>
        <h1 className="faded" ref={(el) => (elementsRef.current[idx++] = el)}>
          {i["header"]}
        </h1>
        <p className="faded" ref={(el) => (elementsRef.current[idx++] = el)}>
          {i["paragraph"]}
        </p>
      </>
    );
  });

  return <>{element}</>;
}
```

Happy Coding!
