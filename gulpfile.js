var gulp = require("gulp"),
  cssnano = require("gulp-cssnano"), // Подключаем пакет для минификации CSS
  rename = require("gulp-rename"); // Подключаем библиотеку для переименования файлов
gulp.task("browser-sync", function() {
  // Создаем таск browser-sync
  browserSync({
    // Выполняем browser Sync
    server: {
      // Определяем параметры сервера
      baseDir: "app" // Директория для сервера - app
    },
    notify: false // Отключаем уведомления
  });
});
gulp.task("min-css", function() {
  return gulp
    .src("./css/style.css") // Выбираем файл для минификации
    .pipe(cssnano()) // Сжимаем
    .pipe(rename({ suffix: ".min" })) // Добавляем суффикс .min
    .pipe(gulp.dest("./css")); // Выгружаем в папку app/css
});
