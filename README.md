# 🛡️ AJPLUS Security

Mfumo wa usimamizi wa walinzi (Guard Management System) uliotengenezwa na **AJ PLUS COMPANY LIMITED**, Tanzania.

AJPLUS Security ni jukwaa la kidijitali linalowezesha makampuni ya ulinzi na walinzi binafsi kusimamia shughuli zao za kila siku — doria, taarifa za matukio (occurrence book), ufuatiliaji wa eneo, na mawasiliano kati ya walinzi, wasimamizi, wateja, na uongozi.

## 👥 Majukumu ya Watumiaji (User Roles)

| Jukumu | Maelezo |
|---|---|
| **Admin** | Usimamizi mkuu wa mfumo mzima |
| **Supervisor** | Usimamizi wa walinzi kwenye maeneo (sites) |
| **Guard (Mlinzi)** | Kuripoti doria, matukio, na hali ya eneo |
| **Client (Mteja)** | Kufuatilia huduma za ulinzi anazopokea |

## 📂 Muundo wa Mradi

```
ajplus_app/
├── public/
│   ├── index.html                    # Ukurasa wa kuanzia
│   ├── Ajplussecurity_login.html     # Kuingia mfumoni
│   ├── admin.html                    # Dashibodi ya Admin
│   ├── supervisor_dashboard.html     # Dashibodi ya Supervisor
│   ├── guard_dashboard.html          # Dashibodi ya Mlinzi
│   ├── mteja_dashboard.html          # Dashibodi ya Mteja
│   ├── client-register.html         # Usajili wa wateja
│   ├── firebase-config.js            # Mipangilio ya Firebase
│   └── style.css                     # Mtindo wa pamoja
└── README.md
```

## 🔧 Teknolojia

- **Firebase** (Authentication, Realtime Database, Storage) — SDK v8/v9 compat
- HTML, CSS, JavaScript (vanilla)
- Hosting: Vercel / Firebase Hosting

## 🚀 Kuanza (Local Development)

1. Clone repo hii
2. Fungua `public/index.html` kwa kutumia Live Server (VS Code extension) au server nyingine ya local
3. Hakikisha Firebase project yako ina Database Rules sahihi (tazama sehemu ya chini)

## 🔐 Usalama

Mfumo huu unategemea **Firebase Realtime Database Security Rules** kwa ulinzi wa data, sio kwa kuficha API key (ambayo kwa asili ya Firebase ni "client-side" na haiwezi kufichwa kikamilifu kwenye frontend). Database Rules zimewekwa kwenye Firebase Console na zinahitaji `auth != null` kwa kusoma/kuandika data nyeti, pamoja na `.indexOn` kwa maeneo muhimu (guards, clients, incidents, n.k.).

**Kumbuka:** Faili za kuanzisha admin wa kwanza (setup scripts) hazijawekwa kwenye repo hii makusudi kwa sababu za usalama.

## 🇹🇿 Kuhusu AJ PLUS COMPANY LIMITED

AJ PLUS ni kampuni ya Tanzania inayotoa huduma mbalimbali ikiwemo: AI platform (AJPLUS AI), huduma za ulinzi (AJPLUS Security), usafi wa kina, na huduma za kibunifu/design.

---
© AJ PLUS COMPANY LIMITED. Haki zote zimehifadhiwa.
