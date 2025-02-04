const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf-8');

    const lines = fileContent.split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const students = lines.slice(1);

    process.stdout.write(`Number of students: ${students.length}\n`);

    const studentsByField = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    Object.entries(studentsByField).forEach(([field, studentList]) => {
      process.stdout.write(
        `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`,
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
