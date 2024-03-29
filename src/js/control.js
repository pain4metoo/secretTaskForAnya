class Control {
  node;
  constructor(
    parentNode,
    tagName = "div",
    className = "",
    content = ""
  ) {
    const el = document.createElement(tagName);
    el.className = className;
    el.textContent = content;
    if (parentNode) {
      parentNode.append(el);
    }
    this.node = el;
  }

  destroy() {
    this.node.remove();
  }
}

export default Control;
