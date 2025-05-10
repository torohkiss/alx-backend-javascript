interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: string | boolean | number | undefined;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
	return `${firstName.charAt(0)}. ${lastName}`
}

interface StudentClassConstructorInterface {
	firstName: string;
	lastName: string;
}

interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentClassInterface {
	private firstName: string;
	private lastName: string;

	constructor (names: StudentClassConstructorInterface) {
		this.firstName = names.firstName
		this.lastName = names.lastName
	}

	workOnHomework() {
		return 'Currently working'
	}

	displayName () {
		return this.firstName
	}
}
