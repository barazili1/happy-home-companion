import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/v.html" });
  },
  component: () => null,
  head: () => ({
    meta: [
      { title: "MAFYA - مرحباً" },
      { name: "description", content: "MAFYA — ابدأ الآن" },
      { property: "og:title", content: "MAFYA" },
      { property: "og:description", content: "MAFYA — ابدأ الآن" },
    ],
  }),
});
