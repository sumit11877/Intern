import { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

const defaultCoinId = 'btc-bitcoin';

function HomePage() {
	return (
		<section>
			<h1>Crypto prices with a simple multi-page React app</h1>
		</section>
	);
}

function ContactPage() {
	return (
		<section className="page-card">
			<p className="eyebrow">Contact</p>
			<h2>Get in touch</h2>
			<p>
				For project questions or API integration help, email
				<a href="mailto:contact@coinview.dev"> contact@coinview.dev</a>.
			</p>
			<p>
				You can also use the API page to test a coin ID like
				<code>btc-bitcoin</code> or <code>eth-ethereum</code>.
			</p>
		</section>
	);
}

function ApiPage() {
	const [coinId, setCoinId] = useState(defaultCoinId);
	const [query, setQuery] = useState(defaultCoinId);
	const [ticker, setTicker] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const controller = new AbortController();

		async function loadTicker() {
			setLoading(true);
			setError('');

			try {
				const response = await fetch(`https://api.coinpaprika.com/v1/tickers/${query}`, {
					signal: controller.signal,
				});

				if (!response.ok) {
					throw new Error('Coin not found. Try a valid CoinPaprika coin id.');
				}

				const data = await response.json();
				setTicker(data);
			} catch (err) {
				if (err.name === 'AbortError') {
					return;
				}

				setTicker(null);
				setError(err.message || 'Unable to load data right now.');
			} finally {
				setLoading(false);
			}
		}

		loadTicker();

		return () => controller.abort();
	}, [query]);

	const usdQuote = ticker?.quotes?.USD;

	function handleSubmit(event) {
		event.preventDefault();
		setQuery(coinId.trim().toLowerCase() || defaultCoinId);
	}

	return (
		<section className="page-card">
			<p className="eyebrow">API Page</p>
			<h2>CoinPaprika ticker lookup</h2>

			<form className="api-form" onSubmit={handleSubmit}>
				<label htmlFor="coinId">Coin ID</label>
				<div className="api-form-row">
					<input
						id="coinId"
						type="text"
						value={coinId}
						onChange={(event) => setCoinId(event.target.value)}
						placeholder="btc-bitcoin"
					/>
					<button type="submit">Load Data</button>
				</div>
			</form>

			{loading ? <p className="status-text">Loading ticker data...</p> : null}
			{error ? <p className="status-text error-text">{error}</p> : null}

			{ticker && usdQuote && !loading ? (
				<div className="ticker-grid">
					<div className="ticker-stat">
						<span>Name</span>
						<strong>
							{ticker.name} ({ticker.symbol})
						</strong>
					</div>
					<div className="ticker-stat">
						<span>Rank</span>
						<strong>#{ticker.rank}</strong>
					</div>
					<div className="ticker-stat">
						<span>USD Price</span>
						<strong>${usdQuote.price.toLocaleString()}</strong>
					</div>
					<div className="ticker-stat">
						<span>24h Volume</span>
						<strong>${usdQuote.volume_24h.toLocaleString()}</strong>
					</div>
					<div className="ticker-stat">
						<span>Market Cap</span>
						<strong>${usdQuote.market_cap.toLocaleString()}</strong>
					</div>
					<div className="ticker-stat">
						<span>24h Change</span>
						<strong>{usdQuote.percent_change_24h}%</strong>
					</div>
					<div className="ticker-stat ticker-stat-wide">
						<span>Last Updated</span>
						<strong>{new Date(ticker.last_updated).toLocaleString()}</strong>
					</div>
				</div>
			) : null}
		</section>
	);
}

function App() {
	return (
		<div className="app-shell">
			<header className="topbar">
				<div>
					<p className="brand-mark">CoinView</p>
					<p className="brand-subtitle">CoinPaprika market data explorer</p>
				</div>

				<nav className="router-nav">
					<NavLink to="/" end>
						Home
					</NavLink>
					<NavLink to="/api">API</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</nav>
			</header>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/api" element={<ApiPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</div>
	);
}

export default App;
