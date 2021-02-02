import { EventEmitter, ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Directive, Input, Output, Host, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import Grid from 'muuri';

class MuuriGridDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.gridCreated = new EventEmitter();
    }
    ngOnInit() {
        this.init(this.elRef);
    }
    /**
     * Rebuild the grid when the Muuri config changes.
     * @param changes Changes object.
     */
    ngOnChanges(changes) {
        if (this.gridObject) {
            this.destroyLayout();
            this.init(this.elRef);
        }
    }
    /**
     * Initialize the grid.
     */
    init(grid) {
        this.gridObject = new Grid(grid.nativeElement, this.config);
        this.gridCreated.emit(this.gridObject);
    }
    /**
     * Add a new item to the grid.
     */
    addItem(item) {
        return this.gridObject.add(item.nativeElement);
    }
    destroyLayout() {
        this.gridObject.destroy();
        this.gridObject = null;
    }
    refresh() {
        this.gridObject.refreshItems();
    }
    ngOnDestroy() {
        this.destroyLayout();
    }
    /**
     * Remove an item from the grid.
     */
    removeItem(item) {
        const gridItem = this.gridObject.getItem(item.nativeElement);
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
    }
}
MuuriGridDirective.ɵfac = function MuuriGridDirective_Factory(t) { return new (t || MuuriGridDirective)(ɵɵdirectiveInject(ElementRef)); };
MuuriGridDirective.ɵdir = ɵɵdefineDirective({ type: MuuriGridDirective, selectors: [["", "muuriGrid", ""]], inputs: { config: "config" }, outputs: { gridCreated: "gridCreated" }, features: [ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MuuriGridDirective, [{
        type: Directive,
        args: [{
                selector: '[muuriGrid]'
            }]
    }], function () { return [{ type: ElementRef }]; }, { config: [{
            type: Input
        }], gridCreated: [{
            type: Output
        }] }); })();

class MuuriGridItemDirective {
    constructor(tileGrid, elRef) {
        this.tileGrid = tileGrid;
        this.elRef = elRef;
        this.itemCreated = new EventEmitter();
    }
    ngOnInit() {
        // As Angular creates one item at a time, we'll get an array back with just one item.
        this.itemCreated.emit(this.tileGrid.addItem(this.elRef)[0]);
        // Force refresh the grid to prevent overlapping items
        this.tileGrid.refresh();
    }
    ngOnDestroy() {
        this.tileGrid.removeItem(this.elRef);
    }
}
MuuriGridItemDirective.ɵfac = function MuuriGridItemDirective_Factory(t) { return new (t || MuuriGridItemDirective)(ɵɵdirectiveInject(MuuriGridDirective, 1), ɵɵdirectiveInject(ElementRef)); };
MuuriGridItemDirective.ɵdir = ɵɵdefineDirective({ type: MuuriGridItemDirective, selectors: [["", "muuriGridItem", ""]], outputs: { itemCreated: "itemCreated" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MuuriGridItemDirective, [{
        type: Directive,
        args: [{
                selector: '[muuriGridItem]'
            }]
    }], function () { return [{ type: MuuriGridDirective, decorators: [{
                type: Host
            }] }, { type: ElementRef }]; }, { itemCreated: [{
            type: Output
        }] }); })();

class MuuriModule {
}
MuuriModule.ɵmod = ɵɵdefineNgModule({ type: MuuriModule });
MuuriModule.ɵinj = ɵɵdefineInjector({ factory: function MuuriModule_Factory(t) { return new (t || MuuriModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MuuriModule, { declarations: [MuuriGridDirective, MuuriGridItemDirective], exports: [MuuriGridDirective, MuuriGridItemDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MuuriModule, [{
        type: NgModule,
        args: [{
                declarations: [MuuriGridDirective, MuuriGridItemDirective],
                imports: [],
                exports: [MuuriGridDirective, MuuriGridItemDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of muuri-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MuuriGridDirective, MuuriGridItemDirective, MuuriModule };
//# sourceMappingURL=muuri-angular.js.map
