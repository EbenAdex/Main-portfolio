import Main from './main.mjs';
import Teacher from "./teacher.mjs";

class Person{
    constructor(firstname, lastname, gender){
        this.firstName = firstname;
        this.lastName = lastname;
        this.gender = gender;
    }
    firstName="";
    lastName="";
    gender="";

    walk(){}
    jump(){
        console.log("I am jumping")
    }
}


export default Person;