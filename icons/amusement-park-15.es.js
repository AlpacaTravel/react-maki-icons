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

var amusementPark15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path5082', d: 'M7.5,0C3.919,0,1,2.919,1,6.5c0,2.3161,1.2251,4.3484,3.0566,5.5H4l-1,2h9l-1-2h-0.0566 C12.7749,10.8484,14,8.8161,14,6.5C14,2.919,11.081,0,7.5,0z M7.375,1.5059v3.5c-0.3108,0.026-0.6057,0.1482-0.8438,0.3496 L4.0566,2.8809C4.9243,2.0555,6.0851,1.5376,7.375,1.5059z M7.625,1.5059c1.2899,0.0317,2.4507,0.5496,3.3184,1.375L8.4688,5.3555 c-0.0007-0.0007-0.0013-0.0013-0.002-0.002C8.229,5.1532,7.9348,5.0317,7.625,5.0059V1.5059z M3.8809,3.0566l2.4746,2.4746 c-0.0007,0.0007-0.0013,0.0013-0.002,0.002C6.1532,5.771,6.0317,6.0652,6.0059,6.375h-3.5 C2.5376,5.0851,3.0555,3.9243,3.8809,3.0566z M11.1191,3.0566c0.8254,0.8676,1.3433,2.0285,1.375,3.3184h-3.5 c-0.026-0.3108-0.1482-0.6057-0.3496-0.8438L11.1191,3.0566z M2.5059,6.625h3.5c0.026,0.3108,0.1482,0.6057,0.3496,0.8438 L3.8809,9.9434C3.0555,9.0757,2.5376,7.9149,2.5059,6.625z M8.9941,6.625h3.5c-0.0317,1.2899-0.5496,2.4507-1.375,3.3184 L8.6445,7.4688c0.0007-0.0007,0.0013-0.0013,0.002-0.002C8.8468,7.229,8.9683,6.9348,8.9941,6.625z M6.5312,7.6445 c0.0007,0.0007,0.0013,0.0013,0.002,0.002C6.6716,7.7624,6.8297,7.8524,7,7.9121v3.5625c-1.1403-0.1124-2.1606-0.6108-2.9434-1.3555 L6.5312,7.6445z M8.4688,7.6445l2.4746,2.4746c-0.7828,0.7447-1.803,1.243-2.9434,1.3555V7.9121 C8.1711,7.852,8.33,7.7613,8.4688,7.6445z' })], 'AmusementPark15');

export default amusementPark15;
