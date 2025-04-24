export default function createEmployeesObject (departmentName, employees) {
  /* let i = 0;
  for (const emp of emmployees){
    employees[i] = emp;
    i++;
  } */

  const obj = {
    [`${departmentName}`]: employees
  };

  return obj;
}
