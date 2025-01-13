export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string; // Можно преобразовать в Date, если потребуется
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
}

export interface IUsersResponse {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}
