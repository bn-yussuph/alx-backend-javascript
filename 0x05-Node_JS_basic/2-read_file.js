const fs = require('fs');

/**
 *
 *
 */
const countStudents = dataPath => {
	if (!fs.existsSync(dataPath)) {
		throw new Error('Cannot load database');
	}

	if (!fs.statSync(dataPath).isFile()) {
		throw new Error('Cannot load the database');
	}

	const fileLines = fs
		.readFileSync(dataPath, 'utf-8')
		.trim()
		.split('\n');
	const students = fileLines.slice(1);
	console.log(`Number of students: ${students.length}`);
	//    Console.log(students);
	const fields = {};

	students.forEach(student => {
		const data = student.split(',');
		const field = data[3];
		//	Console.log(field);
		fields[field] ||= {
			count: 0,
			names: [],
		};

		fields[field].count += 1;
		fields[field].names.push(data[0]);
	});
	for (const field in fields) {
		console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
	}
};

module.exports = countStudents;
