<script lang="ts">
	import Header from "$lib/core/components/Header.svelte";
	import CharityList from "$lib/core/components/CharityList.svelte";
	import Welcome from "$lib/core/components/Welcome.svelte";
	import Promo from "$lib/core/components/Promo.svelte";
	import Footer from "$lib/core/components/Footer.svelte";
	import { CharityEntity } from "$lib/domain/charity.entity";

	let title = "Charity";
	let charities = [
		new CharityEntity(
			1,
			"First Charity Project",
			"Money",
			"https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png",
			5000,
			100000,
			new Date("10 August 2020"),
			"https://www.shutterstock.com/image-photo/happy-older-business-man-executive-260nw-2362307153.jpg",
			"Viroide Bueno",
			0
		),
		new CharityEntity(
			2,
			"Second Charity Project",
			"Money",
			"https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png",
			5000,
			100000,
			new Date("10 August 2020"),
			"https://www.shutterstock.com/image-photo/happy-older-business-man-executive-260nw-2362307153.jpg",
			"Viroide Bueno",
			0
		),
		new CharityEntity(
			3,
			"Third Charity Project",
			"Money",
			"https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png",
			5000,
			100000,
			new Date("10 August 2020"),
			"https://www.shutterstock.com/image-photo/happy-older-business-man-executive-260nw-2362307153.jpg",
			"Viroide Bueno",
			0
		),
		new CharityEntity(
			4,
			"Fourth Charity Project",
			"Money",
			"https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png",
			5000,
			100000,
			new Date("10 August 2020"),
			"https://www.shutterstock.com/image-photo/happy-older-business-man-executive-260nw-2362307153.jpg",
			"Viroide Bueno",
			0
		),
	];
</script>

<Welcome />
<CharityList {charities} />
<Promo />
