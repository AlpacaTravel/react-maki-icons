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

var watermill15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M2,10.2L4,9l2.5,1.5l1.4659-0.8788C7.6592,9.4698,7.3716,9.285,7.1231,9.0536l1.4131-1.4131 C8.7672,7.836,9.0557,7.9606,9.375,7.9874V9.224l0.25,0.1501V7.9874c0.3193-0.0268,0.6078-0.1514,0.8388-0.3469l1.4131,1.4131 c-0.4059,0.3781-0.9044,0.6492-1.4528,0.8003L11.5,10.5l0.6984-0.4191C13.2863,9.2595,14,7.9682,14,6.5C14,4.0147,11.9853,2,9.5,2 C8.1917,2,7.0241,2.5674,6.2018,3.4587L4.5,2L1,5h1V10.2z M12.0536,8.8769l-1.4131-1.4131c0.1954-0.231,0.3201-0.5196,0.3469-0.8388 h1.9999C12.956,7.4946,12.6089,8.2806,12.0536,8.8769z M12.9874,6.375h-1.9999c-0.0268-0.3193-0.1514-0.6078-0.3469-0.8388 l1.4131-1.4131C12.6089,4.7193,12.956,5.5054,12.9874,6.375z M9.625,3.0126c0.8696,0.0314,1.6557,0.3784,2.2519,0.9337 l-1.4131,1.4131c-0.231-0.1954-0.5196-0.32-0.8388-0.3468C9.625,5.0126,9.625,3.0126,9.625,3.0126z M9.375,3.0126v1.9999 C9.0558,5.0394,8.7672,5.164,8.5362,5.3594L7.1231,3.9463C7.7193,3.3911,8.5054,3.044,9.375,3.0126z M6.9464,4.1231l1.4131,1.4131 C8.164,5.7672,8.0394,6.0557,8.0126,6.375h-2C6.044,5.5054,6.3911,4.7193,6.9464,4.1231z M8.0126,6.625 c0.0268,0.3192,0.1515,0.6078,0.3469,0.8388L6.9464,8.8769C6.3911,8.2807,6.044,7.4946,6.0126,6.625H8.0126z M9.002,10L6.5,11.5 L4,10l-2.5,1.5V13L4,11.5L6.5,13l2.502-1.5L11.5,13l2.5-1.5V10l-2.5,1.5L9.002,10z' })], 'Watermill15');

module.exports = watermill15;
