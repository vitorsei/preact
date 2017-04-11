
export function instancesFormattedForDropdown(instanceOptions) {
  return instanceOptions.map(instance => {
    return {
      value: instance.code,
      text: instance.name
    };
  });
}
