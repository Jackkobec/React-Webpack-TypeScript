import React from 'react';
import { FontIcon, SvgIcon } from 'material-ui';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';
import ContentFilterList from 'material-ui/svg-icons/content/filter-list';
import Redo from 'material-ui/svg-icons/content/redo';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import Tab from 'material-ui/svg-icons/action/tab';
import Visibility from 'material-ui/svg-icons/action/visibility';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import FormatIdentDecrease from 'material-ui/svg-icons/editor/format-indent-decrease';
import FormatIdentIncrease from 'material-ui/svg-icons/editor/format-indent-increase';
import CreditCard from 'material-ui/svg-icons/action/credit-card';
import CardMembership from 'material-ui/svg-icons/action/card-membership';
import ActionSearch from 'material-ui/svg-icons/action/search';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import AccountBalanceWallet from 'material-ui/svg-icons/action/account-balance-wallet';
import ActionList from 'material-ui/svg-icons/action/list';
import ActionPrint from 'material-ui/svg-icons/action/print';
import GetApp from 'material-ui/svg-icons/action/get-app';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Loop from 'material-ui/svg-icons/av/loop';
import AvPlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import Replay from 'material-ui/svg-icons/av/replay';
import NotInterested from 'material-ui/svg-icons/av/not-interested';
import CommunicationVpnKey from 'material-ui/svg-icons/communication/vpn-key';
import LiveHelp from 'material-ui/svg-icons/communication/live-help';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationZoomIn from 'material-ui/svg-icons/navigation/unfold-more';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import LiveTv from 'material-ui/svg-icons/notification/live-tv';
import ContentContentCopy from 'material-ui/svg-icons/content/content-copy';
import Create from 'material-ui/svg-icons/content/create';
import FileFileUpload from 'material-ui/svg-icons/file/file-upload';
import Share from 'material-ui/svg-icons/social/share';
import PlusOne from 'material-ui/svg-icons/social/plus-one';
import ActionReportProblem from 'material-ui/svg-icons/action/report-problem';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import ActionBuild from 'material-ui/svg-icons/action/build';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';
import ContentSend from 'material-ui/svg-icons/content/send';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionOpenInNew from 'material-ui/svg-icons/action/open-in-new';
import CommunicationChat from 'material-ui/svg-icons/communication/chat';
import ImagePictureAsPdf from 'material-ui/svg-icons/image/picture-as-pdf';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
const icons = {
    none: React.createElement(FontIcon, { className: "material-icons" }, "none"),
    weeklyExpense: React.createElement(FontIcon, { className: "material-icons" }, "account_balance_wallet"),
    cash: React.createElement(FontIcon, { className: "material-icons" }, "toys"),
    card: React.createElement(FontIcon, { className: "material-icons" }, "credit_card"),
    depo: React.createElement(FontIcon, { className: "material-icons" }, "trending_up"),
    utilities: React.createElement(FontIcon, { className: "material-icons" }, "settings_input_hdmi"),
    weeklyEnvelope: React.createElement(FontIcon, { className: "material-icons" }, "style"),
    statement: React.createElement(FontIcon, { className: "material-icons" }, "speaker_notes"),
    car: React.createElement(FontIcon, { className: "material-icons" }, "directions_car"),
    payment: React.createElement(FontIcon, { className: "material-icons" }, "payment"),
    refill: React.createElement(FontIcon, { className: "material-icons" }, "monetization_on"),
    personal: React.createElement(FontIcon, { className: "material-icons" }, "perm_identity"),
    newCredit: React.createElement(FontIcon, { className: "material-icons" }, "euro_symbol"),
    pdf: React.createElement(ImagePictureAsPdf, null),
    chat: React.createElement(CommunicationChat, { color: "rgba(255, 255, 255, 0.870588)" }),
    open: React.createElement(ActionOpenInNew, null),
    info: React.createElement(ActionInfo, null),
    close: React.createElement(NavigationClose, null),
    back: React.createElement(NavigationArrowBack, null),
    forward: React.createElement(NavigationArrowForward, null),
    send: React.createElement(ContentSend, null),
    build: React.createElement(ActionBuild, null),
    cancel: React.createElement(NavigationCancel, null),
    block: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" })),
    edit: React.createElement(SvgIcon, { viewBox: "0 0 24 24", style: { verticalAlign: 'bottom' } },
        React.createElement("path", { fill: "#000000", d: "M20.71,4.04C21.1,3.65 21.1,3 20.71,2.63L18.37,0.29C18,-0.1 17.35,-0.1 16.96,0.29L15,2.25L18.75,6M17.75,7L14,3.25L4,13.25V17H7.75L17.75,7Z" })),
    edit_orange: React.createElement(SvgIcon, { viewBox: "0 0 24 24", style: { verticalAlign: 'bottom' } },
        React.createElement("path", { fill: "#F67828", d: "M20.71,4.04C21.1,3.65 21.1,3 20.71,2.63L18.37,0.29C18,-0.1 17.35,-0.1 16.96,0.29L15,2.25L18.75,6M17.75,7L14,3.25L4,13.25V17H7.75L17.75,7Z" })),
    envelope: React.createElement(SvgIcon, { viewBox: "0 0 128 128" },
        React.createElement("g", { transform: "translate(0.000000,128.000000) scale(0.100000,-0.100000)", stroke: "none" },
            React.createElement("path", { d: "M62 1041 c4 -11 570 -511 578 -511 9 0 574 500 578 512 2 4 -258 8 -578 8 -320 0 -580 -4 -578 -9z" }),
            React.createElement("path", { d: "M10 643 l0 -368 195 195 c183 182 194 196 177 211 -9 9 -97 87 -194 173 l-178 157 0 -368z" }),
            React.createElement("path", { d: "M1073 836 l-193 -171 193 -193 192 -192 3 186 c1 102 1 265 0 363 l-3 177 -192 -170z" }),
            React.createElement("path", { d: "M743 544 c-51 -46 -97 -84 -103 -84 -6 0 -50 36 -99 80 -49 44 -93 80 -98 80 -10 0 -383 -372 -383 -383 0 -4 261 -7 580 -7 319 0 580 3 580 8 0 4 -87 93 -192 199 l-193 191 -92 -84z" }))),
    plusOne: React.createElement(PlusOne, null),
    create: React.createElement(Create, null),
    search: React.createElement(ActionSearch, null),
    filter: React.createElement(ContentFilterList, null),
    add: React.createElement(ContentAddBox, null),
    visibility: React.createElement(Visibility, null),
    visibilityOff: React.createElement(VisibilityOff, null),
    balance: React.createElement(AccountBalanceWallet, null),
    credit: React.createElement(FormatIdentDecrease, null),
    deposit: React.createElement(FormatIdentIncrease, null),
    creditCard: React.createElement(CreditCard, null),
    cardMembership: React.createElement(CardMembership, null),
    expandMore: React.createElement(ExpandMore, null),
    expandLess: React.createElement(ExpandLess, null),
    arrowDropRight: React.createElement(ArrowDropRight, null),
    redo: React.createElement(Redo, null),
    list: React.createElement(Tab, null),
    liveHelp: React.createElement(LiveHelp, null),
    share: React.createElement(Share, null),
    getApp: React.createElement(GetApp, null),
    shoppingCart: React.createElement(ShoppingCart, null),
    zoomIn: React.createElement(ZoomIn, null),
    replay: React.createElement(Replay, null),
    replay_white: React.createElement(Replay, { color: "rgba(255, 255, 255, 0.870588)" }),
    notInterested: React.createElement(NotInterested, null),
    exchange: React.createElement(Loop, null),
    liveTv: React.createElement(LiveTv, null),
    excel: React.createElement(SvgIcon, { viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M6,2H14L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M13,3.5V9H18.5L13,3.5M17,11H13V13H14L12,14.67L10,13H11V11H7V13H8L11,15.5L8,18H7V20H11V18H10L12,16.33L14,18H13V20H17V18H16L13,15.5L16,13H17V11Z" })),
    clear: React.createElement(ContentClear, null),
    contextActions: React.createElement(MoreVertIcon, null),
    details: React.createElement(NavigationZoomIn, null),
    history: React.createElement(ActionList, null),
    copy: React.createElement(ContentContentCopy, null),
    print: React.createElement(ActionPrint, null),
    withdraw: React.createElement(ActionReportProblem, null),
    downLoad: React.createElement(FileFileDownload, null),
    upload: React.createElement(FileFileUpload, null),
    // workflow
    del: React.createElement(ActionDelete, null),
    tobank: React.createElement(FileFileUpload, null),
    confirm: React.createElement(AvPlaylistAddCheck, null),
    sign: React.createElement(CommunicationVpnKey, null),
    sign_white: React.createElement(CommunicationVpnKey, { color: "rgba(255, 255, 255, 0.870588)" }),
};
export default icons;
export const largeIcon = (icon) => (React.cloneElement(icon, {
    style: {
        fontSize: 36
    }
}));
//# sourceMappingURL=icons.js.map