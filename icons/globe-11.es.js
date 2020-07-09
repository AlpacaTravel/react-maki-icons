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

var globe11 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0' },
  React.createElement(
    'g',
    { key: 's-0' },
    React.createElement('path', { key: 's-0', d: 'M6.5,10H6V8.9496C7.0402,8.8331,7.9799,8.3841,8.682,7.682L8.1504,7.1504C7.4713,7.8294,6.5339,8.25,5.5,8.25 c-2.0677,0-3.75-1.6823-3.75-3.75c0-1.0339,0.4206-1.9713,1.0996-2.6504L2.318,1.318C1.5037,2.1323,1,3.2573,1,4.5 c0,2.314,1.7532,4.1979,4,4.4496V10H4.5C4.2239,10,4,10.2238,4,10.5C4,10.7761,4.2239,11,4.5,11h2C6.7761,11,7,10.7761,7,10.5 C7,10.2238,6.7761,10,6.5,10z' })
  ),
  React.createElement(
    'g',
    { key: 's-1' },
    React.createElement('path', { key: 's-0', d: 'M5.5,7C6.8807,7,8,5.8807,8,4.5C8,3.1193,6.8807,2,5.5,2S3,3.1193,3,4.5C3,5.8807,4.1193,7,5.5,7z M4.9549,2.5847 l0.4928,0.6168v0.8362l0.6129,1.1115h1.3224C7.2133,5.6406,6.8611,6.0414,6.4035,6.275L5.5,5.5h-1L3.5323,4.1791 C3.6572,3.4099,4.2178,2.7946,4.9549,2.5847z' })
  )
)], 'Globe11');

export default globe11;
