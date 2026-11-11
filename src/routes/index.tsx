import { createFileRoute } from "@tanstack/react-router";
import { FluxoApp } from "@/components/fluxo-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <FluxoApp />;
}
