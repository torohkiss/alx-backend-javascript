export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const myMap = new Map();
  for (const n of arr) {
    myMap.set(n.id, true);
  }
  const newIds = [...myMap.keys()];
  return newIds;
}
