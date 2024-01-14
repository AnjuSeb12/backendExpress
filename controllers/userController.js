const bcrypt = require("bcrypt");
const saltround = 10;
const users = [
    {
        fullname: 'Anu',
        email: 'anu@anu.com',
        password: '$2b$10$3UdX8VGbCuNXfrEwe48M8uwORbfx9OEv.Vwm93LPR/zY5WBus9Mg.'
    },
    {
        fullname: 'anju',
        email: 'anju@gmail.com',
        password: '$2b$10$2OOY.KCVnIKaVAxvxCsYj.iE6EqQnKEtNdNncButrxUZHT4D15Gx2'
    }
]


exports.getRegister = (req, res) => {
    res.send("RegisterPage");
}
exports.postRegister = async (req, res) => {
    const { fullname, email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, saltround);
    console.log(hashedPass);
    const user = {
        fullname,
        email,
        password: hashedPass
    }
    console.log(user);

    res.status(201).json({
        success: true,
        message: "user registeration successfully completed",
        user
    });
}
exports.userLogin = async (req, res) => {
    const { fullname, email, password } = req.body;
    const user = users.find((u) => u.email === email);
    console.log("user", user);
    if (!user) {
        return res.status(500).json({
            success: false,
            message: "user not found!",

        });
    }
    const isValid = await bcrypt.compare(password, user.password);
    console.log("isValid", isValid);
    if (!isValid) {
        return res.status(402).json({
            success: false,
            message: "Invalid Credentials",

        });


    }
    res.status(201).json({
        success: true,
        message: "Login Successfully",
        isAuthenticated: true,
        user

    });

}