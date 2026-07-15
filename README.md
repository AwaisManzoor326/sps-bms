# SPS-BMS — React Version

Original PHP project (`AwaisManzoor326/SPS-internship-project`) ka React conversion.
Stack: **React 19 + Vite + Tailwind CSS v4 + Material UI (icons only) + React Router**.

## Run karne ka tareeqa

```bash
npm install
npm run dev
```

Browser mein `http://localhost:5173` khul jayega.

Production build ke liye:
```bash
npm run build
npm run preview
```

## Folder structure — kahan kya hai

```
src/
├── main.jsx              # entry point, BrowserRouter yahan wrap hota hai
├── App.jsx                # SAARE ROUTES yahan define hain (naya page add karna ho to yahan route likho)
├── index.css               # Tailwind import (@import "tailwindcss";)
├── layout/
│   └── Layout.jsx          # header.php + footer.php ka conversion — top navbar, dropdowns, mobile drawer, footer
├── data/
│   └── employees.js        # index.php ka "REALISTIC DATA POOL" — 45 mock employees generate karta hai
└── pages/
    ├── Home.jsx             # index.php (employee list / filters / pagination / CSV export) — route: "/"
    ├── Dashboard.jsx        # dashboard.php (6 objective cards) — route: "/dashboard"
    ├── Placeholder.jsx      # baaki 13 pages ke liye stub component (neeche list)
    └── home/
        ├── ActionDropdown.jsx  # table ki har row ka "Action" dropdown menu
        ├── HoursModal.jsx      # "Hours Distribution" popup
        └── ReasonsModal.jsx    # "Offboarding Reasons" popup
```

## Ab tak kya convert ho chuka hai

| PHP file | React route | Status |
|---|---|---|
| `includes/header.php` + `includes/footer.php` | `Layout.jsx` (wraps every route) | Done |
| `modules/employee-management/index.php` | `/` (`Home.jsx`) | Done — filters, search, pagination, CSV export, action dropdown, dono modals |
| `modules/employee-management/dashboard.php` | `/dashboard` (`Dashboard.jsx`) | Done |
| Baaki 13 pages (`employee-detail`, `hr-talks`, `blog`, `profile`, `orientation-plan`, `planning-form`, `performance`, `timelive-blog`, `onboarding-*`, `offboarding-*`) | matching routes already set up | Placeholder — routing ready hai, sirf UI baqi hai |

## Agla page kaise convert karo (pattern)

Har page ka same pattern hai — ise follow karke koi bhi baqi page khud bhi bana sakte ho:

1. Original PHP file `modules/employee-management/<page>.php` kholo.
2. `<?php ... ?>` wale dynamic data blocks (arrays, loops) ko `src/data/` mein ek `.js` file mein convert karo — jaisा `employees.js` mein kiya.
3. HTML wala portion (jo already Tailwind classes use kar raha hai) uthao, `class=` -> `className=`, saare tags close karo, `<?php foreach ?>` -> `.map()`.
4. `<i class="fa-solid fa-xxx">` / `<i class="ri-xxx">` icons ko `@mui/icons-material` se matching icon se replace karo.
5. `src/pages/<Page>.jsx` banao, `App.jsx` mein us route ka stub `Placeholder` element ko apne naye component se replace kar do.

Jab bhi kaho, main baqi 13 pages (specially `employee-detail.php`, jo sabse complex hai — corporate roles, compensation, KPI table, cost calculator) isi tarah convert karke de dunga.

## Notes

- Filters/search URL query params ki jagah React state use karte hain (SPA behaviour, page reload nahi hota) — dikhne mein bilkul same hai.
- CV download button (Experience Certificate etc.) `public/Awais_Manzoor_Resume.pdf` se download hota hai (original PHP mein bhi yehi file thi).
- Saare icons Material UI se hain (`@mui/icons-material`), koi remixicon/fontawesome CDN dependency nahi hai.
- Colors, spacing, aur Tailwind classes original PHP se hu-ba-hu copy kiye gaye hain taake UI pixel-identical rahe.
