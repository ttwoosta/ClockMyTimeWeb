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
require("react-calendar/dist/Calendar.css");
require("./ResumeStyles.css");
var About_1 = require("./ResumeComponents/About");
var Experience_1 = require("./ResumeComponents/Experience");
var Education_1 = require("./ResumeComponents/Education");
var Skills_1 = require("./ResumeComponents/Skills");
var Awards_1 = require("./ResumeComponents/Awards");
var Resume = /** @class */ (function (_super) {
    __extends(Resume, _super);
    function Resume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Resume.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("nav", { className: "navbar navbar-expand-lg navbar-dark bg-primary fixed-top", id: "sideNav" },
                React.createElement("a", { className: "navbar-brand js-scroll-trigger", href: "#page-top" },
                    React.createElement("span", { className: "d-block d-lg-none" }, "Tu Tong"),
                    React.createElement("span", { className: "d-none d-lg-block" },
                        React.createElement("img", { className: "img-fluid img-profile rounded-circle mx-auto mb-2", src: "profile_small.jpg", alt: "" }))),
                React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    React.createElement("span", { className: "navbar-toggler-icon" })),
                React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                    React.createElement("ul", { className: "navbar-nav" },
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link js-scroll-trigger", href: "#about" }, "About")),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link js-scroll-trigger", href: "#experience" }, "Experience")),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link js-scroll-trigger", href: "#education" }, "Education")),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link js-scroll-trigger", href: "#skills" }, "Skills")),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link js-scroll-trigger", href: "#awards" }, "Awards")),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link js-scroll-trigger", href: "https://becker-clock-api.azurewebsites.net/dashboard" }, "Machine Learning"))))),
            React.createElement("div", { className: "container-fluid p-0" },
                React.createElement("section", { className: "resume-section", id: "about" },
                    React.createElement(About_1.default, null)),
                React.createElement("hr", { className: "m-0" }),
                React.createElement("section", { className: "resume-section", id: "experience" },
                    React.createElement(Experience_1.default, null)),
                React.createElement("hr", { className: "m-0" }),
                React.createElement("section", { className: "resume-section", id: "education" },
                    React.createElement(Education_1.default, null)),
                React.createElement("hr", { className: "m-0" }),
                React.createElement("section", { className: "resume-section", id: "skills" },
                    React.createElement(Skills_1.default, null)),
                React.createElement("hr", { className: "m-0" }),
                React.createElement("hr", { className: "m-0" }),
                React.createElement("section", { className: "resume-section", id: "awards" },
                    React.createElement(Awards_1.default, null))),
            React.createElement("footer", { className: "mastfoot mt-auto" },
                React.createElement("div", { className: "inner" },
                    React.createElement("p", null,
                        "The site create with ",
                        React.createElement("a", { href: "https://startbootstrap.com/themes/resume/" }, "[Start Bootstrap - Resume]"),
                        ".")))));
    };
    return Resume;
}(React.Component));
exports.default = Resume;
//# sourceMappingURL=Resume.js.map