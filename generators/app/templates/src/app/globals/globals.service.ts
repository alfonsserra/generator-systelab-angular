import { Injectable } from '@angular/core';

@Injectable({
	provideIn: 'root'
})
export class ApiGlobalsService {
	bearer: string;
}
