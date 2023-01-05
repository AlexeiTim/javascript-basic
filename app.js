const company = {
  name: 'ООО Агро',
  employees: [
    {
      name: 'Света',
      getEmployeesName: function () {
        console.log(this.name);
        return this.name
      },
    },
    {
      name: 'Катя',
      getEmployeesName: function () {
        console.log(this.name);
        return this.name
      },
    },
  ],
  ceo: {
    name: 'Вася',
    getCeoName: function () {
      let name = this.name;
      console.log(name);
    }
  },
  getCompany: function () {
    console.log(`Название компании: ${this.name}`)
    return this.name
  },


}

company.ceo.getCeoName();
console.log(company.employees.map(employee => employee.getEmployeesName()))
company.getCompany();
