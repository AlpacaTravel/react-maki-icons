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

var golf11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path11685', d: 'M4.0492,0.638 C3.5323,1.1814,4.2729,1.813,4.7284,1.3132l0.4953-0.5434l2.3326,1.3937L3.3063,4.5C3.0126,4.6615,2.9648,4.9407,3.0724,5.2212 l0.8886,2.3165l-0.9355,2.8046C2.8974,10.7268,3.1975,10.991,3.5001,11c0.1954,0.0058,0.3919-0.093,0.4747-0.3413l0.9199-2.7636 l0.8535-0.2832L6,8.1172V10.5c0,0,0,0.5,0.5,0.5S7,10.5,7,10.5V8.1172C7,8,6.9893,7.8618,6.9358,7.7548L5.6546,4.415l2.5528-1.4035 c0.1868-0.0802,0.2901-0.2535,0.2901-0.5115c0-0.2259-0.2177-0.413-0.4564-0.5556L4.9047,0.0706 c-0.1595-0.0953-0.2749-0.043-0.3226,0.0071L4.0492,0.638z M3,2.0002c-0.5523,0-1,0.4477-1,1s0.4477,1,1,1s1-0.4477,1-1 S3.5523,2.0002,3,2.0002z' })], 'Golf11');

export default golf11;
