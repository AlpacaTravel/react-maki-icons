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

var confectionery15 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0', id: 'confectionary-15' },
  React.createElement('path', { key: 's-0', d: 'M13,4a1,1,0,0,0-1-1,1,1,0,0,0-2,0V5.0673A3.4808,3.4808,0,0,0,4.3583,9H2a1,1,0,0,0,0,2,1,1,0,0,0,1,1,1,1,0,0,0,2,0V9.9326A3.4807,3.4807,0,0,0,10.6417,6H13a1,1,0,0,0,0-2ZM7.5,9.9925A2.484,2.484,0,0,1,6.3184,5.319a1.0809,1.0809,0,0,1,.5459.307A2.1243,2.1243,0,0,1,7.25,7.0117l.001.9561A2.5821,2.5821,0,0,0,7.76,9.7031a1.5462,1.5462,0,0,0,.2591.2333A2.4861,2.4861,0,0,1,7.5,9.9925ZM8.6815,9.681a1.0813,1.0813,0,0,1-.5458-.307A2.1243,2.1243,0,0,1,7.75,7.9883l-.001-.9561A2.5821,2.5821,0,0,0,7.24,5.2969a1.5557,1.5557,0,0,0-.2592-.2334A2.4843,2.4843,0,0,1,8.6815,9.681Z' })
)], 'Confectionery15');

export default confectionery15;
