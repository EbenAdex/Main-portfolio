import Person from './person.mjs';
import Teacher from './teacher.mjs'

// const firstPerson = new Person("Josh", "Fineboy", "M")
// firstPerson.firstName;

class Main extends Person{
    constructor(firstname, lastname, gender){
        super(firstname, lastname, gender)
    }
}

const firstMain = new Main("Ore", "Finegirl", "F")

export default Main;