import '@angular/compiler';
import '@analogjs/vitest-angular/setup-snapshots';

import { provideZonelessChangeDetection, NgModule } from '@angular/core';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { Ports, provideCore } from './app/core/core';
import { Dispatcher } from '@ngrx/signals/events';
import { demandStore } from './app/core/store/demandStore';

@NgModule({
  providers: [provideZonelessChangeDetection()],
})
export class ZonelessTestModule {}

getTestBed().initTestEnvironment(
  [BrowserTestingModule, ZonelessTestModule],
  platformBrowserTesting(),
);

export const configureAppTest = (adapters: Partial<Ports>) => {
  TestBed.configureTestingModule({
    providers: [...provideCore(adapters)],
  });
  const store = TestBed.inject(demandStore);
  const dispatcher = TestBed.inject(Dispatcher);
  return { _store: store, _dispatcher: dispatcher };
};
