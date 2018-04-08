/**
 * Seed application programming interface (API)
 * Restful API to manage the Seed Application to be used as an example.
 *
 * OpenAPI spec version: 1.0.2
 * Contact: support@systelabsw.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export class User {
	id: number;
	surname: string;
	name: string;
	login: string;
	password: string;
	role: User.RoleEnum;

}

export namespace User {
	export type RoleEnum = 'USER' | 'ADMIN';
}


