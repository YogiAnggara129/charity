<!-- welcome section -->
<!--breadcumb start here-->
<section
	class="xs-banner-inner-section parallax-window"
	style="background-image:url('assets/images/contact_bg.png')"
>
	<div class="xs-black-overlay"></div>
	<div class="container">
		<div class="color-white xs-inner-banner-content">
			<h2>Contact Us</h2>
			<p>Give a helping hand for poor people</p>
			<ul class="xs-breadcumb">
				<li class="badge badge-pill badge-primary">
					<a href="/" class="color-white"> Home /</a> Contact
				</li>
			</ul>
		</div>
	</div>
</section>
<!--breadcumb end here--><!-- End welcome section -->

<main class="xs-main">
	<!-- contact section -->
	<section class="xs-contact-section-v2">
		<div class="container">
			<div class="xs-contact-container">
				<div class="row">
					<div class="col-lg-6">
						<div class="xs-contact-form-wraper">
							<h4>Drop us a line</h4>
							<form
								action="#"
								method="POST"
								id="xs-contact-form"
								class="xs-contact-form contact-form-v2"
							>
								<div class="input-group">
									<input
										type="text"
										name="name"
										id="xs-name"
										class="form-control"
										placeholder="Enter Your Name....."
									/>
									<div class="input-group-append">
										<div class="input-group-text">
											<i class="fa fa-user"></i>
										</div>
									</div>
								</div>
								<!-- .input-group END -->
								<div class="input-group">
									<input
										type="email"
										name="email"
										id="xs-email"
										class="form-control"
										placeholder="Enter Your Email....."
									/>
									<div class="input-group-append">
										<div class="input-group-text">
											<i class="fa fa-envelope-o"></i>
										</div>
									</div>
								</div>
								<!-- .input-group END -->
								<div class="input-group massage-group">
									<textarea
										name="massage"
										placeholder="Enter Your Message....."
										id="xs-massage"
										class="form-control"
										cols="30"
										rows="10"
									></textarea>
									<div class="input-group-append">
										<div class="input-group-text">
											<i class="fa fa-pencil"></i>
										</div>
									</div>
								</div>
								<!-- .input-group END -->
								<button class="btn btn-success" type="submit" id="xs-submit"
									>submit</button
								>
							</form>
							<!-- .xs-contact-form #xs-contact-form END -->
						</div>
						<!-- .xs-contact-form-wraper END -->
					</div>
					<div class="col-lg-6">
						<div class="xs-maps-wraper map-wraper-v2">
							<div id="xs-map" class="xs-box-shadow-2">
								<a
									href="https://www.openstreetmap.org/?mlat=40.67&mlon=-73.94#map=15/40.67/-73.94"
									target="_blank"
									rel="noopener noreferrer"
									class="map-floating-link"
								>
									View Larger Map
								</a>

								<iframe
									class="map-iframe"
									src="https://www.openstreetmap.org/export/embed.html?bbox=-73.95,40.66,-73.93,40.68&layer=mapnik&marker=40.67,-73.94"
								></iframe>
							</div>
						</div>
					</div>
				</div>
				<!-- .row end -->
			</div>
			<!-- .xs-contact-container END -->
		</div>
		<!-- .container end -->
	</section>
	<!-- End contact section -->
</main>

<style>
	#xs-map {
		width: 100%;
		max-width: 100%;
		height: 400px;
		border: 1px solid black;
		position: relative;
		width: 100%;
		max-width: 100%;
		border: 1px solid black;
		/* Allow dragging through this wrapper */
		pointer-events: none;
	}

	.map-iframe {
		width: 100%;
		height: 400px;
		border: none;
		pointer-events: auto; /* iframe tetap bisa diklik/drag */
	}

	.map-floating-link {
		position: absolute;
		top: 10px;
		right: 10px;
		background: rgba(255, 255, 255, 0.8);
		color: #007bff;
		padding: 6px 10px;
		border-radius: 4px;
		font-size: 0.85rem;
		text-decoration: none;
		z-index: 10;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
		/* Supaya tetap bisa diklik meskipun parent pakai pointer-events: none */
		pointer-events: auto;
	}

	.map-floating-link:hover {
		background: rgba(255, 255, 255, 1);
		text-decoration: underline;
	}
</style>
