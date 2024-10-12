export default function updateStudentGradeByCity (getListStudents, city, newGrades) {
  const filterCity = getListStudents.filter(x => x.location === city);
  const studentsGrade = filterCity.map(x => {
    const grade0bj = newGrade.find(y => y.studentId === x.id)
    
  return studentsGrade;
}
