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

var dogPark15 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0', id: 'g3' },
  React.createElement('path', { key: 's-0', d: 'M 10.300781 1.2207031 C 9.9144812 1.2207031 9.6 1.2 9.5 2 L 9.0996094 4.5214844 L 11.5 6.5 L 13.5 6.5 C 14.9 6.5 15 5.5410156 15 5.5410156 L 13.099609 3.3222656 C 12.399609 2.6222656 11.7 2.5 11 2.5 L 11 2 C 11 2 11.067481 1.2206031 10.300781 1.2207031 z M 4.75 1.5 C 4.75 1.5 3.7992187 1.5206031 3.1992188 1.7207031 C 2.5992187 1.9207031 2 2.6210938 2 3.6210938 L 2 7.5214844 C 2 9.2214844 1.3 9.5 1 9.5 C 1 9.5 0 9.5214844 0 10.521484 L 0 12.720703 C 0 12.720703 0.00078125 13.521484 0.80078125 13.521484 L 1 13.521484 L 1.5 13.521484 L 2 13.521484 L 2 13.021484 L 2 12.822266 C 2 12.422266 1.8 12.221094 1.5 12.121094 L 1.5 11.021484 C 2.5 11.021484 2.6 10.820703 3 10.720703 L 3.5507812 12.917969 C 3.6507813 13.217969 3.7507813 13.417578 4.0507812 13.517578 L 5.0507812 13.517578 L 6 13.5 L 6 12.699219 C 6 12.022819 5 12 5 12 L 5 9.5 L 8.5 9.5 L 9.1992188 12.121094 C 9.5992188 13.521094 10.5 13.5 10.5 13.5 L 11 13.5 L 12 13.5 L 12 12.699219 C 12 11.987419 11 12 11 12 L 11.099609 7.921875 L 8 5.5 L 3.5 5.5 L 3.5 3.5 C 3.5 3.1 3.7765 3.0053 4 3 C 4.4941 2.9882 4.75 3 4.75 3 C 5.1642 3 5.5 2.6642 5.5 2.25 C 5.5 1.8358 5.1642 1.5 4.75 1.5 z M 11.75 4 C 11.8881 4 12 4.1119 12 4.25 C 12 4.3881 11.8881 4.5 11.75 4.5 C 11.6119 4.5 11.5 4.3881 11.5 4.25 C 11.5 4.1119 11.6119 4 11.75 4 z ', id: 'path5' })
)], 'DogPark15');

export default dogPark15;
