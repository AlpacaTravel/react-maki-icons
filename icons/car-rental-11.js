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

var carRental11 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0' },
  React.createElement('path', { key: 's-0', d: 'M9.0252,7H8.84L8.5615,5.3301C8.4824,4.8491,8.0713,4.5,7.583,4.5H3.417c-0.4883,0-0.8994,0.3491-0.9785,0.8291L2.1599,7 H1.981C1.4391,7,1,7.4391,1,7.9809V10h1c0,0.5522,0.4477,1,1,1s1-0.4478,1-1h3c0,0.5522,0.4477,1,1,1s1-0.4478,1-1h1V7.9748 C10,7.4364,9.5635,7,9.0252,7z M3.25,9C2.8358,9,2.5,8.6642,2.5,8.25c0-0.4142,0.3358-0.75,0.75-0.75S4,7.8358,4,8.25 C4,8.6642,3.6642,9,3.25,9z M3.1708,7L3.417,5.5l4.1582-0.0068L7.8264,7H3.1708z M7.75,9C7.3358,9,7,8.6642,7,8.25 C7,7.8358,7.3358,7.5,7.75,7.5S8.5,7.8358,8.5,8.25C8.5,8.6642,8.1642,9,7.75,9z' }),
  React.createElement('path', { key: 's-1', d: 'M9.4969,0H7.9973C7.4465,0,7,0.4465,7,0.9972V1H2.5l-1,1l1,1l1-1l1,1l1-1l1,1h0.5008C7.0031,3.5526,7.4509,4,8.004,4 h1.4938C9.7751,4,10,3.7751,10,3.4977V0.5031C10,0.2252,9.7748,0,9.4969,0z M9,2.5C9,2.7761,8.7761,3,8.5,3S8,2.7761,8,2.5v-1 C8,1.2238,8.2239,1,8.5,1S9,1.2238,9,1.5V2.5z' })
)], 'CarRental11');

module.exports = carRental11;
