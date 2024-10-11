export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const myMap = new Map();
  for (const key of arr) {
    myMap.set(key.id, true);
  }
  const newIds = [...myMap.keys()];
  return newIds;
}
