export default function hasValuesFromArray(set, array) {
  return array.every((all) => set.has(all));
}
