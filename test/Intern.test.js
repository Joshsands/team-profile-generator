const Intern = require ("../lib/Intern");

test("create a new team member object with a specific role", () => {
    const newMember = new Intern('John', 1234, 'john@email.com', 'MIT');

    expect(typeof(newMember)).toBe("object");
    expect(newMember.name).toBe('John');
    expect(newMember.id).toEqual(expect.any(Number));
    expect(newMember.email).toBe('john@email.com');
    expect(newMember.school).toEqual('MIT');
})

test("return constructor data", () => {
    const test = new Intern('John', 1234, 'john@email.com', 'MIT');

    expect(test.getRole()).toBe("Intern");
    expect(test.getSchool()).toBe('MIT');
})