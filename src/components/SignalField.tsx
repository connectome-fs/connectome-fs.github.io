import { A } from "@solidjs/router";
import type { Component } from "solid-js";

/** Restrained landing-page hero using the shared organization mark. */
export const SignalField: Component = () => {
  return (
    <section class="hero" aria-labelledby="hero-title">
      <div class="wrap hero__inner">
        <img
          class="hero__logo"
          src="/brand/logo-mark.svg"
          width={88}
          height={88}
          alt=""
          decoding="async"
        />
        <div class="hero__copy">
          <p class="eyebrow">Graph-native filesystem substrate</p>
          <h1 id="hero-title">connectome-fs</h1>
          <p class="hero__summary">
            Store and find files the way your brain does. Make connections,
            not folders.
          </p>
          <p class="hero__detail">
            GUID-addressed nodes, multiple names, typed associations, editions,
            and sharded search—with hierarchy kept as a familiar navigation view.
          </p>
          <div class="hero__actions">
            <a class="btn btn-primary" href="/docs/">
              Read the docs
            </a>
            <A class="btn btn-ghost" href="/roadmap">
              View the roadmap
            </A>
          </div>
        </div>
      </div>
    </section>
  );
};
