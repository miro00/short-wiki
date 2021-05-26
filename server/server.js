const express = require('express')
const app = express()
const cors = require('cors')

const cookieParser = require('cookie-parser')
const session = require('express-session')

const db = require('./models/db.model')
const port = 3001

app.use(cors({
  origin: ["http://localhost:3000", "http://192.168.1.144:3000"],
  methods: ["GET", "POST"],
  credentials: true
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  req.db = db
  next()
})

app.use(cookieParser())
app.use(session({
  key: "userId",
  secret: "qwert123", // TODO: сменить
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: false
  },
}))


const categoriesRouter = require('./routes/categories')
const usersRouter = require('./routes/users')
const articlesRouter = require('./routes/articles')

app.use("/api/categories", categoriesRouter)
app.use("/api/users", usersRouter) // TODO: сделать авторизацию на JWT
app.use("/api/articles", articlesRouter)

app.listen(port, () => {
  console.log(`✔ Сервер запущен на порту: ${port}`);
})

