# Google Drive Clone (Cloud Storage Platform)

A full-stack cloud file storage and management web application built with **Next.js 15**, **TypeScript**, **Appwrite**, and **Tailwind CSS**.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 15 (Turbopack), React 19, TypeScript, Tailwind CSS, Radix UI, React Dropzone, React Hook Form + Zod, Recharts |
| **Backend / BaaS** | Appwrite (`appwrite`, `node-appwrite`) for authentication (OTP email verification), database collections, and file bucket storage |

---

## Project Structure

```text
google-drive-clone/
├── app/
│   ├── (auth)/            # Sign-in and sign-up routes
│   └── (root)/            # Authenticated dashboard & file browser routes
├── components/
│   ├── ui/                # Reusable Radix/Tailwind form, dialog, toast & OTP primitives
│   ├── AuthForm.tsx       # Account auth form
│   ├── FileUploader.tsx   # Drag-and-drop file uploader
│   ├── Header.tsx         # Top search & upload actions
│   ├── MobileNavigation.tsx
│   ├── OTPModal.tsx       # Email OTP verification modal
│   ├── Search.tsx         # Debounced file search
│   └── Sidebar.tsx        # Storage navigation
├── lib/
│   ├── actions/           # Next.js Server Actions
│   └── appwrite/          # Appwrite client & config
└── types/
```

---

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=your_users_collection_id
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=your_files_collection_id
NEXT_PUBLIC_APPWRITE_BUCKET=your_bucket_id
NEXT_APPWRITE_KEY=your_appwrite_secret_key
```

---

## Local Development

```bash
npm install
npm run dev
```
