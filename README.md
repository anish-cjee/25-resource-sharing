# 🤝 Resource Sharing Platform

A decentralized peer-to-peer resource sharing platform built on the **Stellar Soroban** smart contract framework. List tools, electronics, books, or any shareable assets on-chain — then let others borrow, return, and rate their experience.

![Stellar](https://img.shields.io/badge/Stellar-Soroban-blue?logo=stellar)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Network](https://img.shields.io/badge/Network-Testnet-green)

---

## 📸 App Preview

### 🔹 Main Dashboard

![Dashboard](./public/Screenshot%202026-03-31%20000100.png)

### 🔹 Resource Actions & Logs

![Resource Actions](./public/Screenshot%202026-03-31%20000206.png)

---

## ✨ Features

| Feature               | Description                                                                     |
| --------------------- | ------------------------------------------------------------------------------- |
| **List Resources**    | Owners can list items with name, description, category, daily rate, and deposit |
| **Borrow Resources**  | Borrowers can check out available items with start/end timestamps               |
| **Return Resources**  | Return borrowed items with condition notes                                      |
| **Rate Transactions** | 1–5 star rating system stored on-chain                                          |
| **Query Catalog**     | Get individual resource details, list all resources, or check available count   |
| **Freighter Wallet**  | Wallet-based auth — all write operations require signing via Freighter          |

---

## 🏗️ Architecture

```
my-stellar-app/
├── contract/
├── public/
├── src/
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔄 User Flow

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

* **Node.js** ≥ 18
* **Freighter Wallet** → https://www.freighter.app/
* **Testnet Account** → https://friendbot.stellar.org

---

## 🚀 Getting Started

```bash
git clone <repository-url>
cd my-stellar-app
npm install
npm run dev
```

---

## 🔧 Smart Contract Details

| Setting          | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| **Contract ID**  | `CDWSDQBODP6KAILO2TQB54YVY76IS43ME4DDLZ5QPYMGCLEHB7FRUZLS` |
| **Network**      | Stellar Testnet                                            |
| **RPC Endpoint** | `https://soroban-testnet.stellar.org`                      |

---

## 🧰 Tech Stack

* **Smart Contract** → Rust · Soroban SDK
* **Blockchain** → Stellar Testnet
* **Frontend** → React 19 · Vite 8
* **Wallet Integration** → Freighter

---

## 💡 Usage Notes

* All values are in **stroops**
* Transactions require **Freighter approval**
* Fully **on-chain resource lifecycle**

---

## 🏆 Why This Project Stands Out

* 🌐 Real **Web3 sharing economy use-case**
* 🔐 Fully **decentralized ownership model**
* ⭐ Built-in **trust & rating system**
* ⚡ Smooth **UI + blockchain interaction**

---

## 📌 Future Improvements

* 🔍 Advanced search & filtering
* 📊 Reputation scoring system
* 📱 Mobile responsiveness improvements
* 🌍 Multi-chain expansion

---

## 📄 License

This project is built for educational and hackathon purposes. Feel free to fork and improve 🚀
