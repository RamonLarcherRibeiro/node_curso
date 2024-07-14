const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const fs = require('fs');
const session = require('express-session');

const app = express();

// Configurar middleware de sessão
app.use(session({
    secret: 'seu_segredo',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Configure para true em produção com HTTPS
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const user = req.session.user || {};
    res.render('home', { user: user });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/auth', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const path = `users/${username}.json`;

    if (fs.existsSync(path)) {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.log("Ocorreu um erro na leitura do arquivo");
                res.redirect('/login');
                return;
            }

            const json = JSON.parse(data);
            if (json.username === username && json.password === password) {
                req.session.user = json;
                res.redirect('/');
            } else {
                console.log("Credenciais incorretas");
                res.redirect('/login');
            }
        });
    } else {
        console.log("A conta não foi encontrada.");
        res.redirect('/login');
    }
});

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
});
