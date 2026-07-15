# SPS-BMS — React Version

Original PHP project (`AwaisManzoor326/SPS-internship-project`) ka **complete** React conversion — saare 16 pages.
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
├── main.jsx                 # entry point, BrowserRouter yahan wrap hota hai
├── App.jsx                   # SAARE ROUTES yahan define hain
├── index.css                  # Tailwind import (@import "tailwindcss";)
├── layout/
│   └── Layout.jsx             # header.php + footer.php — top navbar, dropdowns, mobile drawer, footer
├── components/
│   └── FloatingChatButton.jsx # har page ka reusable floating blue chat icon
├── hooks/
│   ├── useCKEditor.js         # CKEditor 4 (CDN) ko React mein lazily load/mount karne wala hook
│   └── loadChartJs.js         # Chart.js (CDN) lazy loader
├── data/
│   ├── employees.js           # index.php ka "REALISTIC DATA POOL" — 45 mock employees
│   └── onboarding.js          # onboarding/offboarding pages ka static data (steps, checklists, matrix tasks)
└── pages/
    ├── Home.jsx                    # index.php            → route "/"
    ├── Dashboard.jsx                # dashboard.php         → route "/dashboard"
    ├── EmployeeDetail.jsx           # employee-detail.php   → route "/employee-detail"
    ├── HrTalks.jsx                  # hr-talks.php          → route "/hr-talks"
    ├── Blog.jsx                     # blog.php              → route "/blog"
    ├── OrientationPlan.jsx          # orientation-plan.php  → route "/orientation-plan"
    ├── Profile.jsx                  # profile.php           → route "/profile"
    ├── PlanningForm.jsx             # planning-form.php     → route "/planning-form"
    ├── Performance.jsx              # performance.php       → route "/performance"
    ├── TimeliveBlog.jsx             # timelive-blog.php     → route "/timelive-blog"
    ├── OnboardingSteps.jsx          # onboarding-steps.php  → route "/onboarding-steps"
    ├── OnboardingPlan.jsx           # onboarding-plan.php   → route "/onboarding-plan"
    ├── OnboardingChecklist.jsx      # onboarding-checklist.php → route "/onboarding-checklist"
    ├── OffboardingChecklist.jsx     # offboarding-checklist.php → route "/offboarding-checklist"
    ├── OffboardingPlan.jsx          # offboarding-plan.php  → route "/offboarding-plan"
    └── home/
        ├── ActionDropdown.jsx  # employee table ki har row ka "Action" dropdown menu
        ├── HoursModal.jsx      # "Hours Distribution" popup
        └── ReasonsModal.jsx    # "Offboarding Reasons" popup
```

## Status: saare 16 pages convert ho chuke hain ✅

| PHP file | React route |
|---|---|
| `includes/header.php` + `includes/footer.php` | `Layout.jsx` (wraps every route) |
| `modules/employee-management/index.php` | `/` |
| `dashboard.php` | `/dashboard` |
| `employee-detail.php` | `/employee-detail` |
| `hr-talks.php` | `/hr-talks` |
| `blog.php` | `/blog` |
| `orientation-plan.php` | `/orientation-plan` |
| `profile.php` | `/profile` |
| `planning-form.php` | `/planning-form` |
| `performance.php` | `/performance` |
| `timelive-blog.php` | `/timelive-blog` |
| `onboarding-steps.php` | `/onboarding-steps` |
| `onboarding-plan.php` | `/onboarding-plan` |
| `onboarding-checklist.php` | `/onboarding-checklist` |
| `offboarding-checklist.php` | `/offboarding-checklist` |
| `offboarding-plan.php` | `/offboarding-plan` |

## Kaise verify karein

```bash
npm run build   # production build — koi error nahi aani chahiye
npm run lint    # oxlint — 0 warnings/errors
```

Dono commands maine khud chala kar confirm kiye hain.

## Notes / design decisions

- **Filters/search** URL query params ki jagah React state use karte hain (SPA behaviour, page reload nahi hota) — dikhne mein bilkul same hai.
- **CV download** button (Experience Certificate etc.) `public/Awais_Manzoor_Resume.pdf` se download hota hai.
- **CKEditor 4** (`hr-talks`, `blog` pages) aur **Chart.js** (`performance` page) original PHP ki tarah CDN se hi load hote hain — `useCKEditor` aur `loadChartJs` hooks isko React lifecycle ke sath manage karte hain, taake WYSIWYG editor aur charts bilkul same dikhein.
- Saare icons Material UI se hain (`@mui/icons-material`), koi remixicon/fontawesome CDN dependency nahi hai.
- Colors, spacing, aur Tailwind classes original PHP se hu-ba-hu copy kiye gaye hain taake UI pixel-identical rahe.
- `onboarding-plan.php` ke "Sub Task" column mein original PHP `<strong>`/`<br>` HTML echo karta tha — usay `dangerouslySetInnerHTML` se replicate kiya hai (static admin content hai, user input nahi).
