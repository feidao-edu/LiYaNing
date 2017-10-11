export function add1(a: number, b: number) {
	return a + b;
}

export function add2(a: number) {
	return function add(b: number) {
		return a + b;
	}
}


export function add4(a: number) {
	return function (b: number) {
		return a + b;
	}
}

export function add5(a: number) {
	return (b: number) => {
		return a + b;
	}
}

export function add6(a: number, b: number) {
	class Add {
		public static add(a: number, b: number) {
			return a + b;
		}
	}
	return Add.add(a, b);
}

export function add7(a: number, b: number) {
	class Add {
		public add(a: number, b: number) {
			return a + b;
		}
	}
	const e = new Add();
	return e.add(a, b);
}

// add8 will work in js, too.
// export function add8(a: number, b: number) {
// 	function Add() { }
// 	Add.prototype.add = function (a: number, b: number) {
// 		return a + b;
// 	};
// 	const e = new Add();
// 	return e.add(a, b);
// }

export function add9(a: () => number, b: () => number) {
	return a() + b();
}

