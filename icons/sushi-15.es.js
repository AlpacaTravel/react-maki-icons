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

var sushi15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path4999', d: 'M5.5,3C5.2239,3,5,3.2239,5,3.5H2.75C1.2265,3.5,0,4.7265,0,6.25c0,0.8274,0.3687,1.5592,0.9434,2.0625 C0.3803,8.6675,0,9.2893,0,10c0,1.0994,0.9006,2,2,2h3.5h2H10c1.0994,0,2-0.9006,2-2c0-0.4883-0.1863-0.9294-0.4805-1.2773 l2.1777,0.9629c0.3716,0.1831,0.8213,0.0303,1.0044-0.3413c0.1831-0.3716,0.0303-0.8213-0.3413-1.0044 c-0.0188-0.0093-0.038-0.0178-0.0576-0.0254l-1.8105-0.8027l1.6309-0.2715c0.4099-0.0599,0.6936-0.4408,0.6337-0.8507 c-0.0544-0.3724-0.3765-0.6469-0.7528-0.6415c-0.0426,0.0003-0.085,0.0042-0.127,0.0117l-2.1309,0.3555 C11.2595,4.9521,10.0387,3.7837,8,3.5488V3.5C8,3.2239,7.7761,3,7.5,3H5.5z M6,4h1v5v2H6V9V4z M9.5,8 c0.259,0,0.4638,0.1974,0.4902,0.4492l0.0762-0.1328c0.1385-0.2399,0.4437-0.3201,0.6836-0.1816s0.3201,0.4418,0.1816,0.6816 l-0.2578,0.4473C10.8727,9.445,11,9.7021,11,10c0,0.5626-0.4374,1-1,1H8V9h1V8.5C9,8.223,9.223,8,9.5,8z M2.4395,8.0703 c0.1934-0.0242,0.3903,0.0662,0.4941,0.2461l0.2012,0.3477C3.226,8.5647,3.3538,8.5,3.5,8.5C3.777,8.5,4,8.723,4,9h1v2H2 c-0.5626,0-1-0.4374-1-1s0.4374-1,1-1h0.1738L2.0684,8.8164C1.9299,8.5765,2.0101,8.2733,2.25,8.1348 C2.31,8.1001,2.375,8.0784,2.4395,8.0703z' })], 'Sushi15');

export default sushi15;