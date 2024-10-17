export interface User {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserCreate {
    name: string;
    email: string;
}

export interface UserRepository {
    create(data: UserCreate): Promise<User>
}