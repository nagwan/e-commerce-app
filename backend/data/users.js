import bcrypt from "bcryptjs"
const users = [
    {
        name: "Admin User",
        email: "admin@user.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "User1",
        email: "user1@user.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "User2",
        email: "user2@user.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "User3",
        email: "user3@user.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "User4",
        email: "user4@user.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "User5",
        email: "user5@user.com",
        password: bcrypt.hashSync("123456", 10),
    },
]

export default users