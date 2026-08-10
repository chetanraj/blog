# Capper UI icon update

Apply this patch to [capper](https://github.com/chetanraj/capper) to add blog icons to `@capper-ui/react@0.0.2`:

```bash
cd /path/to/capper
git apply /path/to/blog/vendor/capper-add-blog-icons.patch
pnpm --filter @capper-ui/react test
pnpm --filter @capper-ui/react build
cd packages/react && npm publish --access public
```

Then in the blog repo, update `src/icons/index.ts` to export everything from `@capper-ui/react` only and bump the dependency to `^0.0.2`.

## Icons added

- `Calendar`, `Clock` (post metadata)
- `GithubLogo`, `InstagramLogo`, `XLogo` (footer social)
