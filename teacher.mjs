import Main from './main.mjs';
import Person from './person.mjs';

class Teacher extends Person{
    constructor(firstname, lastname, gender, degree){
        super(firstname, lastname, gender)
        this.degree = degree;
    }
    degree="";
    teach(){
        console.log(`${this.firstName} is teaching`)
    }
}

const firstTeacher = new Teacher('Goor', 'Tina', 'F', 'Bsc');
firstTeacher.teach();

export default Teacher;