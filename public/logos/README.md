# Asset register — platform logos

**Every file in `placeholders/` is a TEMPORARY premium monogram tile.**
No official platform logo has been approved yet (`logoApproved: false` for all
records in `src/content/platforms.ts`).

To install an approved logo:

1. Add the approved SVG/PNG to this directory (e.g. `/logos/studyear.svg`).
2. Update the platform's `logo` path and set `logoApproved: true` in
   `src/content/platforms.ts`.
3. Delete the corresponding placeholder file.

Never invent or imitate an official platform identity. Placeholders must remain
visibly generic monograms until the real asset is supplied.
