# Maki Icons for React

Add Mapbox maki icons to your react application.

## Installation

SVG's are within the components and there is no need to add any other project dependencies (svgr etc)

```
npm install @alpaca-travel/react-maki-icons
```

## Usage

```javascript
import React from "react";

// Peel off the icon you need
import { Airport } from "alpaca-travel/react-maki-icons";

// Or the exact version you want
//import Airport from "@alpaca-travel/react-maki-icons/icons/airport-15";

// You can also access the SVG paths (scaled to 1024 applying with rel and rounding)
// import { iconsMap } from "@alpaca-travel/react-maki-icons"

export default function Component() {
  // Use style to apply to the svg component (like fill etc)
  return <Airport fill="#000000" />;
}
```

## Online Demo

[![Edit Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-maki-icons-1f6kq?file=/src/App.tsx)
