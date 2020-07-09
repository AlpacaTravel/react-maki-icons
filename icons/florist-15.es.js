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

var florist15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M1.5,1A2.7,2.7,0,0,1,4,3l.5-3L5,3A2.7,2.7,0,0,1,7.5,1c-.2.03-1,.26-1,2v.083A1.959,1.959,0,0,1,4.5,5H4.417A1.959,1.959,0,0,1,2.5,3C2.5,1.261,1.7,1.03,1.5,1ZM12.012,11l3-.5-3-.5A2.686,2.686,0,0,0,14,7.5c-.03.2-.248,1-1.988,1a2,2,0,0,0,0,4c1.739,0,1.958.8,1.988,1A2.686,2.686,0,0,0,12.012,11ZM9.688,5.548a1,1,0,0,1,0-2,1,1,0,0,1,0-2,.986.986,0,0,1,.852.507l.023-.012a.978.978,0,0,1-.116-.444,1,1,0,1,1,2,0,.978.978,0,0,1-.116.444l.019.01a.986.986,0,0,1,.85-.5,1,1,0,0,1,.025,2,1,1,0,0,1-.025,2,.986.986,0,0,1-.85-.5l-.016.009a.978.978,0,0,1,.113.44,1,1,0,0,1-2,0,.978.978,0,0,1,.113-.44l-.02-.011a.986.986,0,0,1-.852.507Zm.71-1.995A1.051,1.051,0,1,0,11.449,2.5,1.051,1.051,0,0,0,10.4,3.553v0ZM4.946,11.444l-.516-.515L8.892,6.475A1.746,1.746,0,0,1,8.44,6.22L4.076,10.575l-.519-.518A16.051,16.051,0,0,0,4.912,6a3.373,3.373,0,0,1-.412.035c-.041,0-.073-.008-.112-.01A16.953,16.953,0,0,1,3.131,9.631L2.76,9.26a.246.246,0,0,0-.4.079L.231,14.445a.287.287,0,0,0-.016.089.25.25,0,0,0,.25.25.289.289,0,0,0,.1-.019l5.1-2.124a.246.246,0,0,0,.079-.4l-.372-.372a16.874,16.874,0,0,1,3.612-1.256c0-.059-.015-.106-.015-.166A3.349,3.349,0,0,1,9,10.089,16.076,16.076,0,0,0,4.946,11.444Z' })], 'Florist15');

export default florist15;
