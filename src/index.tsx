const React = {
  createElement(type: string, props, children) {
    const element = document.createElement(type);

    if (typeof children === 'string') {
      element.innerHTML = children;
    }

    return element;
  },
};

const ReactDOM = {
  render(element, node: HTMLElement) {
    console.log(element);
    node.appendChild(element);
  },
};

const app = <h1>App</h1>;

ReactDOM.render(app, document.getElementById('root'));
