import { Directive, EventEmitter, Host, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./muuri-grid.directive";
export class MuuriGridItemDirective {
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
MuuriGridItemDirective.ɵfac = function MuuriGridItemDirective_Factory(t) { return new (t || MuuriGridItemDirective)(i0.ɵɵdirectiveInject(i1.MuuriGridDirective, 1), i0.ɵɵdirectiveInject(i0.ElementRef)); };
MuuriGridItemDirective.ɵdir = i0.ɵɵdefineDirective({ type: MuuriGridItemDirective, selectors: [["", "muuriGridItem", ""]], outputs: { itemCreated: "itemCreated" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MuuriGridItemDirective, [{
        type: Directive,
        args: [{
                selector: '[muuriGridItem]'
            }]
    }], function () { return [{ type: i1.MuuriGridDirective, decorators: [{
                type: Host
            }] }, { type: i0.ElementRef }]; }, { itemCreated: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV1cmktZ3JpZC1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJDOi94YW1wcC9odGRvY3MvbjcvbXV1cmktYW5ndWxhci9wcm9qZWN0cy9tdXVyaS1hbmd1bGFyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tdXVyaS1ncmlkLWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLElBQUksRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPckcsTUFBTSxPQUFPLHNCQUFzQjtJQUcvQixZQUE0QixRQUE0QixFQUFVLEtBQWlCO1FBQXZELGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUZ6RSxnQkFBVyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXVCLENBQUM7SUFFdkYsUUFBUTtRQUNKLHFGQUFxRjtRQUNyRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1RCxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs0RkFmUSxzQkFBc0I7MkRBQXRCLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBSGxDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2FBQzlCOztzQkFJZ0IsSUFBSTtpREFGUCxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3QsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJ211dXJpJztcclxuaW1wb3J0IHsgTXV1cmlHcmlkRGlyZWN0aXZlIH0gZnJvbSAnLi9tdXVyaS1ncmlkLmRpcmVjdGl2ZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW211dXJpR3JpZEl0ZW1dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTXV1cmlHcmlkSXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBPdXRwdXQoKSBpdGVtQ3JlYXRlZDogRXZlbnRFbWl0dGVyPEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSB0aWxlR3JpZDogTXV1cmlHcmlkRGlyZWN0aXZlLCBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEFzIEFuZ3VsYXIgY3JlYXRlcyBvbmUgaXRlbSBhdCBhIHRpbWUsIHdlJ2xsIGdldCBhbiBhcnJheSBiYWNrIHdpdGgganVzdCBvbmUgaXRlbS5cclxuICAgICAgICB0aGlzLml0ZW1DcmVhdGVkLmVtaXQodGhpcy50aWxlR3JpZC5hZGRJdGVtKHRoaXMuZWxSZWYpWzBdKTtcclxuXHJcbiAgICAgICAgLy8gRm9yY2UgcmVmcmVzaCB0aGUgZ3JpZCB0byBwcmV2ZW50IG92ZXJsYXBwaW5nIGl0ZW1zXHJcbiAgICAgICAgdGhpcy50aWxlR3JpZC5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50aWxlR3JpZC5yZW1vdmVJdGVtKHRoaXMuZWxSZWYpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==