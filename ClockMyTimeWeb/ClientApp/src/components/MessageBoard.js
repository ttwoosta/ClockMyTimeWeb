"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
require("./styles.css");
var MessageBoard = function () { return (React.createElement("div", null,
    React.createElement("h1", null, "Message Board"),
    React.createElement("div", { className: "container" },
        React.createElement("div", { className: "chatbox" },
            React.createElement("div", { className: "chatlogs" },
                React.createElement("div", { className: "chat friend" },
                    React.createElement("div", { className: "user-photo" }),
                    React.createElement("p", { className: "chat-message" }, "What's up, Brother..!!")),
                React.createElement("div", { className: "chat self" },
                    React.createElement("div", { className: "user-photo" },
                        React.createElement("img", { src: "Images/user_1.png" }),
                        React.createElement("p", { className: "chat-message" }, "What's up..!!")),
                    React.createElement("div", { className: "chat friend" },
                        React.createElement("div", { className: "user-photo" }),
                        React.createElement("p", { className: "chat-message" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque illum dolore? Consequuntur perspiciatis sequi ratione consequatur perferendis? Rem nihil ipsa nemo maxime, necessitatibus ratione quo totam quos suscipit. Perferendis!")),
                    React.createElement("div", { className: "chat friend" },
                        React.createElement("div", { className: "user-photo" }),
                        React.createElement("p", { className: "chat-message" }, "What's up, Brother..!!")),
                    React.createElement("div", { className: "chat self" },
                        React.createElement("div", { className: "user-photo" },
                            React.createElement("img", { src: "Images/user_1.png" }),
                            React.createElement("p", { className: "chat-message" }, "What's up..!!")),
                        React.createElement("div", { className: "chat friend" },
                            React.createElement("div", { className: "user-photo" }),
                            React.createElement("p", { className: "chat-message" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque illum dolore? Consequuntur perspiciatis sequi ratione consequatur perferendis? Rem nihil ipsa nemo maxime, necessitatibus ratione quo totam quos suscipit. Perferendis!"))),
                    React.createElement("div", { className: "chat-form" },
                        React.createElement("textarea", null),
                        React.createElement("button", null, "Send")))))))); };
exports.default = react_redux_1.connect()(MessageBoard);
//# sourceMappingURL=MessageBoard.js.map