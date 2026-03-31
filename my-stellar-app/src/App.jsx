import React, { useState } from "react";
import Landing from "./pages/Landing.jsx";
import Profile from "./pages/Profile.jsx";

export default function App() {
    const [walletKey, setWalletKey] = useState(null);

    if (walletKey) {
        return (
            <Profile
                walletKey={walletKey}
                onDisconnect={() => setWalletKey(null)}
            />
        );
    }

    return <Landing onConnected={(publicKey) => setWalletKey(publicKey)} />;
}