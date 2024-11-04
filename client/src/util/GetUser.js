export function getUserDetails() {
    let user = JSON.parse(localStorage.getItem('ToDoAppUser'));
    return user;
}