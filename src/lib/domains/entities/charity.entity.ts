export default class CharityEntity {
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

	// Method untuk mengubah objek menjadi JSON
	toJson(): any {
		return {
			id: this.id,
			title: this.title,
			category: this.category,
			thumbnail: this.thumbnail,
			pledged: this.pledged,
			target: this.target,
			date_end: this.date_end.toISOString(), // Date jadi string
			profile_photo: this.profile_photo,
			profile_name: this.profile_name,
			no_pledges: this.no_pledges,
		};
	}

	// Factory method untuk membuat objek dari JSON
	static fromJson(json: any): CharityEntity {
		return new CharityEntity(
			json.id,
			json.title,
			json.category,
			json.thumbnail,
			json.pledged,
			json.target,
			new Date(json.date_end), // String ke Date
			json.profile_photo,
			json.profile_name,
			json.no_pledges
		);
	}
}
