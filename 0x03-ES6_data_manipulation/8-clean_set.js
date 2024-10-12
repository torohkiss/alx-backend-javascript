export default function cleanSet(set, startString) {
  if (startString === '') {
    return ""
  }
  const arr = []
  for (const str of set) {
    if (str.startsWith(startString)) {
      arr.push(str.slice(startString.length))
    }
  }
  return arr.join('-')
}
