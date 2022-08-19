const Intern = require("../lib/intern")

describe("Creates an Intern", () => {
    it ("Intern name gets printed", () => {
        const name = "Soso";
        const Emp = new Intern(name);
        expect(Emp.name).toBe(name);
    })

    it ("Intern id gets printed", () => {
        const id = "3";
        const Emp = new Intern("Soso", id);
        expect(Emp.id).toBe(id);
    })

    it ("Intern email gets printed", () => {
        const email = "Soso@gmail.com";
        const Emp = new Intern("Soso", "3", email);
        expect(Emp.email).toBe(email);
    })

    it ("Intern school gets printed", () => {
        const school = "Hameds school";
        const Emp = new Intern("Soso", "3", "Soso@gmail.com", school);
        expect(Emp.getSchool()).toBe(school);
    })
})