(() => {

    //Aplicando el principio de responsabilidad única
    // Priorizar la composición frente a la herencia

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
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ email, role }: UserProperties ){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingsProperties {
        lastOpenFolder: string;
        workinDirectory: string;
    }

    class Settings{
        public  lastOpenFolder: string;
        public  workinDirectory: string;

        constructor({lastOpenFolder,workinDirectory}: SettingsProperties
        ){
            this.lastOpenFolder = lastOpenFolder;
            this.workinDirectory = workinDirectory;
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
    class UserSettings {
        public person: Person;
        public settings: Settings;
        public user: User;
        constructor({birthdate, email, gender, name, role, lastOpenFolder, workinDirectory}: UserSettingsProperties){
            this.person = new Person({name, gender, birthdate});
            this.settings = new Settings({lastOpenFolder, workinDirectory});
            this.user = new User({email, role});
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

})();