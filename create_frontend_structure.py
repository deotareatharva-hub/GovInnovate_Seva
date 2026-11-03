
from pathlib import Path

# Project root: the directory containing this script.
ROOT = Path(__file__).resolve().parent

# Only create files and directories inside this existing folder.
FRONTEND_SRC = ROOT / "frontend" / "src"

if not FRONTEND_SRC.is_dir():
    raise SystemExit(
        f"ERROR: Frontend source directory not found: {FRONTEND_SRC}\n"
        "Run this script from the GovInnovate project root."
    )

# Directories to create if they do not already exist.
directories = [
    "app",
    "assets",
    "assets/icons",
    "assets/images",
    "components/common",
    "components/layout",
    "components/forms",
    "components/charts",
    "layouts",
    "pages/public",
    "pages/auth",
    "pages/admin",
    "pages/government",
    "pages/startup",
    "pages/expert",
    "features/challenges/components",
    "features/challenges/pages",
    "features/challenges/services",
    "features/innovations/components",
    "features/innovations/pages",
    "features/innovations/services",
    "features/submissions/components",
    "features/submissions/pages",
    "features/submissions/services",
    "features/evaluations/components",
    "features/evaluations/pages",
    "features/evaluations/services",
    "features/pilots/components",
    "features/pilots/pages",
    "features/pilots/services",
    "features/procurement/components",
    "features/procurement/pages",
    "features/procurement/services",
    "features/analytics/components",
    "features/analytics/pages",
    "features/analytics/services",
    "services",
    "context",
    "hooks",
    "utils",
    "constants",
    "styles",
]

# Create only missing files. Existing files are preserved.
files = [
    "app/AppRoutes.jsx",
    "components/common/Button.jsx",
    "components/common/Input.jsx",
    "components/common/Modal.jsx",
    "components/common/Loader.jsx",
    "components/common/EmptyState.jsx",
    "components/layout/Navbar.jsx",
    "components/layout/Sidebar.jsx",
    "components/layout/Footer.jsx",
    "components/layout/DashboardLayout.jsx",
    "components/forms/SearchBar.jsx",
    "layouts/PublicLayout.jsx",
    "layouts/AuthLayout.jsx",
    "pages/public/Home.jsx",
    "pages/public/About.jsx",
    "pages/public/NotFound.jsx",
    "pages/auth/Login.jsx",
    "pages/auth/Register.jsx",
    "pages/auth/VerifyEmail.jsx",
    "pages/admin/AdminDashboard.jsx",
    "pages/government/GovernmentDashboard.jsx",
    "pages/startup/StartupDashboard.jsx",
    "pages/expert/ExpertDashboard.jsx",
    "services/api.js",
    "services/authService.js",
    "styles/variables.css",
    "styles/global.css",
]

# Ensure all required directories exist.
created_directories = 0

for directory in directories:
    path = FRONTEND_SRC / directory

    if not path.exists():
        path.mkdir(parents=True, exist_ok=True)
        created_directories += 1

# Create empty placeholder files only when they are missing.
created_files = 0
existing_files = 0

for filename in files:
    path = FRONTEND_SRC / filename

    if path.exists():
        existing_files += 1
        continue

    path.parent.mkdir(parents=True, exist_ok=True)
    path.touch()
    created_files += 1

print("\nFrontend structure setup completed!")
print(f"Frontend location: {FRONTEND_SRC}")
print(f"New directories created: {created_directories}")
print(f"New files created: {created_files}")
print(f"Existing files preserved: {existing_files}")

print("\nIMPORTANT:")
print("- No existing files were overwritten.")
print("- No backend or database files were modified.")
print("- Newly created files are empty placeholders.")
print("- Existing routing and application code remain unchanged.")
