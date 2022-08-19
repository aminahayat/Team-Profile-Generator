const Manager = require("../lib/Manager")

describe("Creates a Manager", () => {
    it ("Manager name should get printed", () => {
        const name = "Bob";
        const Emp = new Manager(name);
        expect(Emp.name).toBe(name);
    })

    it ("Manager id gets printed", () => {
        const id = "4";
        const Emp = new Manager("Bob", id);
        expect(Emp.id).toBe(id);
    })

    it ("Manager email gets printed", () => {
        const email = "bob@hotmail.co.uk";
        const Emp = new Manager("Bob", "4", email);
        expect(Emp.email).toBe(email);
    })

    it ("Manager number gets printed", () => {
        const officeNumber = "12";
        const Emp = new Manager("Bob", "4", "bob@hotmail.co.uk", officeNumber);
        expect(Emp.getOfficeNumber()).toBe(officeNumber);
    })
})