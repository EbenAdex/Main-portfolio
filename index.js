class Person{
    firstName="";
    lastName="";
    gender="";
    constructor(firstname, lastname, gender){
        this.firstName = firstname;
        this.lastName = lastname;
        this.gender = gender;
    }
    likesToEat(){
        console.log(`${this.firstName} likes to eat.`)
    }
}

const firstPerson = new Person("Tomi", "Sharon", "F")
firstPerson.likesToEat()

class Student extends Person{
    constructor(firstName, lastName, gender){
        super(firstName, gender)
        this.lastName = lastName
    }
    likesToStudy(){
        console.log(`${this.lastName} likes to study`)
    }
}

const firstStudent = new Student('Zainab', 'Jaji', 'F')
firstStudent.likesToStudy()