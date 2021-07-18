const TeamMember = require ("../lib/TeamMember");

// jest.mock('../lib/TeamMember')

test("create a new team member object", () => {
    const newMember = new TeamMember('John', 1234, 'john@email.com',);

    expect(typeof(newMember)).toBe("object");
    expect(newMember.name).toBe('John');
    expect(newMember.id).toEqual(expect.any(Number));
    expect(newMember.email).toBe('john@email.com');
})

test("return constructor data", () => {
    const test = new TeamMember('John', 1234, 'john@email.com');

    expect(test.getName()).toBe("John");
    expect(test.getId()).toEqual(1234);
    expect(test.getEmail()).toBe("john@email.com");
    expect(test.getRole()).toBe("teamMember");
})