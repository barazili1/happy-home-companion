import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MAFYA - مرحباً" },
      { name: "description", content: "MAFYA — ابدأ الآن" },
      { property: "og:title", content: "MAFYA" },
      { property: "og:description", content: "MAFYA — ابدأ الآن" },
    ],
  }),
});

function Index() {
  useEffect(() => {
    window.location.replace("/v.html");
  }, []);
  return null;
}
