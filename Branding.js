"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("@react/react-spectrum/Icon"));

var _acrobat_reader_appicon_ = _interopRequireDefault(require("dc-icons/global/acrobat_reader_appicon_24.svg"));

var _Heading = _interopRequireDefault(require("@react/react-spectrum/Heading"));

var _reactIntl = require("react-intl");

var _AnalyticsConstants = _interopRequireDefault(require("../../../../../constants/AnalyticsConstants"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../../util/ServiceRegistry"));

require("!style-loader!css-loader!./Branding.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2019 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
const BRANDING_TITLE_KEY = "ADOBE_ACROBAT";

const getLogo = () => /*#__PURE__*/_react.default.createElement(_Icon.default, null, /*#__PURE__*/_react.default.createElement(_acrobat_reader_appicon_.default, null));

const getBrandingUrl = () => _ServiceRegistry.default.getService("AppStore").configStore.getConfig().brandingUrl || "https://documentcloud.adobe.com/link/home";

const getOnClickAnalyticsEvent = () => {
  let analyticsEvent = _AnalyticsConstants.default.BRAND_AREA;

  const appStore = _ServiceRegistry.default.getService("AppStore");

  if (appStore.showBrandingInHUD) {
    analyticsEvent = appStore.isHidingBranding ? _AnalyticsConstants.default.FLOATING_BRAND_AREA : _AnalyticsConstants.default.HUD_BRAND_AREA;
  }

  return analyticsEvent;
};

const Branding = () => /*#__PURE__*/_react.default.createElement("div", {
  onClick: () => {
    _ServiceRegistry.default.getService("AnalyticsProviderService").sendEvent(getOnClickAnalyticsEvent());

    window.open(getBrandingUrl(), "_blank");
  },
  className: (0, _classnames.default)(["sdk-Branding-branding", _ServiceRegistry.default.getService("AppStore").showBrandingInHUD ? "sdk-Branding-hudBranding" : ""]),
  role: "presentation"
}, getLogo(), _ServiceRegistry.default.getService("AppStore").configStore.getConfig().showBrandingTitle && /*#__PURE__*/_react.default.createElement(_Heading.default, {
  size: 2,
  className: "sdk-Branding-header",
  "aria-hidden": true
}, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
  id: BRANDING_TITLE_KEY
})), !_ServiceRegistry.default.getService("AppStore").showBrandingInHUD && _ServiceRegistry.default.getService("AppStore").configStore.getConfig().leftAlignFileName && /*#__PURE__*/_react.default.createElement(_Heading.default, {
  size: 2,
  className: "sdk-Branding-headerBorder",
  "aria-hidden": true
}));

var _default = Branding;
exports.default = _default;