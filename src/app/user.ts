export class User {

    constructor (
        public name:string,
        public login: string,
        public followers: number,
        public following: number,
        public repos_url: string,

    ) {}
}
