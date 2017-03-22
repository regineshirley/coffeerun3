(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },

        //Silver Challenge Chapter 12
        isDecaf: function(order, caffeine) {
            if (/decaf/.test(order) && caffeine > 20) {
                return false;
            } else {
                return true;
            }
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
