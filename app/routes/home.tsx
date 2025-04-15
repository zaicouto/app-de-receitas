import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Receitinhas" },
    { name: "description", content: "Seu app de receitas!" },
  ];
}

export default function Home() {
  return <h1>Hello, World!</h1>;
}
