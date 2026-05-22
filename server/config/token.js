import jsonwebToken from 'jsonwebtoken'
import User from '../models/user.model.js';

const genToken = async (id) => {
    try {
        const token = await jsonwebToken.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return token;
    } catch (err) {
        await User.findByIdAndDelete(id);
        console.error(`Token generation error: ${err.message}`);
        return resizeBy.status(500).json({ success: false, message: "Token generation failed, user registration rolled back" });
        
    }
}

export default genToken;