(function (global, $) {
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    
    Greetr.prototype = {};
    
    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || '';
    }
    
    Greetr.init.prototype = Greetr.prototype;
    global.Greeter = global.G$ = Greetr;
}(window, jQuery));
