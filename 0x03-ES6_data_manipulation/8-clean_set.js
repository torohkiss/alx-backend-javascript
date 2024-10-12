export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filteredSet = [...set].filter(item => item.startsWith(startString));
  const cleanedValues = filteredSet.map(item => item.slice(startString.length));
  return cleanedValues.join('-');
}
