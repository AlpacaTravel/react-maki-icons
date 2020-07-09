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

var basketball11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'icon_concepts:_sports_leisure', d: 'M2.63,3.51a5.1555,5.1555,0,0,1,.34,1.48H2.04A3.2586,3.2586,0,0,1,2.63,3.51Zm.55-.63a6.2022,6.2022,0,0,1,.55,2.11H5.12V2.01A3.4256,3.4256,0,0,0,3.18,2.88Zm2.7-.87V4.99H7.27a6.2022,6.2022,0,0,1,.55-2.11A3.4256,3.4256,0,0,0,5.88,2.01Zm2.49,1.5a5.1555,5.1555,0,0,0-.34,1.48h.93A3.2586,3.2586,0,0,0,8.37,3.51ZM9.9,6.5a.4952.4952,0,0,1-.49.5H8.44L7.91,8.05v1.7a.2176.2176,0,0,1-.14.2.236.236,0,0,1-.08.02.1987.1987,0,0,1-.16-.07l-.75-.74-1.16.77a.2107.2107,0,0,1-.24,0L4.22,9.16l-.75.74a.2222.2222,0,0,1-.38-.15V8.05L2.57,7H1.6a.5.5,0,1,1,0-1H9.4a.4951.4951,0,0,1,.5.49ZM3.53,8V9.22l.5-.5c.01,0,.01-.01.02-.01L5.1,7H3.06l.45.9A.3561.3561,0,0,1,3.53,8Zm2.97.82-1-1.63-1,1.63,1,.67ZM7.94,7H5.9L6.95,8.71c.01,0,.01.01.02.01l.5.5V8a.3561.3561,0,0,1,.02-.1Z' })], 'Basketball11');

module.exports = basketball11;
