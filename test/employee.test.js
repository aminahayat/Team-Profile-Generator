const Employee = Require ('../lib/employee')


describe("Creates an Employee", () => {
    it ("Employee name is printed", () => {
        const name = "Suzay";
        const Emp = new Employee(name);
        expect(Emp.name).toBe(name);
    })

    it ("Employee id is printed", () => {
        const id = "1";
        const Emp = new Employee("Suzay", id);
        expect(Emp.id).toBe(id);
    })

    it ("Employee email is printed", () => {
        const email = "Suzay@gmail.com";
        const Emp = new Employee("Suzay", "1", email);
        expect(Emp.email).toBe(email);
    })
})