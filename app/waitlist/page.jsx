"use client";

import React from "react";

export default function WaitlistPage() {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold">Join Our Waitlist</h1>
          <p className="text-muted-foreground">
            Be the first to experience CarSahulat when we launch.
          </p>
        </div>
        <div className="w-full rounded-lg border bg-card">
          <iframe
            style={{
              width: "100%",
              height: "calc(100vh - 16rem)",
              minHeight: "500px",
            }}
            src="https://carsahulat.created.app"
            title="CarSahulat Waitlist"
            frameBorder="0"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
