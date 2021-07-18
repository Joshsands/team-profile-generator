const Manager = require ("../lib/Manager");

test("create a new team member object with a specific role", () => {
    const newMember = new Manager('John', 1234, 'john@email.com', 4321);

    expect(typeof(newMember)).toBe("object");
    expect(newMember.name).toBe('John');
    expect(newMember.id).toEqual(expect.any(Number));
    expect(newMember.email).toBe('john@email.com');
    expect(newMember.officeNumber).toEqual(4321);
})

test("return constructor data", () => {
    const test = new Manager('John', 1234, 'john@email.com', 4321);

    expect(test.getRole()).toBe("Team Manager");
    expect(test.getOfficeNumber()).toBe(4321);
})