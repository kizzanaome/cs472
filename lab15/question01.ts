function describePerson(person: { name: string; age: number; isStudent: boolean }): string {
    return `${person.name} is ${person.age} years old and is ${person.isStudent ? '' : 'not '}a student.`;
}

describePerson
