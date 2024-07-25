import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
@NgModule ({
    imports: [
      MatSlideToggleModule,
      CommonModule,
      RouterModule,
      FormsModule

    ]
  })
  class AppModule {}