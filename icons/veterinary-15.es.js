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

var veterinary15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path3340', d: 'M7.5,6c-2.5,0-3,2.28-3,3.47l0,0c-0.6097,0.2059-1.1834,0.5062-1.7,0.89 c-0.871,0.6614-1.0492,1.8998-0.4,2.78c0.6799,0.8542,1.9081,1.0297,2.8,0.4c0.6779-0.4601,1.4808-0.701,2.3-0.69 c0.8192-0.011,1.6221,0.2299,2.3,0.69c0.8575,0.6854,2.1072,0.5515,2.8-0.3c0.6888-0.8134,0.5878-2.0313-0.2256-2.7201 c-0.0243-0.0206-0.0491-0.0406-0.0744-0.0599l-0.1-0.1c-0.5333-0.3564-1.1032-0.6548-1.7-0.89l0,0C10.5,8.29,10,6,7.5,6z' }), React.createElement('path', { key: 's-1', id: 'ellipse4153', d: 'M2.08,4.3c-0.7348,0.3676-1.0652,1.2371-0.76,2c0.064,0.8282,0.7809,1.4517,1.61,1.4 c0.7348-0.3676,1.0652-1.2371,0.76-2C3.626,4.8718,2.9091,4.2483,2.08,4.3z' }), React.createElement('path', { key: 's-2', id: 'ellipse4163', d: 'M12.93,4.3c0.7348,0.3676,1.0653,1.2371,0.76,2c-0.064,0.8282-0.7809,1.4517-1.61,1.4 c-0.7348-0.3676-1.0653-1.2371-0.76-2C11.384,4.8718,12.1009,4.2483,12.93,4.3z' }), React.createElement('path', { key: 's-3', id: 'ellipse4165', d: 'M5.08,1.3c-0.68,0.09-1,0.94-0.76,1.87C4.4301,3.9951,5.1003,4.6321,5.93,4.7c0.68-0.09,1-0.94,0.76-1.87 C6.5799,2.0049,5.9097,1.3679,5.08,1.3z' }), React.createElement('path', { key: 's-4', id: 'ellipse4167', d: 'M9.93,1.3c0.68,0.09,1,0.94,0.76,1.87C10.5791,3.9986,9.9036,4.6365,9.07,4.7c-0.68-0.08-1-0.94-0.76-1.87 C8.4209,2.0014,9.0964,1.3634,9.93,1.3z' })], 'Veterinary15');

export default veterinary15;
