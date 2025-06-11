const fs = require('fs');

/**
 *
 *
 */
const countStudents = dataPath => new Promise((resolve, reject) => {
	fs.readFile(dataPath, 'utf-8', (err, data) => {
		if (err) {
			reject(new Error('Cnnot load the database.'));
		}

		if (data) {
			const fileLines = data
				.trim()
				.split('\n');
			const students = fileLines.slice(1);
			console.log(`Number of students: ${students.length}`);
			//    Console.log(students);
			const fields = {};

			students.forEach(student => {
				const Sdata = student.split(',');
				const field = Sdata[3];
				//      Console.log(field);
				fields[field] ||= {
					count: 0,
					names: [],
				};

				fields[field].count += 1;
				fields[field].names.push(Sdata[0]);
			});
			for (const field in fields) {
				console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
			}

			resolve(true);
		}
	});
});

module.exports = countStudents;
