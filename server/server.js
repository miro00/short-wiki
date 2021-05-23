const express = require('express')
const app = express()
const cors = require('cors')

const cookieParser = require('cookie-parser')
const session = require('express-session')

const db = require('./models/db.model')
const port = 3001

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use((req, res, next) => {
  req.db = db
  next()
})

app.use(cookieParser())
app.use(session({
  key: "userId",
  secret: "qwert123", // TODO сменить
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: false
  },
}))


const categoriesRouter = require('./routes/categories')
const usersRouter = require('./routes/users')

app.use("/api/categories", categoriesRouter)
app.use("/api/users", usersRouter) // TODO сделать авторизацию на JWT

app.listen(port, () => {
  console.log(`✔ Сервер запущен на порту: ${port}`);
})

