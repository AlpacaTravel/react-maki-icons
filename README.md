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
import Airport from "@alpaca-travel/react-maki-icons/icons/airport-11";

// Alternatively, import all
// import icons from '@alpaca-travel/react-maki-icons';

export default function Component() {
  // Use style to apply to the svg component (like fill etc)
  return <Airport fill="#000000" />;
}
```
