import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import styles from "../styles/global.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    }
  ]
}

export function loader() {
  return json([
    { id: "1", title: "Pants" },
    { id: "2", title: "Jacket" },
  ]);
}

export default function Index() {
  const products = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        {products.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))
        }
      </ul>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
