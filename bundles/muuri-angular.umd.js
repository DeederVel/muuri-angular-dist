(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('muuri')) :
    typeof define === 'function' && define.amd ? define('muuri-angular', ['exports', '@angular/core', 'muuri'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['muuri-angular'] = {}, global.ng.core, global.Grid));
}(this, (function (exports, i0, Grid) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid);

    var MuuriGridDirective = /** @class */ (function () {
        function MuuriGridDirective(elRef) {
            this.elRef = elRef;
            this.gridCreated = new i0.EventEmitter();
        }
        MuuriGridDirective.prototype.ngOnInit = function () {
            this.init(this.elRef);
        };
        /**
         * Rebuild the grid when the Muuri config changes.
         * @param changes Changes object.
         */
        MuuriGridDirective.prototype.ngOnChanges = function (changes) {
            if (this.gridObject) {
                this.destroyLayout();
                this.init(this.elRef);
            }
        };
        /**
         * Initialize the grid.
         */
        MuuriGridDirective.prototype.init = function (grid) {
            this.gridObject = new Grid__default['default'](grid.nativeElement, this.config);
            this.gridCreated.emit(this.gridObject);
        };
        /**
         * Add a new item to the grid.
         */
        MuuriGridDirective.prototype.addItem = function (item) {
            return this.gridObject.add(item.nativeElement);
        };
        MuuriGridDirective.prototype.destroyLayout = function () {
            this.gridObject.destroy();
            this.gridObject = null;
        };
        MuuriGridDirective.prototype.refresh = function () {
            this.gridObject.refreshItems();
        };
        MuuriGridDirective.prototype.ngOnDestroy = function () {
            this.destroyLayout();
        };
        /**
         * Remove an item from the grid.
         */
        MuuriGridDirective.prototype.removeItem = function (item) {
            var gridItem = this.gridObject.getItem(item.nativeElement);
            if (gridItem === null
                || item === null
                || item === undefined
                || gridItem === undefined) {
                //Double remotion might be happening, silence it
            }
            else {
                this.gridObject.remove([gridItem], {
                    removeElements: true,
                    layout: true
                });
            }
        };
        return MuuriGridDirective;
    }());
    MuuriGridDirective.ɵfac = function MuuriGridDirective_Factory(t) { return new (t || MuuriGridDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    MuuriGridDirective.ɵdir = i0.ɵɵdefineDirective({ type: MuuriGridDirective, selectors: [["", "muuriGrid", ""]], inputs: { config: "config" }, outputs: { gridCreated: "gridCreated" }, features: [i0.ɵɵNgOnChangesFeature] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MuuriGridDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[muuriGrid]'
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, { config: [{
                    type: i0.Input
                }], gridCreated: [{
                    type: i0.Output
                }] });
    })();

    var MuuriGridItemDirective = /** @class */ (function () {
        function MuuriGridItemDirective(tileGrid, elRef) {
            this.tileGrid = tileGrid;
            this.elRef = elRef;
            this.itemCreated = new i0.EventEmitter();
        }
        MuuriGridItemDirective.prototype.ngOnInit = function () {
            // As Angular creates one item at a time, we'll get an array back with just one item.
            this.itemCreated.emit(this.tileGrid.addItem(this.elRef)[0]);
            // Force refresh the grid to prevent overlapping items
            this.tileGrid.refresh();
        };
        MuuriGridItemDirective.prototype.ngOnDestroy = function () {
            this.tileGrid.removeItem(this.elRef);
        };
        return MuuriGridItemDirective;
    }());
    MuuriGridItemDirective.ɵfac = function MuuriGridItemDirective_Factory(t) { return new (t || MuuriGridItemDirective)(i0.ɵɵdirectiveInject(MuuriGridDirective, 1), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    MuuriGridItemDirective.ɵdir = i0.ɵɵdefineDirective({ type: MuuriGridItemDirective, selectors: [["", "muuriGridItem", ""]], outputs: { itemCreated: "itemCreated" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MuuriGridItemDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[muuriGridItem]'
                    }]
            }], function () {
            return [{ type: MuuriGridDirective, decorators: [{
                            type: i0.Host
                        }] }, { type: i0.ElementRef }];
        }, { itemCreated: [{
                    type: i0.Output
                }] });
    })();

    var MuuriModule = /** @class */ (function () {
        function MuuriModule() {
        }
        return MuuriModule;
    }());
    MuuriModule.ɵmod = i0.ɵɵdefineNgModule({ type: MuuriModule });
    MuuriModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MuuriModule_Factory(t) { return new (t || MuuriModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MuuriModule, { declarations: [MuuriGridDirective, MuuriGridItemDirective], exports: [MuuriGridDirective, MuuriGridItemDirective] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MuuriModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [MuuriGridDirective, MuuriGridItemDirective],
                        imports: [],
                        exports: [MuuriGridDirective, MuuriGridItemDirective]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of muuri-angular
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MuuriGridDirective = MuuriGridDirective;
    exports.MuuriGridItemDirective = MuuriGridItemDirective;
    exports.MuuriModule = MuuriModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=muuri-angular.umd.js.map
