export type registerUser = { 
    username : string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type loginUser = {
    email: string;
    password: string;
}