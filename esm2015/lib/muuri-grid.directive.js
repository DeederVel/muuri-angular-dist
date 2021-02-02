import { Directive, Input, Output, EventEmitter } from '@angular/core';
import Grid from 'muuri';
import * as i0 from "@angular/core";
export class MuuriGridDirective {
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
MuuriGridDirective.ɵfac = function MuuriGridDirective_Factory(t) { return new (t || MuuriGridDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
MuuriGridDirective.ɵdir = i0.ɵɵdefineDirective({ type: MuuriGridDirective, selectors: [["", "muuriGrid", ""]], inputs: { config: "config" }, outputs: { gridCreated: "gridCreated" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MuuriGridDirective, [{
        type: Directive,
        args: [{
                selector: '[muuriGrid]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { config: [{
            type: Input
        }], gridCreated: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV1cmktZ3JpZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiQzoveGFtcHAvaHRkb2NzL243L211dXJpLWFuZ3VsYXIvcHJvamVjdHMvbXV1cmktYW5ndWxhci9zcmMvIiwic291cmNlcyI6WyJsaWIvbXV1cmktZ3JpZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sSUFBMkIsTUFBTSxPQUFPLENBQUM7O0FBS2hELE1BQU0sT0FBTyxrQkFBa0I7SUFLM0IsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUgzQixnQkFBVyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBR3ZCLENBQUM7SUFFekMsUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksQ0FBQyxJQUFnQjtRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsSUFBZ0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELGFBQWE7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVLENBQUMsSUFBZ0I7UUFDdkIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdELElBQUcsUUFBUSxLQUFLLElBQUk7ZUFDakIsSUFBSSxLQUFLLElBQUk7ZUFDYixJQUFJLEtBQUssU0FBUztlQUNsQixRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3pCLGdEQUFnRDtTQUNqRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDL0IsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLE1BQU0sRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1NBQ0o7SUFDTCxDQUFDOztvRkFsRVEsa0JBQWtCO3VEQUFsQixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUg5QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7YUFDMUI7NkRBRVksTUFBTTtrQkFBZCxLQUFLO1lBQ0ksV0FBVztrQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBHcmlkLCB7IEdyaWRPcHRpb25zLCBJdGVtIH0gZnJvbSAnbXV1cmknO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1ttdXVyaUdyaWRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTXV1cmlHcmlkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBjb25maWc6IEdyaWRPcHRpb25zO1xyXG4gICAgQE91dHB1dCgpIGdyaWRDcmVhdGVkOiBFdmVudEVtaXR0ZXI8R3JpZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBncmlkT2JqZWN0PzogR3JpZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLmVsUmVmKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlYnVpbGQgdGhlIGdyaWQgd2hlbiB0aGUgTXV1cmkgY29uZmlnIGNoYW5nZXMuXHJcbiAgICAgKiBAcGFyYW0gY2hhbmdlcyBDaGFuZ2VzIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmdyaWRPYmplY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95TGF5b3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCh0aGlzLmVsUmVmKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBncmlkLlxyXG4gICAgICovXHJcbiAgICBpbml0KGdyaWQ6IEVsZW1lbnRSZWYpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyaWRPYmplY3QgPSBuZXcgR3JpZChncmlkLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY29uZmlnKTtcclxuICAgICAgICB0aGlzLmdyaWRDcmVhdGVkLmVtaXQodGhpcy5ncmlkT2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIG5ldyBpdGVtIHRvIHRoZSBncmlkLlxyXG4gICAgICovXHJcbiAgICBhZGRJdGVtKGl0ZW06IEVsZW1lbnRSZWYpOiBJdGVtW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRPYmplY3QuYWRkKGl0ZW0ubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveUxheW91dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyaWRPYmplY3QuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuZ3JpZE9iamVjdCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyaWRPYmplY3QucmVmcmVzaEl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95TGF5b3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYW4gaXRlbSBmcm9tIHRoZSBncmlkLlxyXG4gICAgICovXHJcbiAgICByZW1vdmVJdGVtKGl0ZW06IEVsZW1lbnRSZWYpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBncmlkSXRlbSA9IHRoaXMuZ3JpZE9iamVjdC5nZXRJdGVtKGl0ZW0ubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgaWYoZ3JpZEl0ZW0gPT09IG51bGwgXHJcbiAgICAgICAgfHwgaXRlbSA9PT0gbnVsbFxyXG4gICAgICAgIHx8IGl0ZW0gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgIHx8IGdyaWRJdGVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIC8vRG91YmxlIHJlbW90aW9uIG1pZ2h0IGJlIGhhcHBlbmluZywgc2lsZW5jZSBpdFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmdyaWRPYmplY3QucmVtb3ZlKFtncmlkSXRlbV0sIHtcclxuICAgICAgICAgICAgICByZW1vdmVFbGVtZW50czogdHJ1ZSxcclxuICAgICAgICAgICAgICBsYXlvdXQ6IHRydWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=