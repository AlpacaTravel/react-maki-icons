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

var religiousBuddhist15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M13.4978,6.9989h-0.5329c-0.09997-1.10708-0.53528-2.15731-1.2478-3.0105l0.378-0.3784 c0.19605-0.19447,0.19733-0.51105,0.00286-0.7071C11.90698,2.71037,11.59733,2.70518,11.4,2.8912l0,0l-0.0123,0.0123L11.01,3.2815 c-0.85331-0.71298-1.90385-1.14864-3.0113-1.2488V1.5c0-0.27614-0.22386-0.5-0.5-0.5s-0.5,0.22386-0.5,0.5v0.5327 C5.8916,2.13306,4.84144,2.56871,3.9884,3.2815L3.61,2.9C3.41007,2.70952,3.09358,2.71717,2.9031,2.9171 c-0.184,0.19312-0.184,0.49668,0,0.6898l0.3784,0.3775C2.56787,4.83856,2.13216,5.89031,2.0327,6.9989H1.5 c-0.27614,0-0.5,0.22386-0.5,0.5s0.22386,0.5,0.5,0.5h0.5327c0.09987,1.10695,0.535,2.15711,1.2473,3.0103l-0.3779,0.3779 c-0.19538,0.19514-0.19557,0.51173-0.00043,0.70711c0.19053,0.19076,0.49798,0.19611,0.69503,0.01209L3.609,12.094l0.3779-0.3779 c0.8533,0.71312,1.90395,1.1488,3.0115,1.2488v0.5329c0,0.27614,0.22386,0.5,0.5,0.5s0.5-0.22386,0.5-0.5v-0.5329 c1.10719-0.10026,2.15744-0.53592,3.0105-1.2488l0.3779,0.3779c0.19514,0.19538,0.51173,0.19557,0.70711,0.00043 c0.19076-0.19053,0.19611-0.49798,0.01209-0.69503l-0.0123-0.0123l0,0l-0.3779-0.3779c0.71283-0.8531,1.14848-1.90333,1.2488-3.0105 h0.5329c0.27609-0.00544,0.49549-0.23366,0.49006-0.50975C13.98227,7.22064,13.76611,7.00435,13.4978,6.9989z M7.9987,3.0505 c0.83871,0.09248,1.63383,0.42154,2.2926,0.9488l-2.15,2.15c-0.04663-0.0218-0.09436-0.04116-0.143-0.058V3.0505H7.9987z M6.9987,3.0505V6.091c-0.04864,0.01684-0.09637,0.0362-0.143,0.058l-2.15-2.15c0.65897-0.52726,1.45431-0.85622,2.2932-0.9485 H6.9987z M3.9987,4.7062l2.15,2.15c-0.0218,0.04663-0.04116,0.09436-0.058,0.143H3.0505 c0.09243-0.83886,0.42154-1.63413,0.9489-2.293L3.9987,4.7062z M3.0505,7.9987H6.091c0.01687,0.04863,0.03623,0.09636,0.058,0.143 l-2.15,2.15C3.47173,9.63281,3.14276,8.83753,3.0505,7.9987z M6.9989,11.9471c-0.83871-0.09248-1.63383-0.42154-2.2926-0.9488 l2.15-2.15c0.04663,0.0218,0.09436,0.04116,0.143,0.058v3.0405L6.9989,11.9471z M7.9989,11.9471V8.9066 c0.04864-0.01683,0.09638-0.03619,0.143-0.058l2.15,2.15c-0.65895,0.5273-1.4543,0.85627-2.2932,0.9485H7.9989z M10.9989,10.2914 l-2.15-2.15c0.02177-0.04664,0.04113-0.09437,0.058-0.143h3.0415c-0.09276,0.83901-0.42232,1.6343-0.9502,2.293H10.9989z M8.9066,6.9989c-0.01684-0.04864-0.0362-0.09637-0.058-0.143l2.15-2.15c0.52726,0.65877,0.85632,1.45389,0.9488,2.2926H8.9066 V6.9989z' })], 'ReligiousBuddhist15');

export default religiousBuddhist15;
