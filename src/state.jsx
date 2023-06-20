const user = {
    name: "Иван",
    lastname: "Иванов",
    email: "ivanovii@ya.ru",
    id: "1",
    about: "Здесь я рассказываю о себе....",
    avatar: "https://cdn2.iconfinder.com/data/icons/cartoon-avatars/128/Avatars_hipster-256.png",
};

const users = {
    0: {name: "Ипатий", lastname: "Смирнов"},
    1: {name: "Есения", lastname: "Теренина"},
    2: {name: "Владислав", lastname: "Яблочков"},
    3: {name: "Кузьма", lastname: "Петров"},
    4: {name: "Константин", lastname: "Свиридов"},
};

export function getUser() {
    return user;
}

export function getUsers(){
    return users;
}
