let users = [];
export const store = (user) => {
    users.push(user);
};
export const get = () => {
    return users;
};
