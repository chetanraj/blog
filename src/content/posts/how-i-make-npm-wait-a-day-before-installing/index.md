---
path: "/how-i-make-npm-wait-a-day-before-installing"
date: "2026-11-02"
title: "How I make npm wait a day before installing"
description: "What one line of .npmrc, min-release-age=1, actually does. What it filters, when it errors, and what it does not check."
published: true
tags: ['npm', 'security', 'supply chain']
toc: true
tocDepth: 2
---

Last month I added one line to my blog repo. It is the whole `.npmrc` file.

```txt
min-release-age=1
```

I added it because of September 2025. On September 8, an attacker phished the npm account behind chalk and debug and published malicious versions of 18 packages. Together those packages get billions of downloads a week. The bad chalk versions were live for about two hours. A week later the Shai-Hulud worm started stealing npm tokens and publishing compromised versions with them. CISA counted more than 500 affected packages.

Both attacks needed someone to install a version in its first few hours. I do not want to be that someone. So I tell npm to wait.

Then I noticed I could not explain exactly what that line does. So I read the npm docs, the pull request, and the changelog, and I tested it on a throwaway project with npm 11.21.1. This is what I found.

## What the setting is

`min-release-age` shipped in npm 11.10.0 on February 11, 2026. The value is a number of days. With `min-release-age=1`, npm only installs versions that were published more than one day ago.

A day here is a rolling 24 hours. I ran an install at 9:48 AM and the error said "with a date before 10/24/2026, 9:48:29 AM". That is the same clock time on the previous day.

npm already had a `before` setting. It takes an exact date and makes npm act as if nothing newer exists. `min-release-age` is the relative version of the same filter. In the pull request that added it, the maintainer shows npm turning `--min-release-age=30` into a `before` date 30 days back. If both are set in the same config file, `before` wins.

## What it filters

The filter runs when npm picks a version for a range. Versions inside the window are invisible to the resolver. That includes transitive dependencies. The maintainer confirmed in the pull request thread that the filter applies when npm fetches each package's metadata, so every package in the tree goes through it.

I checked that too. I generated a lockfile for `express@4.21.2` with `--min-release-age=300`. All 69 packages in that tree were published before the cutoff. Without the flag, 5 of them were newer.

## What happens when nothing is old enough

It depends on how you ask.

With a dist-tag, npm falls back. `typescript@next` pointed to a nightly published about 20 hours earlier. `npm i typescript@next` installed `7.0.2` instead.

With an exact version, or a range that only too-new versions satisfy, npm stops with an error.

```txt
$ npm i typescript@7.1.0-dev.20261024.1
npm error code ETARGET
npm error notarget No matching version found for typescript@7.1.0-dev.20261024.1 with a date before 10/24/2026, 9:48:29 AM.
```

I like that. A failed install tells me something happened. A silent downgrade would not.

## What it does not do

This is the part I had wrong. The setting does not check what is already in `package-lock.json`.

I installed that fresh TypeScript nightly without the setting. Then I added `min-release-age=1` and ran `npm ci`. npm installed the 20 hour old version without a word. `npm install` did the same. Only `npm update` failed, because it had to resolve the range again. The maintainer says the same in the pull request thread: an existing lockfile entry skips the "find a version that matches this range" step.

It also needs npm 11.10 or newer. My blog CI runs `npm ci` on Node 22, and Node 22 ships with npm 10.9. I ran npm 10.9.9 with the same `.npmrc`. It installed the too-new version and printed no warning.

So the line protects one moment: when a new version enters the lockfile. For me that happens on my laptop, when I run `npm install` or `npm update`. CI only replays the lockfile. That works as long as my local npm is new enough, so `npm -v` is now part of the habit.

## When I need a fresh version

Sometimes the fix I need was published yesterday. If the window blocks `npm audit fix`, npm keeps the vulnerable version, warns, and exits with a non-zero code.

For a one-off, a command line flag beats the project `.npmrc`. `npm i some-pkg --min-release-age=0` installed the 20 hour old nightly in my test.

For packages I publish myself, npm 11.17.0 added `min-release-age-exclude`. It takes package names or globs. For my blog that would be my own design system.

```txt
min-release-age=1
min-release-age-exclude[]=@capper-ui/*
```

Only the matching packages skip the wait. Their dependencies still go through it.

## Other package managers

pnpm has had `minimumReleaseAge` since 10.16. It is in minutes, and since pnpm 11 the default is 1440, which is one day. Yarn has `npmMinimalAgeGate`, and its docs say the default is `1d`. Bun has `minimumReleaseAge` in `bunfig.toml`, in seconds, and it is off by default. Bun's docs also say existing `bun.lock` entries stay unchanged, the same as npm.

npm leaves it off by default too. That is why the line has to be in `.npmrc`.

## The takeaway

`min-release-age=1` makes npm skip any version younger than 24 hours when it resolves a dependency. It covers the whole tree. It errors when nothing older fits an exact version or range. It does not re-check the lockfile, and npm 10 ignores it.

The bad chalk versions were live for about two hours. With a one-day wait, my next install would have picked an older version.

## Sources

- [npm docs: config, `min-release-age`, `before`, `min-release-age-exclude`](https://docs.npmjs.com/cli/v11/using-npm/config)
- [npm/cli PR #8965: feat: add min-release-age](https://github.com/npm/cli/pull/8965)
- [npm v11.10.0 release notes](https://github.com/npm/cli/releases/tag/v11.10.0)
- [npm v11.17.0 release notes (min-release-age-exclude)](https://github.com/npm/cli/releases/tag/v11.17.0)
- [Aikido: npm debug and chalk packages compromised](https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised)
- [chalk issue #656: 5.6.1 compromised](https://github.com/chalk/chalk/issues/656)
- [debug advisory GHSA-4x49-vf9v-38px](https://github.com/debug-js/debug/security/advisories/GHSA-4x49-vf9v-38px)
- [CISA: Widespread supply chain compromise impacting npm ecosystem](https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem)
- [pnpm docs: minimumReleaseAge](https://pnpm.io/settings/dependency-resolution)
- [Yarn docs: security, age gate](https://yarnpkg.com/features/security)
- [Bun docs: minimum release age](https://bun.com/docs/pm/cli/install)
