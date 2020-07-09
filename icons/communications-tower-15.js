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

var communicationsTower15 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0', id: 'communications-tower-15' },
  React.createElement('path', { key: 's-0', d: 'M11.8545,6.4336l-.4131-.2813a4.7623,4.7623,0,0,0,.2813-4.8779l-.0835-.1533L12.0747.875l.0908.167a5.2619,5.2619,0,0,1-.311,5.3916Zm1.1521,7.1316V14h-11v-.4348H4.4952L6.0439,6.4a.5.5,0,0,1,.4888-.3945h.7255V4.6014A1.14,1.14,0,0,1,6.3756,3.5a1.1568,1.1568,0,1,1,2.3136,0,1.14,1.14,0,0,1-.931,1.1112V6.0059h.7223A.5.5,0,0,1,8.9692,6.4l1.5478,7.1648ZM8.4543,8.751H6.5588L6.236,10.2441H8.777ZM6.1279,10.7441l-.3233,1.4952H9.2082l-.3231-1.4952ZM6.936,7.0059,6.6669,8.251H8.3463L8.0771,7.0059ZM5.5179,13.5652H9.4948l-.1786-.8259h-3.62ZM5.21,5.0137a2.7523,2.7523,0,0,1,.0161-3.0518L4.812,1.6826a3.25,3.25,0,0,0-.019,3.6065ZM10.7568,3.5a3.2433,3.2433,0,0,0-.5341-1.7861l-.418.2754a2.7517,2.7517,0,0,1-.0176,3.0488l.4141.2793A3.2341,3.2341,0,0,0,10.7568,3.5ZM3.5342,6.1182A4.7637,4.7637,0,0,1,3.3813,1.13L2.9478.88a5.2643,5.2643,0,0,0,.1694,5.5137Z' })
)], 'CommunicationsTower15');

module.exports = communicationsTower15;
