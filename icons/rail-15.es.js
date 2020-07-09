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

var rail15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M 3 1 C 2.4477 1 2 1.4477 2 2 L 2 10 C 2 10.5523 2.4477 11 3 11 L 12 11 C 12.5523 11 13 10.5523 13 10 L 13 2 C 13 1.4477 12.5523 1 12 1 L 3 1 z M 5.75 1.5 L 5.7597656 1.5 L 9.2597656 1.5 C 9.3978656 1.5 9.5097656 1.6119 9.5097656 1.75 C 9.5097656 1.8881 9.3978656 2 9.2597656 2 L 5.75 2 C 5.6119 2 5.5 1.8881 5.5 1.75 C 5.5 1.6119 5.6119 1.5 5.75 1.5 z M 3.5 3 L 7 3 L 7 7 L 3.5 7 C 3.2239 7 3 6.7761 3 6.5 L 3 3.5 C 3 3.2239 3.2239 3 3.5 3 z M 8 3 L 11.5 3 C 11.7761 3 12 3.2239 12 3.5 L 12 6.5 C 12 6.7761 11.7761 7 11.5 7 L 8 7 L 8 3 z M 5 8 C 5.5523 8 6 8.4477 6 9 C 6 9.5523 5.5523 10 5 10 C 4.4477 10 4 9.5523 4 9 C 4 8.4477 4.4477 8 5 8 z M 10 8 C 10.5523 8 11 8.4477 11 9 C 11 9.5523 10.5523 10 10 10 C 9.4477 10 9 9.5523 9 9 C 9 8.4477 9.4477 8 10 8 z M 10.445312 11.994141 C 10.380597 11.999652 10.314981 12.018581 10.253906 12.050781 C 10.030606 12.168381 9.9302313 12.433922 10.019531 12.669922 L 10.189453 13 L 4.8105469 13 L 4.9394531 12.730469 C 5.0371531 12.472169 4.9067375 12.183637 4.6484375 12.085938 C 4.4124375 11.996738 4.1468969 12.097113 4.0292969 12.320312 L 3.0292969 14.320312 C 3.0080969 14.377912 2.9986 14.4387 3 14.5 C 3 14.7761 3.2239 15 3.5 15 C 3.6802 14.999 3.8450875 14.899434 3.9296875 14.740234 L 3.9296875 14.689453 L 4 14.689453 L 4.3105469 14 L 10.689453 14 L 11 14.689453 L 11 14.740234 C 11.0846 14.899434 11.249488 14.999 11.429688 15 C 11.705787 15 11.929688 14.7761 11.929688 14.5 C 11.949587 14.4212 11.949587 14.338566 11.929688 14.259766 L 10.929688 12.259766 C 10.833163 12.076541 10.639459 11.977608 10.445312 11.994141 z ', id: 'path3' })], 'Rail15');

export default rail15;
