# Contributing

[Magyar](CONTRIBUTING.hu.md)

- Commit names, commit email addresses and GitHub identities become public and
  can remain in forks permanently. Enable **Settings → Emails → Keep my email
  addresses private**, and use your GitHub noreply address for Git commits.
- Never commit secrets, keys, `.env` files, editor configuration or machine-local
  scripts. Use `.example` templates without real values; the private files are
  ignored. Do not paste personal information into issues, logs or PRs.
- Before uploading a PDF/image, remove embedded author, creator, location,
  history and similar metadata. ExifTool `-all=` can clean supported images.
  For PDFs use a full rewrite, for example `python3 tools/privacy/clean.py file.pdf`
  after installing `tools/privacy/requirements.txt`. ExifTool changes to PDFs are
  incremental and alone do not erase old metadata bytes. Always compare renders
  and page counts, then inspect with ExifTool. Preserve originals privately.
- Handwritten pages must contain no name, student/Neptun identifier, signature
  or personal information. The submitter must inspect every page, including
  scanned pages that text extraction cannot read. Visible content requires
  careful redaction and approval, not just metadata cleaning.
- Submit course material only with the instructor's permission and only when
  it may be public. By opening a PR, confirm that you hold permission to publish
  it under the applicable repository license. Code: MIT; original notes:
  CC BY-SA 4.0. Third-party material requires its own rights confirmation.
- External PRs target `main`. Merge requires review and green CI. Never request
  secrets for fork CI or execute untrusted PR code with `pull_request_target`.
- New dependencies and workflow changes belong in separate PRs with a reason
  and validation. Record version pins and assess required permissions.
- If sensitive data enters Git, privately alert maintainers immediately. Revoke
  or rotate affected keys first. Coordinate any `git filter-repo` history rewrite
  with maintainers and collaborators; copies and forks remain compromised.
  Never force-push or rewrite shared history without explicit approval.

## Validation before a PR

Use the README setup. `pnpm install` configures `.githooks` when it does not
replace existing custom hooks. Install Gitleaks and ExifTool; the hook fails
closed when either is unavailable. Run `pnpm lint`, `pnpm test:privacy`, the
full build/assemble and `pnpm check:links`. Stage intended files and run
`pnpm check:privacy:staged`. This reads the Git index, not unstaged edits.
The binary limit is 10 MiB. Gitleaks checks staged changes locally and complete
fetched history in CI. The metadata check never logs metadata values.

The 27 legacy handwritten files are preserved pending a separate decision.
Their exact path/SHA-256 manifest is a temporary exception, not permission for
new or changed uploads. Do not add, rename, broaden or refresh exceptions to
make a failing check green. Policy changes require code-owner review.
