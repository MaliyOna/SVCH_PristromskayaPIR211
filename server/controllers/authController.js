const bcrypt = require('bcryptjs');
const User = require('../models/User')
const Role = require('../models/Role')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const { secret } = require("../config")

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }

    return jwt.sign(payload, secret, { expiresIn: "24h" })
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Ошибка при регистрации", errors })
            }

            const newUser = req.body.user;
            const password = newUser.password;
            const userName = newUser.userName;

            const candidate = await User.findOne({ userName });

            if (candidate) {
                return res.status(400).json({ message: "Пользователь с таким именем уже существует" })
            }

            const hash = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({ value: "USER" })

            const user = new User({
                userName: userName,
                password: hash,
                roles: [userRole.value],
                userTopics: []
            })

            await user.save();

            return res.json({ message: "Пользователь успешно зарегистрирован" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Registration error" })
        }
    }

    async login(req, res) {
        try {
            const { userName, password } = req.body;
            const user = await User.findOne({ userName });

            if (!user) {
                return res.status(400).json({ message: "Пользователь не найден" });
            };

            const validPassword = bcrypt.compareSync(password, user.password);

            if (!validPassword) {
                return res.status(400).json({ message: "Введен не верный пароль" });
            }

            const token = generateAccessToken(user._id, user.roles);

            return res.json({ token });

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Login error" })
        }
    }

    async changeRole(req, res) {
        try {
            const isAdmin = req.body.isAdmin;
            const userName = req.body.userName;

            const adminRole = await Role.findOne({ value: "ADMIN" });
            const userRole = await Role.findOne({ value: "USER" });

            if (!adminRole || !userRole) {
                return res.status(400).json({ message: "Roles not found" });
            }

            const updatedRoles = [];
            updatedRoles.push(isAdmin ? adminRole._id : userRole._id);

            const result = await User.findOneAndUpdate({ userName: userName }, { roles: updatedRoles });

            if (result) {
                return res.status(200).json({ message: "Role updated successfully" });
            } else {
                return res.status(400).json({ message: "User not found" });
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Change role error" })
        }
    }

    async getRole(req, res) {
        try {
            const userName = req.params.userName;
            const user = await User.findOne({ userName });

            const userRole = user.roles[0];

            const roleToReturn = (userRole === "ADMIN" || userRole === "65ac41f3feb5d9d2be88bee6") ? "ADMIN" : "USER";

            return res.status(200).json({ role: roleToReturn });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Get role error" })
        }
    }

    async updatePassword(req, res) {
        try {
            const data = req.body;

            const userName = data.userName;
            const oldPassword = data.oldPassword;
            const newPassword = data.newPassword;

            const user = await User.findOne({ userName });

            if (!user) {
                return res.status(400).json({ message: "Пользователь с таким именем нет" })
            }

            const isPasswordValid = bcrypt.compareSync(oldPassword, user.password);

            if (isPasswordValid) {
                const newHash = bcrypt.hashSync(newPassword, 7);
                await User.updateOne({ userName }, { password: newHash });
                return res.status(200).json({ message: "Пароль успешно обновлен" });
            } else {
                return res.status(400).json({ message: "Не верный старый пароль" });
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Update user error" })
        }
    }

    async restorePassword(req, res) {
        try {
            const data = req.body;

            const userName = data.userName;
            const password = data.password;

            const hash = bcrypt.hashSync(password, 7);
            await User.updateOne({ userName }, { password: hash });
            return res.status(200).json({ message: "Пароль успешно обновлен" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Restore password error" })
        }
    }

    async changeRole(req, res) {
        try {
            const isAdmin = req.body.isAdmin;
            const userName = req.body.userName;

            const adminRole = await Role.findOne({ value: "ADMIN" });
            const userRole = await Role.findOne({ value: "USER" });

            if (!adminRole || !userRole) {
                return res.status(400).json({ message: "Roles not found" });
            }

            const updatedRoles = [];
            updatedRoles.push(isAdmin ? adminRole._id : userRole._id);

            const result = await User.findOneAndUpdate({ userName: userName }, { roles: updatedRoles });

            if (result) {
                return res.status(200).json({ message: "Role updated successfully" });
            } else {
                return res.status(400).json({ message: "User not found" });
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Change role error" })
        }
    }
}

module.exports = authController;