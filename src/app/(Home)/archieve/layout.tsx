import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archieve",
  description: "Archieve of projects and blog posts for smallbenji",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
