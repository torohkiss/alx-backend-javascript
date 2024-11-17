interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 12,
  location: '12 Town street'
};

const student2: Student = {
  firstName: 'Bro',
  lastName: 'Emma',
  age: 12,
  location: '20 Town street'
};

const studentsList: Student[] = [student1, student2];

function renderTable(st: Student[]) {
  const table = document.createElement('table');
  const header = table.createTHead();
  const headerRow = header.insertRow();

  const headers = ['First name', 'Location']
  headers.forEach(headerText => {
    const th = document.createElement('th')
    th.textContent = headerText
    headerRow.appendChild(th)
    })

  const tbody = table.createTBody()
  st.forEach(student => {
    const row = tbody.insertRow()
    const cellFirstName = row.insertCell();
    const cellLocation = row.insertCell();
    cellFirstName.textContent = student.firstName;
    cellLocation.textContent = student.location;
  })

  document.body.appendChild(table);
}

renderTable(studentsList);
