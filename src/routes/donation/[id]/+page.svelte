<script lang="ts">
	import { page } from "$app/state";
	import CharityEntity from "$lib/domains/entities/charity.entity";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();

	const charity: CharityEntity = CharityEntity.fromJson(data.charity);
</script>

<!-- End header section -->
<!-- welcome section -->
<!--breadcumb start here-->
<section
	class="xs-banner-inner-section parallax-window"
	style="background-image:url('/assets/images/about_bg.png')"
>
	<div class="xs-black-overlay"></div>
	<div class="container">
		<div class="color-white xs-inner-banner-content">
			<h2>{charity?.title}</h2>
			<p>Give a helping hand for poor people</p>
			<ul class="xs-breadcumb">
				<li class="badge badge-pill badge-primary">
					<a href="/" class="color-white">Home /</a> Donate
				</li>
			</ul>
		</div>
	</div>
</section>
<!--breadcumb end here--><!-- End welcome section -->
<main class="xs-main">
	<!-- donation form section -->
	<section class="xs-section-padding bg-gray">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="xs-donation-form-images">
						<img
							src={charity?.thumbnail}
							class="img-responsive w-100 img-fluid"
							alt="Family Images"
						/>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="xs-donation-form-wraper">
						<div class="xs-heading xs-mb-30">
							<h2 class="xs-title">Make a donation</h2>
							<p class="small">
								To learn more about make donate charity with us visit our "<span
									class="color-green">Contact us</span
								>" site. By calling
								<span class="color-green">+44(0) 800 883 8450</span>.
							</p>
							<span class="xs-separetor v2"></span>
						</div>
						<!-- .xs-heading end -->
						<form
							action="#"
							method="post"
							id="xs-donation-form"
							class="xs-donation-form"
							name="xs-donation-form"
						>
							<div class="xs-input-group">
								<label for="xs-donate-name"
									>Donation Amount <span class="color-light-red">**</span
									></label
								>
								<input
									type="text"
									name="amount"
									id="xs-donate-amount"
									class="form-control"
									placeholder="Minimum of $5"
								/>
							</div>
							<div class="xs-input-group">
								<label for="xs-donate-name"
									>Your name <span class="color-light-red">**</span></label
								>
								<input
									type="text"
									name="name"
									id="xs-donate-name"
									class="form-control"
									placeholder="Example Name"
								/>
							</div>
							<div class="xs-input-group">
								<label for="xs-donate-name"
									>Your Email <span class="color-light-red">**</span></label
								>
								<input
									type="email"
									name="email"
									id="xs-donate-email"
									class="form-control"
									placeholder="example@mail.com"
								/>
							</div>
							<div class="xs-input-group" id="xs-input-checkbox">
								<input type="checkbox" name="agree" id="xs-donate-agree" />
								<label for="xs-donate-agree"
									>I Agree <span class="color-light-red">**</span></label
								>
							</div>
							<!-- .xs-input-group END -->
							<button type="submit" class="btn btn-warning"
								><span class="badge"><i class="fa fa-heart"></i></span> Donate now</button
							>
						</form>
						<!-- .xs-donation-form #xs-donation-form END -->
					</div>
				</div>
			</div>
			<!-- .row end -->
		</div>
		<!-- .container end -->
	</section>
	<!-- End donation form section -->
</main>

<style>
	#xs-input-checkbox {
		display: flex;
		align-items: center;
	}

	#xs-donate-agree {
		width: 65px;
	}

	label[for="xs-donate-agree"] {
		margin: 0;
		margin-left: 10px;
	}
</style>
