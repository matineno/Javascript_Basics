












































const customer = {
    firstName: 'Elliot',
    lastName: 'Jones',
    address: {
        street: '123 Notre Dame Ave',
        unit: 9,
        postal: 'R31 0H2',
    }
};

//const deepCopy = JSON.parse(JSON.stringify(customer));
const deepCopy = structuredClone(customer);
customer.address.unit = 12
console.table(deepCopy);