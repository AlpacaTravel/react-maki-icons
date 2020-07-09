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

var library11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path5', d: ' M0,1v7c3.26,0,5.4902,2,5.4902,2S7.76,8,11,8V1C7,1,5.4902,2.7246,5.4902,2.7246S4,1,0,1z M1,2c1.1953-0.0313,3.053,0.4015,4,1.3477 L5.5,4L6,3.3477C6.9615,2.4183,8.8009,1.9878,10,2v5C8,7,6.6456,7.8564,5.4902,8.7812C4.3506,7.8533,3,7,1,7V2z M2,3.3027v0.1816 c0.8234,0.1688,2.0997,0.6868,3,1.1758V4.4316C4.0828,3.9535,2.8241,3.46,2,3.3027z M9,3.3027C8.1759,3.46,6.9172,3.9535,6,4.4316 v0.2285c0.9003-0.489,2.1766-1.007,3-1.1758V3.3027z M2,4.2227v0.1816c0.8217,0.1539,2.0985,0.6584,3,1.1328V5.3418 C4.0827,4.8663,2.8238,4.3752,2,4.2227z M9,4.2227C8.1762,4.3752,6.9173,4.8663,6,5.3418v0.1953 c0.9015-0.4744,2.1783-0.9789,3-1.1328V4.2227z M2,5.1172v0.1816c0.8216,0.1547,2.0984,0.659,3,1.1328V6.2363 C4.0825,5.7614,2.8236,5.2707,2,5.1172z M9,5.1172C8.1764,5.2707,6.9175,5.7614,6,6.2363v0.1953 c0.9016-0.4738,2.1784-0.9781,3-1.1328V5.1172z M2,6v0.1816C2.8201,6.322,4.097,6.811,5,7.2695V7.1191 C4.0825,6.6445,2.8236,6.1538,2,6z M9,6C8.1764,6.1538,6.9175,6.6445,6,7.1191v0.1504C6.903,6.811,8.1799,6.322,9,6.1816V6z' })], 'Library11');

export default library11;
