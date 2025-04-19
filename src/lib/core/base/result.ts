export type Result<T> = Success<T> | Failed;

export class Success<T> {
	readonly ok = true;
	constructor(public readonly value: T) {}
}

export class Failed {
	readonly ok = false;
	constructor(public readonly message: string) {}
}

export function matchResult<T, R>(
	result: Result<T>,
	handlers: {
		success: (value: T) => R;
		failed: (msg: string) => R;
	}
): R {
	return result.ok
		? handlers.success(result.value)
		: handlers.failed(result.message);
}
