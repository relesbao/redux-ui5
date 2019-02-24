const includeAll = require('include-all');
const path = require('path');
const packageFile = require('./package.json');

module.exports = (grunt) => {
  const loadTasks = relPath => includeAll({
    dirname: path.resolve(__dirname, relPath),
    filter: /(.+)\.js$/,
  });
  const invokeConfigFn = (tasks) => {
    const taskKeys = Object.keys(tasks);
    taskKeys.forEach((taskName) => {
      tasks[taskName](grunt, packageFile);
    });
  };
  // Load task functions
  const taskConfigurations = loadTasks('./grunt/tasks');
  const registerDefinitions = loadTasks('./grunt/config');
  // (ensure that a default task exists)
  if (!registerDefinitions.default) {
    registerDefinitions.default = () => {
      grunt.registerTask('default', []);
    };
  }
  // Run task functions to configure Grunt.
  invokeConfigFn(taskConfigurations);
  invokeConfigFn(registerDefinitions);
};
