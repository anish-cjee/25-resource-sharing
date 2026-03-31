import React, { useState } from "react";
import { checkConnection } from "../lib/stellar.js";
import "./Landing.css";

export default function Landing({ onConnected }) {
    const [isBusy, setIsBusy] = useState(false);
    const [error, setError] = useState(null);

    const handleConnect = async () => {
        setIsBusy(true);
        setError(null);
        try {
            const user = await checkConnection();
            if (user && user.publicKey) {
                onConnected(user.publicKey);
            } else {
                setError("Wallet not connected. Please open Freighter and try again.");
            }
        } catch (err) {
            setError(err?.message || "Connection failed. Please try again.");
        } finally {
            setIsBusy(false);
        }
    };

    return (
        <div className="landing-root">
            <div className="landing-bg" />

            {/* Navbar */}
            <nav className="landing-nav">
                <div className="landing-nav-inner">
                    <div className="landing-nav-brand">
                        <span className="landing-nav-icon">⬡</span>
                        <span className="landing-nav-title">Resource Sharing</span>
                    </div>
                    <button
                        id="connect-wallet-btn"
                        className={`landing-connect-btn${isBusy ? " busy" : ""}`}
                        onClick={handleConnect}
                        disabled={isBusy}
                    >
                        {isBusy ? (
                            <>
                                <span className="connect-spinner" />
                                Connecting…
                            </>
                        ) : (
                            <>
                                <span className="connect-wallet-icon">◎</span>
                                Connect
                            </>
                        )}
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <main className="landing-hero">
                <div className="landing-hero-inner">
                    <p className="landing-kicker">Powered by Soroban · Stellar Network</p>
                    <h1 className="landing-headline">
                        Decentralized<br />
                        <span className="landing-headline-accent">Resource Sharing</span>
                    </h1>
                    <p className="landing-sub">
                        List resources for lending, borrow and return items, and rate
                        transactions — all on-chain. Connect your Freighter wallet to
                        get started.
                    </p>

                    {error && (
                        <div className="landing-error" role="alert">
                            <span className="landing-error-icon">⚠</span>
                            {error}
                        </div>
                    )}

                    <div className="landing-cta-group">
                        <button
                            id="hero-connect-btn"
                            className={`landing-cta-btn${isBusy ? " busy" : ""}`}
                            onClick={handleConnect}
                            disabled={isBusy}
                        >
                            {isBusy ? "Connecting…" : "Connect & Enter App"}
                        </button>
                        <span className="landing-cta-hint">Requires Freighter browser extension</span>
                    </div>

                    <div className="landing-pills">
                        {["Peer-to-Peer Lending", "On-Chain Records", "Star Ratings", "XLM Deposits"].map((f) => (
                            <span key={f} className="landing-pill">{f}</span>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="landing-footer">
                <p>Built on Stellar · Soroban Smart Contracts · Freighter Wallet</p>
            </footer>
        </div>
    );
}
