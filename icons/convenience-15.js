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

var convenience15 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0', id: 'convenience-store-15' },
  React.createElement('path', { key: 's-0', d: 'M2.9982,3.0687s.1875-1.062,1-1.062H5.0043V1.7276a.5.5,0,0,1,.5-.5H9.4882a.5.5,0,0,1,.5.5v.2791h1.01a.8324.8324,0,0,1,.6373.2937,1.7589,1.7589,0,0,1,.3627.7683s.3108,1.5719.5921,2.9181h-.938L11,3,3.982,2.9956,3.3336,5.9868H2.382Zm11,4.9144a1,1,0,0,1-.9992,1l-1.0008,3.973s-.1875,1.0417-1,1.0417h-7c-.8125,0-1-1.0417-1-1.0417L1.9822,8.98a.9985.9985,0,0,1,.016-1.9968h11A1,1,0,0,1,13.9982,7.9831ZM5.0327,12.13,5.03,11.0051,4.6392,9.4686a.5373.5373,0,1,0-1.0649.1445L3.78,11.0075l.1874,1.2672A.5373.5373,0,1,0,5.0327,12.13Zm2-2.5967A.5332.5332,0,0,0,6.4994,9l-.0039.0008L6.4886,9a.4992.4992,0,0,0-.3575.1509.529.529,0,0,0-.1648.3828v2.68a.5332.5332,0,1,0,1.0663,0Zm1.998,0A.5314.5314,0,0,0,8.694,9.04a.4992.4992,0,0,0-.393,0,.5312.5312,0,0,0-.3366.4934v2.68a.5331.5331,0,1,0,1.0662,0Zm2.3857.08a.5373.5373,0,1,0-1.0649-.1445L9.96,10.9938,9.9579,12.13a.5373.5373,0,1,0,1.0649.1446Z' })
)], 'Convenience15');

module.exports = convenience15;
