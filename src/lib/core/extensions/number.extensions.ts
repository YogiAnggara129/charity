declare global {
	interface Number {
		toIdr(): string;
	}
}

Number.prototype.toIdr = function (): string {
	return this.toLocaleString("id-ID", {
		style: "currency",
		currency: "IDR",
	});
};

export {};
