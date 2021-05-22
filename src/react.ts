export function createElement(type, props, ...children) {
  // It's a component!
  if (typeof type === 'function') {
    const Component = type;
    return Component(props);
  }

  const reactElement = {
    type,
    props: {
      ...props,
      children,
    },
  };

  return reactElement;
}
