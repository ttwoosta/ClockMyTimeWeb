"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var Skills = /** @class */ (function (_super) {
    __extends(Skills, _super);
    function Skills() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skills.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "resume-section-content" },
                React.createElement("h2", { className: "mb-5" }, "Skills"),
                React.createElement("div", { className: "subheading mb-3" }, "Programming Languages & Tools"),
                React.createElement("ul", { className: "list-inline dev-icons" },
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("i", { className: "fab fa-html5" })),
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("i", { className: "fab fa-css3-alt" })),
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("i", { className: "fab fa-js-square" })),
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("i", { className: "fab fa-angular" })),
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("i", { className: "fab fa-react" })),
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("i", { className: "fab fa-node-js" })),
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("i", { className: "fab fa-sass" })),
                    React.createElement("li", { className: "list-inline-item" },
                        React.createElement("i", { className: "fab fa-npm" }))))));
    };
    return Skills;
}(React.PureComponent));
;
exports.default = react_redux_1.connect()(Skills);
//# sourceMappingURL=Skills.js.map