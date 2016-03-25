define([
  'intern!object',
  'intern/chai!assert',
], function (registerSuite, assert) {

  registerSuite({
    'passing test': function () {},
    'failing test': function () {
      throw new Error('Oops');
    }
  });

});
