const jwt = require('jsonwebtoken');

const JWT_PRIVATE_KEY = "youraccesstokensecret";
class User {
    constructor(id, lastname, firstname, email, password, gender, birthDate, createdAt, updatedAt, role) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.birthDate = birthDate;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.role = role;
    }

    static fetchAll() {
        return [
            {
                id: 1,
                lastname: 'Dupont',
                firstname: 'Jean',
                email: 'jean.dupont@gmail.com',
                password: 'jdupont',
                gender: 'male',
                birthDate: '10/12/1990',
                createdAt: '01/01/2021',
                updatedAt: '01/01/2021',
                role: 'Formateur'
            },
            {
                id: 2,
                lastname: 'Dupont',
                firstname: 'Jeannette',
                email: 'Jeannette.dupont@gmail.com',
                password: 'jeadupont',
                gender: 'female',
                birthDate: '08/09/1995',
                createdAt: '03/02/2021',
                updatedAt: '05/02/2021',
                role: 'Student'
            }
        ]
    }
}
module.exports = User
