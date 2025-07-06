"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import Footer from "../footer/Footer";
import Projects from "../projects/Projects";
import ContactForm from "../contact/ContactForm";

export function GridBackgroundDemo() {
  return (
    <div className="absolute z-1000 min-h-screen w-full overflow-x-hidden bg-white dark:bg-black">
      
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "bg-white dark:bg-black",
          "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Main Content */}
      <div className="flex flex-col min-h-screen relative z-10">
        <Header />
        <main className="flex-grow">
          <Content />
          <Projects />
          <ContactForm/>
        </main>
        <Footer />
      </div>
    </div>
  );
}
