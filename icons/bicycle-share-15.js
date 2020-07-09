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

var bicycleShare15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'circle4604', d: ' M10,1C9.4477,1,9,1.4477,9,2c0,0.5523,0.4477,1,1,1s1-0.4477,1-1C11,1.4477,10.5523,1,10,1z M8.1445,2.9941 c-0.13,0.0005-0.2547,0.0517-0.3477,0.1426l-2.6406,2.5c-0.2256,0.2128-0.2051,0.5775,0.043,0.7637L7,7.75v2.75 c-0.01,0.6762,1.0096,0.6762,1,0v-3c0.0003-0.1574-0.0735-0.3057-0.1992-0.4004L7.0332,6.5234l1.818-1.7212l0.7484,0.9985 C9.6943,5.9265,9.8426,6.0003,10,6h1.5c0.6761,0.01,0.6761-1.0096,0-1h-1.25L9.5,4L8.9004,3.1992 C8.8103,3.0756,8.6685,3,8.5156,2.9941H8.1445z M3,7c-1.6569,0-3,1.3432-3,3s1.3431,3,3,3s3-1.3432,3-3S4.6569,7,3,7z M12,7 c-1.6569,0-3,1.3432-3,3s1.3431,3,3,3s3-1.3432,3-3S13.6569,7,12,7z M3,8c1.1046,0,2,0.8954,2,2s-0.8954,2-2,2s-2-0.8954-2-2 S1.8954,8,3,8z M12,8c1.1046,0,2,0.8954,2,2s-0.8954,2-2,2s-2-0.8954-2-2S10.8954,8,12,8z' })], 'BicycleShare15');

module.exports = bicycleShare15;
