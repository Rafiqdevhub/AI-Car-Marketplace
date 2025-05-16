import { Button } from "./ui/button";
import { Heart, CarFront, Layout, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

const HeaderComponent = async ({ isAdminPage = false }) => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/95 backdrop-blur-md"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-blue-50/20 dark:from-blue-950/20 dark:via-transparent dark:to-blue-950/20"></div>

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-b from-black/[0.03] to-transparent dark:from-white/[0.03]"></div>
      <div className="absolute inset-0 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1)] pointer-events-none"></div>

      <nav className="container relative max-w-7xl h-16 mx-auto px-4 flex items-center justify-between">
        {" "}
        <Link
          href={isAdminPage ? "/admin" : "/"}
          className="flex items-center gap-3 group cursor-pointer hover:opacity-90"
        >
          <div className="flex flex-col">
            {" "}
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent tracking-tight hover:tracking-wide transition-all duration-300 drop-shadow-sm">
              CarSahulat
            </span>
            {isAdminPage && (
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                Admin Portal
              </span>
            )}
          </div>
        </Link>
        <div className="flex items-center gap-4">
          {isAdminPage ? (
            <Link href="/">
              {" "}
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100/80"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to App</span>
              </Button>
            </Link>
          ) : (
            <SignedIn>
              {!isAdmin && (
                <Link href="/reservations">
                  {" "}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-600 cursor-pointer"
                  >
                    <CarFront className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="hidden sm:inline">My Reservations</span>
                  </Button>
                </Link>
              )}
              <Link href="/saved-cars">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 transition-all duration-300 hover:bg-red-500/10 hover:text-red-600 cursor-pointer"
                >
                  <Heart className="h-4 w-4 transition-transform duration-300 hover:scale-110" />
                  <span className="hidden sm:inline">Saved Cars</span>
                </Button>
              </Link>
              {isAdmin && (
                <Link href="/admin">
                  {" "}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 transition-all duration-300 hover:bg-indigo-500/10 hover:text-indigo-600 cursor-pointer"
                  >
                    <Layout className="h-4 w-4 transition-transform duration-300 hover:scale-110" />
                    <span className="hidden sm:inline">Admin Portal</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}{" "}
          <SignedOut>
            {!isAdminPage && (
              <SignInButton mode="modal">
                <Button
                  variant="default"
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Login
                </Button>
              </SignInButton>
            )}
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-8 h-8 ring-2 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-300",
                  userButtonPopulator:
                    "hover:scale-105 transition-transform duration-300",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
