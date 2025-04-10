export class CharityEntity {
	constructor(
		public id: number,
		public title: string,
		public category: string,
		public thumbnail: string,
		public pledged: number,
		public target: number,
		public date_end: Date,
		public profile_photo: string,
		public profile_name: string,
		public no_pledges: number
	) {}

	// Optional: method untuk melihat progress
	getProgressPercentage(): number {
		return this.target > 0 ? (this.pledged / this.target) * 100 : 0;
	}

	// Optional: method to check if the campaign is still active
	isActive(): boolean {
		const now = new Date();
		return now < this.date_end;
	}
}
