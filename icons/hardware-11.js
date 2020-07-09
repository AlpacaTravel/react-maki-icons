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

var hardware11 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0', id: 'GaLBQ6.tif_2_' },
  React.createElement(
    'g',
    { key: 's-0' },
    React.createElement('path', { key: 's-0', d: 'M1.2174,8.3652C0.8535,8.8127,0.9497,9.4896,1.423,9.8184c0.4178,0.2902,0.9442,0.238,1.3172-0.1347 c1.2813-1.2802,2.562-2.5611,3.841-3.8436C6.6447,5.7764,6.6952,5.7546,6.788,5.7863c0.4279,0.1458,0.8659,0.1627,1.3055,0.0611 c1.3402-0.3096,2.1605-1.6406,1.8354-2.9751C9.906,2.7783,9.8722,2.6868,9.8351,2.567C9.7998,2.6112,8.8376,3.5803,8.3764,4.0471 c-0.0587,0.0595-0.1167,0.0784-0.195,0.0665C8.0791,4.0979,7.2868,4.034,7,4C6.9522,3.5907,6.9268,3.1638,6.8846,2.7619 c-0.004-0.0378,0.0229-0.0894,0.0517-0.1185C7.2869,2.2885,8.2679,1.31,8.4116,1.1666C8.1,1.0195,7.5652,0.9615,7.1668,1.0263 c-1.5072,0.245-2.4274,1.7518-1.95,3.1974c0.0262,0.0795,0.0098,0.1259-0.0469,0.1824L1.2174,8.3652z' })
  )
)], 'Hardware11');

module.exports = hardware11;
