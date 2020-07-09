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

var carRepair15 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0' },
  React.createElement('path', { key: 's-0', d: 'M10.9252,9.0103l-0.3636-2.1802C10.4824,6.3491,10.0713,6,9.583,6H5.417C4.9302,6,4.5186,6.3486,4.4385,6.8291 L4.0746,9.0117C3.4776,9.0436,3,9.5277,3,10.1327V13h1c0,0.5522,0.4477,1,1,1s1-0.4478,1-1h3c0,0.5522,0.4477,1,1,1s1-0.4478,1-1h1 v-2.8744C12,9.522,11.5219,9.0383,10.9252,9.0103z M4.75,12C4.3358,12,4,11.6642,4,11.25c0-0.4142,0.3358-0.75,0.75-0.75 s0.75,0.3358,0.75,0.75C5.5,11.6642,5.1642,12,4.75,12z M5.0887,9L5.417,7l4.1582-0.0068L9.9098,9H5.0887z M10.25,12 c-0.4142,0-0.75-0.3358-0.75-0.75c0-0.4142,0.3358-0.75,0.75-0.75S11,10.8358,11,11.25C11,11.6642,10.6642,12,10.25,12z' }),
  React.createElement('path', { key: 's-1', d: 'M12,2H5.7889C5.4029,1.1177,4.5247,0.5,3.5,0.5S1.5971,1.1177,1.2111,2H3.5L4,3L3.5,4H1.2111 C1.5972,4.8821,2.4754,5.5,3.5,5.5S5.4028,4.8821,5.7889,4H12c0.5527,0,1-0.4478,1-1S12.5527,2,12,2z' })
)], 'CarRepair15');

module.exports = carRepair15;
