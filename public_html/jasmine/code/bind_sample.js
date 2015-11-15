var Button = function (content) {
    this.content = content;
};
Button.prototype.getContent = function () {
     return (this.content + ' clicked');
}