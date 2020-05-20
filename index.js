"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactjsPopup = _interopRequireDefault(require("reactjs-popup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PreviewLink = /*#__PURE__*/function (_Component) {
  _inherits(PreviewLink, _Component);

  var _super = _createSuper(PreviewLink);

  function PreviewLink() {
    var _this;

    _classCallCheck(this, PreviewLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      response: "",
      position: "bottom left"
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillMount", function () {
      _this.fetchHTML();
    });

    _defineProperty(_assertThisInitialized(_this), "fetchHTML", function () {
      if (_this.state.response == "") {
        var getHTMLRequest = new XMLHttpRequest();

        getHTMLRequest.onreadystatechange = function () {
          if (getHTMLRequest.response != null && getHTMLRequest.response.length > 0) {
            _this.setState({
              response: getHTMLRequest.response[0]
            });

            console.log(_this.state.response);
          }
        };

        getHTMLRequest.open('POST', 'https://node-link-scraper.herokuapp.com/', true);
        getHTMLRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        getHTMLRequest.send(JSON.stringify({
          "text": _this.props.href
        }));
        getHTMLRequest.responseType = 'json';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      console.log(document.getElementById(_this.props.children));
      console.log(document.getElementById(_this.props.children).getBoundingClientRect().left);
      console.log(window.innerWidth / 2);

      if (document.getElementById(_this.props.children).getBoundingClientRect().left < window.innerWidth / 2) {
        _this.setState({
          position: "bottom left"
        });
      } else {
        _this.setState({
          position: "bottom right"
        });
      }
    });

    return _this;
  }

  _createClass(PreviewLink, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        onMouseEnter: this.mouseEnterEvent,
        onMouseLeave: this.mouseLeaveEvent,
        style: this.props.style,
        className: this.props.className
      }, /*#__PURE__*/_react["default"].createElement(_reactjsPopup["default"], {
        arrowStyle: {
          height: "0px",
          display: "none"
        },
        id: "preview-link-popup",
        mouseEnterDelay: "0",
        mouseLeaveDelay: "100",
        contentStyle: {
          width: "fit-content",
          maxWidth: "50vw",
          padding: "15px",
          paddingRight: "25px"
        },
        position: this.state.position,
        on: "hover",
        trigger: /*#__PURE__*/_react["default"].createElement("a", {
          id: this.props.children,
          href: this.props.href
        }, this.props.children)
      }, this.state.response != null ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
        style: {
          height: "110px",
          paddingRight: "15px",
          "float": "left"
        },
        src: this.state.response.image != undefined ? this.state.response.image : this.state.response.favicon != undefined ? this.state.response.favicon : ""
      }), /*#__PURE__*/_react["default"].createElement("p", {
        style: {
          padding: "0px",
          lineHeight: "1.25em",
          margin: "0px",
          paddingBottom: "5px",
          fontWeight: "500",
          fontSize: "95%"
        }
      }, this.state.response.title), /*#__PURE__*/_react["default"].createElement("hr", {
        style: {
          padding: "0px",
          margin: "2px 0px",
          border: "0px",
          height: "1px",
          backgroundColor: "#ecf0f1"
        }
      }), /*#__PURE__*/_react["default"].createElement("p", {
        style: {
          display: "block",
          padding: "5px",
          lineHeight: "1.25em",
          fontWeight: "500",
          margin: "0px",
          fontSize: "75%"
        }
      }, this.state.response.url), /*#__PURE__*/_react["default"].createElement("p", {
        style: {
          display: "flow-root",
          padding: "0px",
          lineHeight: "1.5em",
          fontWeight: "300",
          margin: "0px",
          fontSize: "75%"
        }
      }, this.state.response.description)) : /*#__PURE__*/_react["default"].createElement("div", null)));
    }
  }]);

  return PreviewLink;
}(_react.Component);

exports["default"] = PreviewLink;
