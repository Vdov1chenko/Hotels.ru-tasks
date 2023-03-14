const http = require('http');
const url = require('url');
const { Pool } = require('pg');

// Подключение к базе данных PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'movies',
  password: 'admin',
  port: 5432,
});

// Создание таблицы жанров
pool.query(`
  CREATE TABLE IF NOT EXISTS genres (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
  );
`).then(() => console.log('Table "genres" created'));

// Создание таблицы фильмов
pool.query(`
  CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    release_year INTEGER NOT NULL
  );
`).then(() => console.log('Table "movies" created'));

// Создание таблицы связи между фильмами и жанрами
pool.query(`
  CREATE TABLE IF NOT EXISTS movie_genres (
    movie_id INTEGER REFERENCES movies(id),
    genre_id INTEGER REFERENCES genres(id),
    PRIMARY KEY (movie_id, genre_id)
  );
`).then(() => console.log('Table "movie_genres" created'));

// Создание сервера
const server = http.createServer(async (req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === '/genres') {
    // Получение списка жанров
    if (req.method === 'GET') {
      try {
        const result = await pool.query('SELECT * FROM genres');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result.rows));
      } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      }
    }
    // Создание нового жанра
    else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', async () => {
        const { name } = JSON.parse(body);
        try {
          const result = await pool.query('INSERT INTO genres (name) VALUES ($1) RETURNING *', [name]);
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(result.rows[0]));
        } catch (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        }
      });
    }
  } else if (pathname === '/movies') {
    // Получение списка фильмов
    if (req.method === 'GET') {
      try {
        const result = await pool.query('SELECT * FROM movies');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result.rows));
      } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      }
    }
    // Создание нового фильма
    else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          const { title, release_year, genres } = JSON.parse(body);
          const client = await pool.connect();
          try {
            await client.query('BEGIN');
            const movieResult = await client.query('INSERT INTO movies (title, release_year) VALUES ($1, $2) RETURNING id', [title, release_year]);
            const movieId = movieResult.rows[0].id;
            for (const genre of genres) {
              const genreResult = await client.query('SELECT * FROM genres WHERE name = $1', [genre]);
              let genreId;
              if (genreResult.rowCount === 0) {
                const newGenreResult = await client.query('INSERT INTO genres (name) VALUES ($1) RETURNING id', [genre]);
                genreId = newGenreResult.rows[0].id;
              } else {
                genreId = genreResult.rows[0].id;
              }
              await client.query('INSERT INTO movie_genres (movie_id, genre_id) VALUES ($1, $2)', [movieId, genreId]);
            }
            await client.query('COMMIT');
            const result = await pool.query('SELECT * FROM movies WHERE id = $1', [movieId]);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result.rows[0]));
          } catch (err) {
            await client.query('ROLLBACK');
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
          } finally {
            client.release();
          }
        });
      } } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        }
        });
        
// Запуск сервера
const port = 8000;
server.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});