export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((x, y) => x + y.id, 0);
}
