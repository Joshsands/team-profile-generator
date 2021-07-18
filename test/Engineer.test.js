const Engineer = require ("../lib/Engineer");

test("create a new team member object with a specific role", () => {
    const newMember = new Engineer('John', 1234, 'john@email.com', 'johndoe');

    expect(typeof(newMember)).toBe("object");
    expect(newMember.name).toBe('John');
    expect(newMember.id).toEqual(expect.any(Number));
    expect(newMember.email).toBe('john@email.com');
    expect(newMember.github).toEqual('johndoe');
})

test("return constructor data", () => {
    const test = new Engineer('John', 1234, 'john@email.com', 'johndoe');

    expect(test.getRole()).toBe("Engineer");
    expect(test.getGithub()).toBe('johndoe');
})