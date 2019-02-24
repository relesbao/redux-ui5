jQuery.sap.registerModulePath('App', './bundle/app');
sap.ui.define([
  'sap/ui/core/UIComponent',
  'App',
  'sap/ui/core/ComponentSupport',
], (UIComponent, App) => UIComponent.extend('com.redux.ui5.Component', {
  metadata: {
    manifest: 'json',
  },

  init(...args) {
    console.log(App);
    debugger;
    // call the base component's init function
    UIComponent.prototype.init.apply(this, args);
  },

}));
