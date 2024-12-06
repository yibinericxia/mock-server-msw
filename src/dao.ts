import userData from './data/dbUser.json';

const users: User[] = [...userData];

export interface User {
    id: string;
    name: string;
    email: string
}

export const getUserById = (id: string): User | undefined => {
    return users.find(user => user.id === id);
}