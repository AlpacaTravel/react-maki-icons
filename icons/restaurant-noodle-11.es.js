import React from 'react';
import PropTypes from 'prop-types';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function createSvgIcon(children, name) {
  // Props
  var size = Number(name.replace(/[^\d]+/, ""));

  // Build the component to return
  var Component = function Component(props, ref) {
    return React.createElement(
      SvgIconComponent,
      _extends({ ref: ref }, props, { size: size }),
      children
    );
  };

  if (process.env.NODE_ENV !== "production") {
    Component.displayName = name;
  }

  return React.memo(React.forwardRef(Component));
}

var SvgIcon = function SvgIcon(props, ref) {
  var _props$size = props.size,
      size = _props$size === undefined ? 11 : _props$size;
  var style = props.style,
      className = props.className,
      htmlColor = props.htmlColor,
      _props$component = props.component,
      Component = _props$component === undefined ? "svg" : _props$component,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === undefined ? "0 0 " + size + " " + size : _props$viewBox,
      children = props.children,
      titleAccess = props.titleAccess,
      other = objectWithoutProperties(props, ["style", "className", "htmlColor", "component", "viewBox", "children", "titleAccess"]);


  return React.createElement(
    Component,
    _extends({
      className: className,
      style: style,
      viewBox: viewBox,
      focusable: false,
      "aria-hidden": titleAccess ? undefined : true,
      role: titleAccess ? "img" : undefined,
      color: htmlColor,
      ref: ref
    }, other),
    children,
    titleAccess ? React.createElement(
      "title",
      null,
      titleAccess
    ) : null
  );
};

var SvgIconComponent = React.forwardRef(SvgIcon);

SvgIcon.propTypes = {
  style: PropTypes.any,
  className: PropTypes.string,
  component: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
  children: PropTypes.any
};

SvgIcon.defaultProps = {
  style: null,
  children: null,
  component: null,
  className: null
};

var restaurantNoodle11 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0', id: 'restaurant-noodle-11' },
  React.createElement('path', { key: 's-0', d: 'M3.4688,8.81,1,6.625V6h9v.625L7.5156,8.8259ZM2.9934,1.7137a.3324.3324,0,0,0-.6648,0v.88l-1.0979.24a.25.25,0,0,0,.0928.4913L2.3286,3.148V3.58L1.25,3.6019a.25.25,0,1,0,0,.5l1.0786.0221V5.3249h.6648ZM9.5,3.3519l-.4912.1932-4.1764.046V2.6652l4.0543-.7879.5192.1141A.5.5,0,1,0,9.22,1.0088L8.7751,1.28l-3.9427.8471V1.7137a.3324.3324,0,0,0-.6648,0v.5575l-.6259.1368v.4788l.6259-.11v.8208L3.5417,3.61v.4863l5.4566.0394L9.5,4.3519a.5.5,0,1,0,0-1ZM7.5313,9.7435H3.4531V9.988H7.5313Z' })
)], 'RestaurantNoodle11');

export default restaurantNoodle11;
