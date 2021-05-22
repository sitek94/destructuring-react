type ReactElement = {
  type: string
  props?: {
    [propName: string]: any;
  }
}

type ElementType = ReactElement | string | number

export function render(element: ElementType, container: HTMLElement) {

  // Either string or number - create and append text node
  if (typeof element === 'string' || typeof element === 'number') {
    const textNode = document.createTextNode(String(element));
    container.appendChild(textNode);
    return;
  }

  const { type, props } = element;

  const domElement = document.createElement(type);

  if (props) {
    const { children, ...propsWithoutChildren } = props;

    // Append all props to the element
    for (const [key, value] of Object.entries(propsWithoutChildren)) {
      domElement[key] = value;
    }

    // Recursively render the children
    if (children) {
      for (const child of children) {
        render(child, domElement);
      }
    }
  }

  // Append the DOM element into the container
  container.appendChild(domElement);
}