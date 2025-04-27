export default class ALXCourse {
  constructor (name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name () {
    return this._name;
  }

  set name (x) {
    if (typeof x === 'string') {
      this._name = x;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length () {
    return this._length;
  }

  set length (x) {
    if (typeof x === 'number') {
      this._length = x;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students () {
    return this._students;
  }

  set students (x) {
    if (
      Array.isArray(x) &&
      x.every(s => typeof s === 'string')
    ) {
      this._students = x;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
