'use strict';

import fs from 'fs';

import gulp from 'gulp';
import gif from 'gulp-if';
import rename from 'gulp-rename';
import htmlmin from 'gulp-minify-html';
import tap from 'gulp-tap';
import unretina from 'gulp-unretina';
import newer from 'gulp-newer';
import sass from 'gulp-sass';
import imagemin from 'gulp-imagemin';

import handlebars from 'gulp-compile-handlebars';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';

import bs from 'browser-sync';

const browserSync = bs.create();

const site = {
  title: 'Conduct this',
  description: 'A game about trains',
  keywords: 'train,game,conduct,robocat',
  url: 'http://conductthis.com',
  fb: {
    appName: '',
    appId: ''
  }
};

const config = {
  build: './build',
  paths: {
    html: 'index.handlebars',
    partials: './assets/templates/**/*.handlebars',
    images: './assets/images/**/*.{png,jpg,gif,svg}',
    sass: './assets/sass/**/*.{scss,sass}'
  },
  production: false,
  retina_suffix: '_2x'
};

function retina_path(path) {
  const components = path.split('.');
  return `${components[0]}_2x${components[1]}`
}

function unretina_path(path) {
  const components = path.split(config.retina_suffix);
  return `${components[0]}${components[1]}`;
}

function file_exists(path) {
  return !path.match(`\n`) && fs.existsSync(path);
}

function load_partial(name) {
  const path = `./assets/templates/${name}.handlebars`;

  if(file_exists(path)) {
    return fs.readFileSync(path, 'utf8');
  }

  return null;
}

function image_helper(path, cls = null, has_retina = true) {
  const retina = retina_path(path);
  var str = `<img src="/images/${path}"`;
  if (retina) {
    str += ` data-at2x="/images/${retina}"`;
  }
  if (typeof cls === 'string') {
    str += ` class="${cls}"`;
  }
  str += ">";

  return str;
}

gulp.task('sass', () => {
  const options = {
    imagePath: '/images',
    includePaths: [
      './node_modules/normalize.css'
    ]
  };

  if (config.production) {
    options.outputStyle = 'compressed';
    options.sourceComments = false;
  }

  return gulp.src(config.paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass(options))
    .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
    .pipe(sourcemaps.write('./maps', {includeContent: false, sourceRoot: './assets/sass'}))
    .pipe(gulp.dest(`${config.build}/css`))
    .pipe(gif(!config.production, browserSync.stream({match: '**/*.css'})));
});

gulp.task('imagecopy', () => {
  return gulp.src([config.paths.images, `!*${config.retina_suffix}.{png,jpg,gif,svg}`])
    .pipe(imagemin())
    .pipe(gulp.dest(`${config.build}/images`));
});

gulp.task('unretina', () => {
  const dest = `${config.build}/images`;

  return gulp.src(`./assets/images/**/*${config.retina_suffix}.{png,jpg,gif}`)
    .pipe(newer({
      dest: dest,
      map: unretina_path
    }))
    .pipe(unretina({suffix: config.retina_suffix}))
    .pipe(imagemin())
    .pipe(gulp.dest(dest));
});

gulp.task('images', ['imagecopy', 'unretina']);

gulp.task('html', () => {
  const data = {
    config: config,
    site: site
  };

  let options = {
    ignorePartials: true,
    partials: {
      get header() { return load_partial('header') },
      get footer() { return load_partial('footer') }
    },
    helpers: {
      img: (path, cls = null, has_retina = true) => image_helper(path, cls, has_retina)
    }
  };

  return gulp.src(config.paths.html)
    .pipe(handlebars(data, options))
    .pipe(rename({extname: '.html'}))
    .pipe(gif(config.production, htmlmin()))
    .pipe(gulp.dest(config.build))
    .pipe(browserSync.stream());
});

gulp.task('sync', () => {
  browserSync.init({
    server: {
      baseDir: config.build
    },
    open: false
  });
});

gulp.task('set-production', () => {
  config.production = true;
});

gulp.task('build', ['html', 'images', 'sass']);
gulp.task('production', ['set-production', 'build'])

gulp.task('watch', ['sync'], () => {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.partials, ['html']);
  gulp.watch(config.paths.images, ['images']);
  gulp.watch(config.paths.sass, ['sass']);
});

gulp.task('default', ['build', 'watch']);
