# 🤝 Resource Sharing Platform

A decentralized peer-to-peer resource sharing platform built on the **Stellar Soroban** smart contract framework. List tools, electronics, books, or any shareable assets on-chain — then let others borrow, return, and rate their experience.

![Stellar](https://img.shields.io/badge/Stellar-Soroban-blue?logo=stellar)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Network](https://img.shields.io/badge/Network-Testnet-green)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **List Resources** | Owners can list items with name, description, category, daily rate, and deposit |
| **Borrow Resources** | Borrowers can check out available items with start/end timestamps |
| **Return Resources** | Return borrowed items with condition notes |
| **Rate Transactions** | 1–5 star rating system stored on-chain |
| **Query Catalog** | Get individual resource details, list all resources, or check available count |
| **Freighter Wallet** | Wallet-based auth — all write operations require signing via Freighter |

---

## 🏗️ Architecture

```
my-stellar-app/
├── contract/                      # Soroban smart contract (Rust)
│   └── contracts/hello-world/
│       └── src/lib.rs             # ResourceSharingContract
├── public/
│   ├── bg.jpg                     # Background image for landing & profile
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── lib/
│   │   └── stellar.js             # SDK integration (invoke read/write txns)
│   ├── pages/
│   │   ├── Landing.jsx            # Landing page with wallet connect
│   │   ├── Landing.css
│   │   ├── Profile.jsx            # Main app dashboard (all operations)
│   │   └── Profile.css
│   ├── App.jsx                    # Router (Landing ↔ Profile)
│   ├── App.css                    # Shared design system
│   ├── main.jsx                   # React entry point
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

### Page Flow

```
Landing Page ──[ Connect Wallet ]──▶ Profile Page
                                          │
                                    ┌─────┴─────┐
                                    │  List      │
                                    │  Borrow    │
                                    │  Return    │
                                    │  Rate      │
                                    │  Query     │
                                    └─────┬─────┘
                                          │
                              [ Disconnect ] ──▶ Landing Page
```

---

## 📋 Prerequisites

- **Node.js** ≥ 18
- **Freighter Wallet** browser extension ([Install](https://www.freighter.app/))
  - Switch to **Testnet** in Freighter settings
  - Fund your account via [Stellar Friendbot](https://friendbot.stellar.org/?addr=YOUR_ADDRESS)
- **Rust** + `soroban-cli` (only needed if modifying the contract)

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone <repository-url>
cd my-stellar-app
npm install
```

### 2. Run the Dev Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Connect Wallet

1. Open the **Freighter** extension and ensure you're on **Testnet**
2. Click the **Connect** button on the landing page
3. Approve the connection in Freighter
4. You'll be redirected to the **Profile** page with your address auto-filled

---

## 🔧 Smart Contract

The Soroban contract is deployed on **Stellar Testnet**:

| Setting | Value |
|---------|-------|
| **Contract ID** | `CDWSDQBODP6KAILO2TQB54YVY76IS43ME4DDLZ5QPYMGCLEHB7FRUZLS` |
| **Network** | Stellar Testnet |
| **RPC** | `https://soroban-testnet.stellar.org` |
| **SDK Version** | `soroban-sdk v23` |

### Contract Functions

| Function | Type | Description |
|----------|------|-------------|
| `list_resource` | Write | List a new resource for sharing |
| `borrow_resource` | Write | Borrow an available resource |
| `return_resource` | Write | Return a borrowed resource with condition notes |
| `rate_transaction` | Write | Rate a resource (1–5 stars) |
| `get_resource` | Read | Get details of a specific resource by ID |
| `list_resources` | Read | List all resource IDs |
| `get_available_count` | Read | Get count of currently available resources |

### Data Model — `SharedResource`

```rust
pub struct SharedResource {
    pub owner: Address,          // Resource owner
    pub name: String,            // Display name
    pub description: String,     // Description / condition notes
    pub category: Symbol,        // Category (tools, electronics, books, etc.)
    pub daily_rate: i128,        // Daily rental rate in stroops
    pub deposit_required: i128,  // Security deposit in stroops
    pub borrower: Address,       // Current/last borrower
    pub status: Symbol,          // "available" | "borrowed" | "returned"
    pub total_rating: u32,       // Sum of all ratings
    pub rating_count: u32,       // Number of ratings
    pub borrow_count: u32,       // Total times borrowed
    pub listed_at: u64,          // Ledger timestamp when listed
}
```

### Error Codes

| Code | Name | Description |
|------|------|-------------|
| 1 | `InvalidName` | Resource name cannot be empty |
| 2 | `InvalidTimestamp` | Invalid timestamp provided |
| 3 | `NotFound` | Resource ID does not exist |
| 4 | `NotOwner` | Caller is not the resource owner |
| 5 | `NotBorrower` | Caller is not the current borrower |
| 6 | `NotAvailable` | Resource is currently borrowed |
| 7 | `AlreadyAvailable` | Resource is already available |
| 8 | `InvalidRating` | Rating must be 1–5 |
| 9 | `InvalidDates` | End date must be after start date |

### Building the Contract (optional)

```bash
cd contract
cargo build --target wasm32-unknown-unknown --release
```

Deploy with Soroban CLI:

```bash
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/hello_world.wasm \
  --network testnet \
  --source <YOUR_SECRET_KEY>
```

---

## 🛠️ Configuration

To point to a different contract, edit `src/lib/stellar.js`:

```js
export const CONTRACT_ID = "YOUR_CONTRACT_ID_HERE";
export const DEMO_ADDR   = "YOUR_DEMO_ADDRESS_HERE";
```

- **`CONTRACT_ID`** — The deployed Soroban contract address
- **`DEMO_ADDR`** — A funded testnet address used for read-only simulations

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Smart Contract** | Rust · Soroban SDK v23 |
| **Blockchain** | Stellar Testnet |
| **Frontend** | React 19 · Vite 8 |
| **Wallet** | Freighter API v6 |
| **Stellar SDK** | @stellar/stellar-sdk v14 |
| **Styling** | Vanilla CSS (glassmorphism, gradients, animations) |
| **Fonts** | Chakra Petch · Plus Jakarta Sans · IBM Plex Mono |

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| [`src/App.jsx`](src/App.jsx) | Minimal router — switches between Landing and Profile |
| [`src/pages/Landing.jsx`](src/pages/Landing.jsx) | Landing page with wallet connect flow |
| [`src/pages/Profile.jsx`](src/pages/Profile.jsx) | Main dashboard — list, borrow, return, rate, query |
| [`src/lib/stellar.js`](src/lib/stellar.js) | Soroban transaction builder — read/write helpers |
| [`src/App.css`](src/App.css) | Shared design tokens and component styles |
| [`contract/contracts/hello-world/src/lib.rs`](contract/contracts/hello-world/src/lib.rs) | Soroban smart contract source |

---

## 💡 Usage Notes

- **Stroops**: All monetary values are in stroops (1 XLM = 10,000,000 stroops)
- **Timestamps**: Borrow start/end dates use Unix timestamps in seconds
- **Ratings**: Each rating (1–5) is accumulated on-chain; average = `total_rating / rating_count`
- **Status lifecycle**: `available` → `borrowed` → `returned`
- All write transactions require **Freighter signing** — the app will prompt for approval

---

## 📄 License

This project is provided as-is for educational and demonstration purposes.
