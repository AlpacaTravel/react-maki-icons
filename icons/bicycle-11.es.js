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

var bicycle11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path4804', d: ' M6.5,1.5c-0.6761-0.01-0.6761,1.0096,0,1H7V3.211L4.252,4.7813L3.7383,3.5h0.7148c0.6761,0.01,0.6761-1.0096,0-1H2.4258 c-0.6761-0.01-0.6761,1.0096,0,1h0.2344l0.4316,1.0781C2.9011,4.5311,2.7047,4.5001,2.5,4.5001c-1.3748,0-2.5,1.1252-2.5,2.5 s1.1252,2.5,2.5,2.5S5,8.3748,5,7.0001c0-0.4713-0.1399-0.9078-0.3691-1.2852l2.4707-1.4121L7.5039,4.711 C6.6216,5.0981,6,5.9792,6,7.0001c0,1.3748,1.1252,2.5,2.5,2.5s2.5-1.1252,2.5-2.5c0-1.2959-1.0034-2.3575-2.2695-2.4766L8,3.793V2 c0-0.2761-0.2239-0.5-0.5-0.5H6.5z M2.5,5.5C3.3344,5.5,4,6.1657,4,7S3.3344,8.5,2.5,8.5S1,7.8344,1,7S1.6656,5.5,2.5,5.5z M8.4551,5.504h0.002c0.0299,0.003,0.06,0.003,0.0898,0C9.3587,5.5289,10,6.1818,10,7.0001c0,0.8344-0.6656,1.5-1.5,1.5 S7,7.8345,7,7.0001C7,6.1811,7.6424,5.5279,8.4551,5.504L8.4551,5.504z' })], 'Bicycle11');

export default bicycle11;
