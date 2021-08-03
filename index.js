
const employee = {
    name: "Henry",
    streetAddress: "10 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value});
 }

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
 }

 function deleteFromEmployeeByKey(employee, key, value) {
    return Object.assign({}, employee, { [key]: value});
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
 }
