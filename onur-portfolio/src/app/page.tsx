export default function Home() {
	return (
		<main className="page-shell">
			<section className="hero-card">
				<p className="eyebrow">Onur Portfolio</p>
				<h1>Design-led work, shipped cleanly on Cloudflare.</h1>
				<p className="lede">
					A minimal production homepage that avoids the runtime path causing your deployed worker to fail.
				</p>
				<div className="actions">
					<a className="primary-btn" href="mailto:hello@example.com">
						Contact
					</a>
					<a className="secondary-btn" href="https://developers.cloudflare.com/workers/">
						Cloudflare docs
					</a>
				</div>
			</section>
		</main>
	);
}
