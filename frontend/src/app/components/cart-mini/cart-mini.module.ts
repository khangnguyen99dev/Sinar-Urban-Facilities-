import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartMiniComponent } from './cart-mini.component';


@NgModule({
    declarations: [
        CartMiniComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CartMiniComponent
    ]
})
export class CartMiniModule { }
