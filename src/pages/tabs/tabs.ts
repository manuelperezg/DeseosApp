import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { PendientesPage } from '../pendientes/pendientes.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesPage;
  tab2Root = AboutPage;
  // tab3Root = ContactPage;

  constructor() {

  }
}
