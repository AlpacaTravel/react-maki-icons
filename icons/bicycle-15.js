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

var bicycle15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path4668', d: ' M7.5,2c-0.6761-0.01-0.6761,1.0096,0,1H9v1.2656l-2.8027,2.334L5.2226,4H5.5c0.6761,0.01,0.6761-1.0096,0-1h-2 c-0.6761-0.01-0.6761,1.0096,0,1h0.6523L5.043,6.375C4.5752,6.1424,4.0559,6,3.5,6C1.5729,6,0,7.5729,0,9.5S1.5729,13,3.5,13 S7,11.4271,7,9.5c0-0.6699-0.2003-1.2911-0.5293-1.8242L9.291,5.3262l0.4629,1.1602C8.7114,7.0937,8,8.2112,8,9.5 c0,1.9271,1.5729,3.5,3.5,3.5S15,11.4271,15,9.5S13.4271,6,11.5,6c-0.2831,0-0.5544,0.0434-0.8184,0.1074L10,4.4023V2.5 c0-0.2761-0.2239-0.5-0.5-0.5H7.5z M3.5,7c0.5923,0,1.1276,0.2119,1.5547,0.5527l-1.875,1.5625 c-0.5109,0.4273,0.1278,1.1945,0.6406,0.7695l1.875-1.5625C5.8835,8.674,6,9.0711,6,9.5C6,10.8866,4.8866,12,3.5,12S1,10.8866,1,9.5 S2.1133,7,3.5,7L3.5,7z M11.5,7C12.8866,7,14,8.1134,14,9.5S12.8866,12,11.5,12S9,10.8866,9,9.5c0-0.877,0.4468-1.6421,1.125-2.0879 l0.9102,2.2734c0.246,0.6231,1.1804,0.2501,0.9297-0.3711l-0.9082-2.2695C11.2009,7.0193,11.3481,7,11.5,7L11.5,7z' })], 'Bicycle15');

module.exports = bicycle15;
