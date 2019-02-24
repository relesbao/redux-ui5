module.exports = (grunt) => {
  grunt.config.set('eslint', {
    options: {
      fix: true,
    },
    target: ['src/app/*.js', 'src/app/**/*.js', 'grunt/**/*.js'],
  });
  grunt.loadNpmTasks('grunt-eslint');
};
