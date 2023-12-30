// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";

export default function App() {
  return (
    <MetaProvider>
      <Router
        root={(props) => (
          <>
            <Title>Scratch - A simple note taking app</Title>
            <Link
              rel="stylesheet"
              type="text/css"
              href="https://fonts.googleapis.com/css?family=PT+Serif|Open+Sans:300,400,600,700,800"
            />
            <Link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <Link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <Link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <Link rel="manifest" href="/site.webmanifest" />
            <Meta name="msapplication-TileColor" content="#da532c" />
            <Meta name="theme-color" content="#ffffff" />
            <Meta name="description" content="A simple note taking app" />
            <Nav />
            <Suspense>{props.children}</Suspense>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
