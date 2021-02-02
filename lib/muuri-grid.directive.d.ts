import { ElementRef, OnDestroy, OnInit, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import Grid, { GridOptions, Item } from 'muuri';
import * as i0 from "@angular/core";
export declare class MuuriGridDirective implements OnInit, OnDestroy, OnChanges {
    private elRef;
    config: GridOptions;
    gridCreated: EventEmitter<Grid>;
    gridObject?: Grid;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    /**
     * Rebuild the grid when the Muuri config changes.
     * @param changes Changes object.
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Initialize the grid.
     */
    init(grid: ElementRef): void;
    /**
     * Add a new item to the grid.
     */
    addItem(item: ElementRef): Item[];
    destroyLayout(): void;
    refresh(): void;
    ngOnDestroy(): void;
    /**
     * Remove an item from the grid.
     */
    removeItem(item: ElementRef): void;
    static ɵfac: i0.ɵɵFactoryDef<MuuriGridDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MuuriGridDirective, "[muuriGrid]", never, { "config": "config"; }, { "gridCreated": "gridCreated"; }, never>;
}
