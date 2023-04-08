(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F'
    interface PersonProperties {
        birthdate: Date;
        gender: Gender;
        name: string;
    }
    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name,  gender, birthdate}: PersonProperties){
            this.birthdate = birthdate
            this.gender = gender;
            this.name = name;
        }
    }


    interface UserProperties {
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }

    class User extends Person{
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ birthdate, email, gender, name, role }: UserProperties ){
            super({name, gender, birthdate})
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProperties {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workinDirectory: string;
    }

    class UserSettings extends User{
        public  lastOpenFolder: string;
        public  workinDirectory: string;

        constructor({birthdate, email, gender,lastOpenFolder,name,role,workinDirectory}: UserSettingsProperties
        ){
            super({birthdate, email, role, name, gender});
            this.lastOpenFolder = lastOpenFolder;
            this.workinDirectory = workinDirectory;
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date('1998-10-16'),
        email:"johao@google.com", 
        gender: 'M', 
        name: 'Johao', 
        role: "Admin", 
        lastOpenFolder:"/home",
        workinDirectory:"/usr/home", 
        })
    console.log(userSettings)

    //  const person = new Person('Johao', 'M', new Date('1998-10-16'))
    // console.log(person)

 
})();