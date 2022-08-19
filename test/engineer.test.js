const Engineer = Require("../lib/engineer")

describe("Create an Engineer", () => {
    it ("Engineer name should get printed", () => {
        const name = "Susan";
        const Emp = new Engineer(name);
        expect(Emp.name).toBe(name);
    })

    it ("Engineer id gets printed", () => {
        const id = "2";
        const Emp = new Engineer("Susan", id);
        expect(Emp.id).toBe(id);
    })

    it ("Engineer email gets printed", () => {
        const email = "susan@gmail.com";
        const Emp = new Engineer("Susan", "2", email);
        expect(Emp.email).toBe(email);
    })

    
    it ("Engineer github username gets printed", () => {
        const github = "Susan786";
        const Emp = new Engineer("Susan", "2", "Susan@gmail.com", github);
        expect(Emp.getGithub()).toBe(github);
    })
})