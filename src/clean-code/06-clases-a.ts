(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F'
    class Person {
        // Forma larga

        // public bithdate: Date;
        // public gender: Gender;
        // public name: string;

        // constructor(name: string, gender: Gender, birthdate: Date){
        //     this.bithdate = birthdate;
        //     this.gender = gender;
        //     this.name = name;
        // }


        // Forma corta
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date){}
    }

    class User extends  Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(name, gender, birthdate)
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{
        constructor(
            public workinDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate)
        }
    }

    const person = new Person('Johao', 'M', new Date('1998-10-16'))
    console.log(person)

    //  const person = new Person('Johao', 'M', new Date('1998-10-16'))
    // console.log(person)

 
})();