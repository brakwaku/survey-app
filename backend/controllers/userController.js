import asyncHandler from "express-async-handler";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    console.log(session);
    req.session.isLoggedIn = true;

    const { email, password } = req.body.user;

    // const user = await User.findOne({ email });

    // if (user && (await user.matchPassword(password))) {
    //     res.json({
    //         _id: user._id,
    //         name: user.name,
    //         email: user.email,
    //         isAdmin: user.isAdmin,
    //         token: generateToken(user._id),
    //     });
    // } else {
    //     res.status(401);
    //     throw new Error('Invalid email or password');
    // }

    res.status(200);
})

export { authUser };