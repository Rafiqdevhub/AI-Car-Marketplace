"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <div className="space-y-6 max-w-[600px]">
        <div className="space-y-2">
          <div className="flex justify-center mb-6">
            <AlertCircle className="text-destructive h-12 w-12" />
          </div>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Something went wrong!
          </h1>

          <p className="text-muted-foreground text-lg">
            {error?.message ||
              "An unexpected error occurred. Please try again later."}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>

          <Button size="lg" onClick={() => reset()}>
            Try Again
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          If this issue persists, please contact our support team for
          assistance.
        </p>
      </div>
    </div>
  );
};

export default Error;
