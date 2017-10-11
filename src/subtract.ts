export function subtract(a: number, b: number) {
	return a - b;
}
export function subtract2(a: number) {
	return function (b: number) {
		return a - b;
	}
}

export function subtract3(a: number) {
	return (b: number) => {
		return a - b;
	}
}