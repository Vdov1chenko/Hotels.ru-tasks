-- Создание таблицы "film"
CREATE TABLE film (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  duration INT,
  rating FLOAT,
  budget FLOAT,
  box_office FLOAT
);

-- Заполнение таблицы "film"
INSERT INTO film (title, year, duration, rating, budget, box_office)
VALUES
  ('Побег из Шоушенка', 1994, 142, 9.23, 25.0, 58.5),
  ('Зеленая миля', 1999, 189, 9.08, 60.0, 286.8),
  ('Форрест Гамп', 1994, 142, 9.01, 55.0, 677.9),
  ('Интерстеллар', 2014, 169, 8.79, 165.0, 677.5),
  ('Список Шиндлера', 1993, 195, 8.89, 22.0, 321.2);

-- Создание таблицы "person"
CREATE TABLE person (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  birthdate DATE,
  deathdate DATE,
  bio TEXT
);

-- Заполнение таблицы "person" 
INSERT INTO person (name, birthdate, deathdate, bio)
VALUES
  ('Тим Роббинс', '1958-10-16', NULL, 'Актер'),
  ('Морган Фриман', '1937-06-01', NULL, 'Актер'),
  ('Том Хэнкс', '1956-07-09', NULL, 'Актер'),
  ('Кристофер Нолан', '1970-07-30', NULL, 'Режиссер'),
  ('Лиам Нисон', '1952-06-07', NULL, 'Актер');

  -- Создание таблицы "film_person"
CREATE TABLE film_person (
  id SERIAL PRIMARY KEY,
  id_film INT NOT NULL,
  id_person INT NOT NULL,
  role VARCHAR(255) NOT NULL
);

-- Заполнение таблицы "film_person"
INSERT INTO film_person (id_film, id_person, role)
VALUES
  (1, 1, 'Сценарист'),
  (1, 2, 'Актер'),
  (2, 1, 'Сценарист'),
  (2, 2, 'Актер'),
  (2, 5, 'Актер'),
  (3, 1, 'Сценарист'),
  (3, 2, 'Актер'),
  (4, 4, 'Режиссер'),
  (4, 5, 'Актер'),
  (5, 1, 'Сценарист'),
  (5, 2, 'Актер'),
  (5, 4, 'Режиссер');

-- Создание таблицы "genre"
CREATE TABLE genre (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Заполнение таблицы "genre"
INSERT INTO genre (name)
VALUES
  ('Драма'),
  ('Криминал'),
  ('Исторический'),
  ('Военный');

-- Создание таблицы "film_genre"
CREATE TABLE film_genre (
  id SERIAL PRIMARY KEY,
  id_film INT NOT NULL,
  id_genre INT NOT NULL
);

-- Заполнение таблицы "film_genre"
INSERT INTO film_genre (id_film, id_genre)
VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (2, 1),
  (2, 3),
  (3, 1),
  (3, 2),
  (3, 4),
  (4, 2),
  (5, 1),
  (5, 2);

-- Создание таблицы "country"
CREATE TABLE country (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Заполнение таблицы "country"
INSERT INTO country (name)
VALUES
  ('США'),
  ('Великобритания'),
  ('Франция'),
  ('Италия');

-- Создание таблицы "film_country"
CREATE TABLE film_country (
  id SERIAL PRIMARY KEY,
  id_film INT NOT NULL,
  id_country INT NOT NULL
);
-- Заполнение таблицы "film_country"
INSERT INTO film_country (id_film, id_country)
VALUES 
  (1, 1),
  (1, 3),
  (2, 1),
  (2, 2),
  (3, 1),
  (3, 2),
  (4, 2),
  (5, 1);
  -- Создание таблицы "review"
CREATE TABLE review (
  id SERIAL PRIMARY KEY,
  id_film INT NOT NULL,
  username VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  rating INT NOT NULL
);

-- Заполнение таблицы "review"
INSERT INTO review (id_film, username, text, rating)
VALUES
  (1, 'user1', 'Отличный фильм!', 9),
  (1, 'user2', 'Суперский!', 10),
  (1, 'user3', 'Нормально', 6),
  (2, 'user1', 'Ну такое', 5),
  (2, 'user2', 'Неплохо', 7),
  (3, 'user3', 'Отличная работа!', 8),
  (4, 'user1', 'Хороший фильм', 7),
  (5, 'user2', 'Прекрасный фильм', 10);

-- Создание таблицы "comment"
CREATE TABLE comment (
  id SERIAL PRIMARY KEY,
  id_review INT NOT NULL,
  username VARCHAR(255) NOT NULL,
  text TEXT NOT NULL
);

-- Заполнение таблицы "comment"
INSERT INTO comment (id_review, username, text)
VALUES
  (1, 'user2', 'Согласен, очень понравилось!'),
  (1, 'user3', 'Не согласен, скучный фильм.'),
  (2, 'user1', 'Мне тоже не понравилось.'),
  (4, 'user2', 'Сильно сомневаюсь, что это лучший фильм.'),
  (5, 'user1', 'Полностью согласен!'),
  (5, 'user3', 'Мне не понравилось.');

-- Создание таблицы "favorite"
CREATE TABLE favorite (
  id SERIAL PRIMARY KEY,
  id_film INT NOT NULL,
  username VARCHAR(255) NOT NULL
);

-- Заполнение таблицы "favorite"
INSERT INTO favorite (id_film, username)
VALUES
  (1, 'user1'),
  (1, 'user2'),
  (2, 'user1'),
  (3, 'user3'),
  (4, 'user2'),
  (5, 'user3');

/* База данных готова для использования и хранит информацию о фильмах, 
их создателях, жанрах, странах производства, отзывах и комментариях к ним, 
а также о том, какие фильмы добавлены в избранное пользователями. */
