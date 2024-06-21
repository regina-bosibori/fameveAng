import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
@NgModule ({
    imports: [
      MatSlideToggleModule,
      CommonModule,
      RouterModule
    ]
  })
  class AppModule {}