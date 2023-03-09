import responseHandler from '../handlers/response.handler';
import jsonwebtoken from 'jsonwebtoken';
import userModel from '../models/user.model';

const signUp = async (req, res) => {
    try {
        const { username, displayName, password } = req.body;
        const checkUser = await userModel.findOne({ username });
        if (checkUser) return responseHandler.badrequest(res, 'Username already used');

        const user = new userModel();
        user.username = username;
        user.displayName = displayName;
        user.password = setPassword(password);

        await user.save;

        const token = jsonwebtoken.sign({ data: user.id }, process.env.SECRET_TOKE, {
            expiresIn: '24h',
        });

        responseHandler.created(res, {
            token,
            ...user._doc,
            id: user.id,
        });
    } catch (error) {
        responseHandler.error(res);
    }
};

const signIn = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username }).select('user password aslt displayname id ');
        if (!user) {
            return responseHandler.badrequest(res, 'User not found');
        }

        if (user.validPassword(password)) {
            return responseHandler.badrequest(res, 'Wrong Password');
        }
        const token = jsonwebtoken.sign({ data: user.id }, process.env.SECRET_TOKE, {
            expiresIn: '24h',
        });

        user.password = undefined;
        user.salt = undefined;

        responseHandler.created(res, {
            token,
            ...user._doc,
            id: user.id,
        });
    } catch (error) {
        responseHandler.error(res);
    }
};

const updatePassword = async (req, res) => {
    try {
        const { password, newPassword } = req.body;
        const user = userModel.findById(req.user.id).select('password salt id');
        if (!user) {
            return responseHandler.unauthorize(res);
        }

        if (!user.validPassword(password)) {
            return responseHandler.badrequest(res, 'Wrong password');
        }

        user.setPassword(newPassword);

        await user.save();

        responseHandler.ok(res);
    } catch (error) {
        responseHandler.error(error);
    }
};

const getInfo = async () => {
    try {
        const user = await userModel.findById(req.user.id);

        if (!user) {
            responseHandler.notfound(res);
        }
        responseHandler.ok(res, user);
    } catch (error) {
        responseHandler.error(error);
    }
};

export default {
    signUp,
    signIn,
    updatePassword,
    getInfo,
};
