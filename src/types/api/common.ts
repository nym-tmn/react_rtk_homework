export type ResponseType<T> = {
	info: ResponseInfoType;
	results: T;
}

export interface ResourceBase {
	id: number
	name: string
	url: string
	created: string
}

export interface ResponseInfoType {
	pages: number;
}