export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
    if (Array.isArray(students)) {
      const strs = students.every((student) => typeof student === 'string');
      if (!strs) {
        throw new TypeError('Students must be strings');
      }
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = newLength;
  }

  get students() {
    for (let i = 0; i < this._students.length; i++) {
      return this._students[i];
    }
  }

  set students(newStudents) {
    for (let i = 0; i < this._students.length; i++) {
      this._students[i] = newStudents;
    }
  }
}
