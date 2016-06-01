/*
 * jQuery.stickthis v0.1.0
 * https://github.com/alejandromur/stickthis
 *
 * Copyright 2016, alejandro@mamutlove.es
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function( $, window, document, undefined ){

  "use strict";

    $.stickthis = function(el, options){

        var SCROLL = 0;
        var DISTANCE = 0;
        var base = this;

        base.$el = $(el);
        base.el = el;

        base.$el.data('stickthis',base);

        base.initialize = function(){
            base.getDistance();
            base.options = $.extend({}, $.stickthis.defaultOptions, options);
        };

        base.getDistance = function(){
            DISTANCE = base.$el.offset().top;
            base.listen();
        };

        base.listen = function(){
            window.addEventListener("scroll", base.getScrollPosition, false);
        };

        base.getScrollPosition = function(){
            SCROLL = document.body.scrollTop || window.pageYOffset;
            base.checkPosition();
        };

        base.checkPosition = function(){
            if( SCROLL >= DISTANCE ){
                base.$el.addClass(base.options.classname);

                if( $.isFunction( base.options.isHappening ) ){
                    base.options.isHappening.call( this );
                }
            }else{
                base.$el.removeClass(base.options.classname);

                if( $.isFunction( base.options.isNotHappening ) ){
                    base.options.isNotHappening.call( this );
                }
            }
        };

        base.initialize();

    };

    $.stickthis.defaultOptions = {
        classname : "sticked",
        isHappening : function() { console.log('callback ISHAPPENING'); },
        isNotHappening : function() { console.log('callback ISNOTHAPPENING'); }
    };

    $.fn.stickthis = function(options) {

        return this.each(function(){
            var sticked = new $.stickthis(this,options);
        });
    };

}( jQuery, window, document ));