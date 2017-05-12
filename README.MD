# spi-ng2

## Installation

To install , run:

```bash
$ npm install spi-ng2 --save
```

## Usage


and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import SPI library
import { SpiModule } from 'spi-ng2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpiModule.forRoot(),  //SPI MODULE  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


## License

MIT © [Ozgur Cimen](mailto:derozgur@gmail.com)
