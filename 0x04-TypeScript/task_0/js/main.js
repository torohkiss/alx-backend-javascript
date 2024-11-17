var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 12,
    location: '12 Town street'
};
var student2 = {
    firstName: 'Bro',
    lastName: 'Emma',
    age: 12,
    location: '20 Town street'
};
var studentsList = [student1, student2];
function renderTable(st) {
    var table = document.createElement('table');
    var header = table.createTHead();
    var headerRow = header.insertRow();
    var headers = ['First name', 'Location'];
    headers.forEach(function (headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    var tbody = table.createTBody();
    st.forEach(function (student) {
        var row = tbody.insertRow();
        var cellFirstName = row.insertCell();
        var cellLocation = row.insertCell();
        cellFirstName.textContent = student.firstName;
        cellLocation.textContent = student.location;
    });
    document.body.appendChild(table);
}
renderTable(studentsList);
