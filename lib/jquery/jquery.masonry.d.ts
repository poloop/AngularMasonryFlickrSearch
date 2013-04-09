/**
 * Created with JetBrains WebStorm.
 * User: plong
 * Date: 20/03/13
 * Time: 19:15
 * To change this template use File | Settings | File Templates.
 */

/// <reference path='jquery.d.ts' >

interface JQuery {
    masonry(option : any) : any;
    masonry(methodName: string, option ?: any) : any;

    imagesLoaded(fn : () => any) : any;
}