export default class Patient {
    constructor(name, age, gender, id = null) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
