declare global {
	interface Date {
		calculateDaysRemaining(): number;
	}
}

Date.prototype.calculateDaysRemaining = function (): number {
	const delta = this.getSeconds() - new Date().getSeconds();
	const oneDay = 24 * 60 * 60;
	return Math.round(Math.abs(delta / oneDay));
};

export {};
