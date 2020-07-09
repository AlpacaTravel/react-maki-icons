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

var shoe11 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0' },
  React.createElement('path', { key: 's-0', d: 'M7.5,5L5.8046,3.9827L4.8011,2.6763c-0.1514-0.1979-0.4349-0.2345-0.6275-0.083c-0.124,0.0961-0.1756,0.2449-0.164,0.3913 H4.0024V4H2V3.5C2,3.2238,1.7761,3,1.5,3S1,3.2238,1,3.5V4v1v1h3.5C5.5,6,6,7,7,7c1.0385,0,3,0,3,0l0.0038-0.5 C10.0038,5.9456,7.5,5,7.5,5z' }),
  React.createElement('path', { key: 's-1', d: 'M5.5273,7.584C5.1172,7.3101,4.6514,7,4,7H1v1.4707C1,8.763,1.237,9,1.5293,9h1.9414C3.763,9,4,8.763,4,8.4707V8 c0.3486,0,0.6377,0.1924,0.9727,0.416C5.3828,8.6895,5.8486,9,6.5,9h3C9.7764,9,10,8.7764,10,8.5V8H6.5 C6.1514,8,5.8623,7.8071,5.5273,7.584z' })
)], 'Shoe11');

export default shoe11;
