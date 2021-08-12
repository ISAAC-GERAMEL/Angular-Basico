import { NgModule } from '@angular/core';
import { contadorcomponet } from './contador.component';


@NgModule({
    declarations: [
        contadorcomponet
    ],
    exports: [
        contadorcomponet
    ]
})
export class contadorModule {}
