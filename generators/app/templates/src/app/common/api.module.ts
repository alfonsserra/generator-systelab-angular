import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './api/user.service';
import { GlobalsModule } from '../globals/globals.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports:      [
		CommonModule,
		HttpClientModule,
		GlobalsModule],
	declarations: [],
	exports:      []
})
export class ApiModule {
	public static forRoot(entryComponents?: Array<Type<any> | any[]>): ModuleWithProviders {
		return {
			ngModule:  ApiModule,
			providers: [
				{provide: UserService, useClass: UserService}]
		};
	}
}
