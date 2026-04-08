export default function NotFound() {
	return (
		<main className="not-found">
			<section className="not-found-card">
				<p className="eyebrow">404</p>
				<h1>Page not found.</h1>
				<p className="lede">The requested route does not exist, but the app shell is working.</p>
				<div className="actions">
					<a className="primary-btn" href="/">
						Back home
					</a>
				</div>
			</section>
		</main>
	);
}