const fs = require('fs')

/**
 *
 *
 */
 const countStudents = (dataPath) => {
    if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load database');
    }
    if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database')
    }
    const fileLines = fs
    	.readFileSync(dataPath, 'utf-8')
	.toString('utf-8')
	.trim()
	.split('\n');
    console.log(fileLines);
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropValues = dbFieldNames.slice(0, dbFieldNames.length - 1)
    console.log(studentPropValues);
 };

 module.exports = countStudents;
