"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            404 - Page Not Found
          </h1>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="outline" size="lg" onClick={() => router.back()}>
            Go Back
          </Button>
          <Button size="lg" onClick={() => router.push("/")}>
            Return Home
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Need help? Contact our support team
        </p>
      </div>
    </div>
  );
};

export default NotFound;
