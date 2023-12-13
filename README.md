# react-ios-keyboard-viewport

[![npm version](https://badge.fury.io/js/react-ios-keyboard-viewport.svg)](http://badge.fury.io/js/react-ios-keyboard-viewport)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

A React hook that dynamically adjusts element positioning during iOS keyboard display, utilizing the Visual Viewport API for precise calculations.

## Demo
| Default                                                                                                       | Fixed                                                                                                       |
|---------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| ![default](./docs/default.MP4)                                                                                | ![fixed](./docs/fixed.MP4)                                                                                  |
| [Storybook](https://react-ios-keyboard-viewport.vercel.app/iframe.html?args=&id=demo--default&viewMode=story) | [Storybook](https://react-ios-keyboard-viewport.vercel.app/iframe.html?args=&id=demo--fixed&viewMode=story) | 

## Features
- 📱 Overriding styles specifically when the iOS keyboard is displayed
- 🐥 Easy to use
- 🫙 Zero Dependencies

## Installation
Install from npm:

```
npm install react-ios-keyboard-viewport
```

## Usage
### useFixedStyleWithIOsKeyboard
This hook generates a style object for elements that you want to fix to the Top/Center/Bottom of the screen.  
The style object is only generated when the keyboard is displayed on iOS, so please use this style object to override after styling for the normal display state.

```tsx
import { useFixedStyleWithIOsKeyboard } from 'react-ios-keyboard-viewport';

const Component = () => {
  const { fixedTop, fixedCenter, fixedBottom } = useFixedStyleWithIOsKeyboard();
  return (
    <div className="wrapper">
      <header className="header" style={fixedTop}>
        Fixed to Top
      </header>
      <div className="center" style={fixedCenter}>
        Fixed to Center
      </div>
      <footer className="footer" style={fixedBottom}>
        Fixed to Bottom
      </footer>
    </div>
  );
};
```

### useViewportDistanceFromPageTop 
This hook calculates the distance from the top of the page to the Top/Center/Bottom of the visualViewport.  
The calculated values are used in the styles of useFixedStyleWithIosKeyboard, but they can also be used to freely customize styles in cases where that hook is not suitable.

```tsx
import { useViewportDistanceFromPageTop } from 'react-ios-keyboard-viewport';
const { toTop, toCenter, toBottom } = useViewportDistanceFromPageTop();
```

### useIOsKeyboardHeight
This hook calculates the height of the virtual keyboard of iOS.   
It is used inside useFixedStyleWithIosKeyboard to determine whether the iOS keyboard is open.

```tsx
import { useiOsKeyboardHeight } from 'react-ios-keyboard-viewport';
const iOsKeyboardHeight = useiOsKeyboardHeight();
```

## Contribution
Feel free to open an issue or make a pull request.


## License
Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
