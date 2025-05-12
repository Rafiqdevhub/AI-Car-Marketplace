import { Button } from "./ui/button";
import { Heart, CarFront, Layout, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const HeaderComponent = async ({ isAdminPage = false }) => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border/40">
      <nav className="container max-w-7xl h-16 mx-auto px-4 flex items-center justify-between">
        <Link
          href={isAdminPage ? "/admin" : "/"}
          className="flex items-center gap-2"
        >
          {" "}
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 border border-border/50 overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="CarSahulat Logo"
              fill
              priority
              className="object-cover p-1"
            />
          </div>
          {isAdminPage && (
            <span className="text-xs font-medium text-muted-foreground">
              admin
            </span>
          )}
        </Link>

        <div className="flex items-center gap-4">
          {isAdminPage ? (
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to App</span>
              </Button>
            </Link>
          ) : (
            <SignedIn>
              {!isAdmin && (
                <Link href="/reservations">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <CarFront className="h-4 w-4" />
                    <span className="hidden sm:inline">My Reservations</span>
                  </Button>
                </Link>
              )}
              <Link href="/saved-cars">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Saved Cars</span>
                </Button>
              </Link>
              {isAdmin && (
                <Link href="/admin">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Layout className="h-4 w-4" />
                    <span className="hidden sm:inline">Admin Portal</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}

          <SignedOut>
            {!isAdminPage && (
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </SignInButton>
            )}
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
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
