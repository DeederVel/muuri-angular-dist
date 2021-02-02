import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Item } from 'muuri';
import { MuuriGridDirective } from './muuri-grid.directive';
import * as i0 from "@angular/core";
export declare class MuuriGridItemDirective implements OnInit, OnDestroy {
    private tileGrid;
    private elRef;
    itemCreated: EventEmitter<Item>;
    constructor(tileGrid: MuuriGridDirective, elRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<MuuriGridItemDirective, [{ host: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MuuriGridItemDirective, "[muuriGridItem]", never, {}, { "itemCreated": "itemCreated"; }, never>;
}
