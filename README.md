# Real-Time Chat App

A modern, full-stack real-time chat application built with React, Node.js, Express, and Socket.io. Features instant messaging, user authentication, and a sleek user interface.

## 🚀 Features

- **Real-Time Messaging** - Instant message delivery using Socket.io
- **User Authentication** - Secure JWT-based authentication with bcryptjs password hashing
- **User Management** - View active users and manage contacts
- **Chat History** - Persistent message storage with MongoDB
- **Email Notifications** - Email integration via Resend
- **Image/File Support** - Upload images using Cloudinary
- **Security Features** - Helmet headers, CORS protection, Arcjet rate limiting
- **Responsive Design** - Mobile-friendly UI with Tailwind CSS and DaisyUI
- **Sound Notifications** - Audio feedback for incoming messages
- **Loading States** - Skeleton loaders for better UX

## 📋 Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB database
- Cloudinary account (for image uploads)
- Resend account (for emails)

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Socket.io Client** - Real-time communication
- **Zustand** - State management
- **Tailwind CSS** - Utility-first styling
- **DaisyUI** - Component library
- **Lucide React** - Icon library
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

### Backend
- **Express 5** - Web framework
- **Socket.io** - Real-time event-based communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Cloudinary** - Image hosting
- **Resend** - Email service
- **Helmet** - Security middleware
- **Arcjet** - Rate limiting and security
- **Nodemon** - Development auto-reload

## 📁 Project Structure

```
RealTime-Chat-App/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── store/         # Zustand stores
│   │   ├── lib/           # Utilities and configs
│   │   └── App.jsx        # Main app component
│   └── package.json       # Frontend dependencies
│
└── server/                # Express backend
    ├── src/
    │   ├── controllers/   # Request handlers
    │   ├── models/        # Mongoose schemas
    │   ├── routes/        # API routes
    │   ├── middleware/    # Express middleware
    │   ├── emails/        # Email templates
    │   └── lib/           # Utilities and configs
    └── package.json       # Backend dependencies
```

## 🔧 Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd RealTime-Chat-App
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with the following variables:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RESEND_API_KEY=your_resend_api_key
ARCJET_KEY=your_arcjet_api_key
NODE_ENV=development
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```

Create a `.env` file in the `client` directory:
```env
VITE_API_URL=http://localhost:3000
```

## 🚀 Running the Application

### Start the Backend Server
```bash
cd server
npm start
```
The server will run on `http://localhost:3000`

### Start the Frontend Development Server
```bash
cd client
npm run dev
```
The frontend will run on `http://localhost:5173`

### Build for Production

**Frontend:**
```bash
cd client
npm run build
```

**Linting:**
```bash
cd client
npm run lint
```

## 🔐 Authentication Flow

1. Users sign up with email and password
2. Passwords are hashed using bcryptjs
3. JWT tokens are issued on successful login
4. Tokens are stored and sent with each authenticated request
5. Socket.io connections are authenticated using middleware

## 💬 Real-Time Communication

The app uses Socket.io for real-time features:
- Instant message delivery
- User online/offline status
- Typing indicators
- Active user list updates

## 📧 Email Integration

The Resend service is used for:
- Account verification emails
- Password reset emails
- Email notifications

## 🖼️ Image Upload

Images are uploaded to Cloudinary for:
- User profile pictures
- Chat message attachments

## 🔒 Security Features

- **JWT Authentication** - Stateless, token-based auth
- **Password Hashing** - bcryptjs with salt rounds
- **Helmet** - HTTP header security
- **CORS** - Cross-origin request protection
- **Arcjet** - Rate limiting and bot protection
- **Socket Authentication** - Middleware for WebSocket connections

## 🎨 UI/UX Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark Mode Support** - Through DaisyUI themes
- **Loading Skeletons** - Better perceived performance
- **Toast Notifications** - User feedback for actions
- **Sound Alerts** - Audio notification for new messages

## 🐛 Common Issues

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change PORT in .env
```

### MongoDB Connection Error
- Verify MongoDB is running
- Check connection string in `.env`
- Ensure IP whitelist includes your machine

### CORS Errors
- Check `cors` configuration in `server.js`
- Verify frontend URL matches backend config

## 📚 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Messages
- `GET /api/messages/:userId` - Get chat history
- `POST /api/messages/send` - Send message
- `GET /api/messages` - Get all messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

Shivam Kumar Singh

## 💡 Future Enhancements

- [ ] Group chat functionality
- [ ] Message search and filters
- [ ] User typing indicators
- [ ] Message reactions
- [ ] Voice/video calling
- [ ] Message encryption
- [ ] User presence indicators
- [ ] Message read receipts

## 📞 Support

For issues and questions, please open an issue on the GitHub repository.

---

**Happy Chatting!** 💬
