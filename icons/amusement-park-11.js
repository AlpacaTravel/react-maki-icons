'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

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

var amusementPark11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path5082', d: 'M5.5,1C3.0206,1,1,3.0206,1,5.5c0,1.7919,1.0627,3.3316,2.584,4.0547L2.5,11h6L7.416,9.5547 C8.9373,8.8316,10,7.2919,10,5.5C10,3.0206,7.9794,1,5.5,1z M5.375,2.0117v1.9941c-0.3108,0.026-0.6057,0.1482-0.8438,0.3496 L3.1191,2.9434C3.7146,2.3888,4.5013,2.0428,5.375,2.0117z M5.625,2.0117c0.8737,0.0311,1.6604,0.3771,2.2559,0.9316L6.4688,4.3555 c-0.0007-0.0007-0.0013-0.0013-0.002-0.002C6.229,4.1532,5.9348,4.0317,5.625,4.0059V2.0117z M2.9434,3.1191l1.4121,1.4121 c-0.0007,0.0007-0.0013,0.0013-0.002,0.002C4.1532,4.771,4.0317,5.0652,4.0059,5.375H2.0117 C2.0428,4.5013,2.3888,3.7146,2.9434,3.1191z M8.0566,3.1191C8.6112,3.7146,8.9572,4.5013,8.9883,5.375H6.9941 c-0.026-0.3108-0.1482-0.6057-0.3496-0.8438L8.0566,3.1191z M2.0117,5.625h1.9941c0.026,0.3108,0.1482,0.6057,0.3496,0.8438 L2.9434,7.8809C2.3888,7.2854,2.0428,6.4987,2.0117,5.625z M6.9941,5.625h1.9941C8.9572,6.4987,8.6112,7.2854,8.0566,7.8809 L6.6445,6.4688c0.0007-0.0007,0.0013-0.0013,0.002-0.002C6.8468,6.229,6.9683,5.9348,6.9941,5.625z M4.5312,6.6445 c0.0007,0.0007,0.0013,0.0013,0.002,0.002C4.6716,6.7624,4.8297,6.8524,5,6.9121v2.0391C4.2765,8.8476,3.6278,8.5303,3.1191,8.0566 L4.5312,6.6445z M6.4688,6.6445l1.4121,1.4121C7.3722,8.5303,6.7235,8.8476,6,8.9512V6.9121C6.1711,6.852,6.33,6.7613,6.4688,6.6445 z' })], 'AmusementPark11');

module.exports = amusementPark11;
