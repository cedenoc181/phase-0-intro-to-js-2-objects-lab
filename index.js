// Write your solution in this file!
const employee  = {
    name : 'Christian', 
    streetAddress : '2527 Valentine Avenue',

};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};
    newObj[key]= value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name","Chris");

function deleteFromEmployeeByKey(obj, key, value){
    const newObj = {...obj};
    newObj[key]= value;
    const delEmployee = deleteFromEmployeeByKey(delete delEmployee ['name']);
   console.log(delEmployee);
}