!function ($, jQuery, window, document) {
    'use strict';

    /**
     * @ngdoc service
     * @name camera
     * @public
     * 
     * @param $injector
     */
    function Camera($injector) {
        return $injector.get('desktopCamera');
    }

    app.module.factory('camera', Camera);
}();
