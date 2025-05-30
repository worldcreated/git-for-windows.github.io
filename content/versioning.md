---
title: "Versioning"
aliases:
  - "Versioning"
---
Git for Windows is a fork of Git, and therefore follows Git's versions. Therefore, whenever a new Git version comes out, we release a new Git for Windows version whose version number is derived from Git's. Example: short after [Git v2.29.0](https://github.com/git/git/blob/v2.29.2/Documentation/RelNotes/2.29.2.txt) was released, [Git for Windows v2.29.0](https://github.com/git-for-windows/git/releases/tag/v2.29.2.windows.1) was released.

Sometimes, Git for Windows needs to release intermediate versions that do not follow a release by the Git project. For example, in November 2020 a new Git LFS version was released that fixed a critical security bug. Since Git for Windows ships with Git LFS included and enabled by default, we had to quickly release a new Git for Windows version, too. We called the corresponding tag [`v2.29.2.windows.2`](https://github.com/git-for-windows/git/releases/tag/v2.29.2.windows.2) and the version "v2.29.0(2)" (the first part of the version still indicates the upstream Git version, and the number in parentheses indicates the iteration of Git for Windows on top of that, and that number is identical to the suffix of the tag name).

In December, Git Credential Manager Core followed with a version fixing a severe vulnerability, and since Git for Windows bundles that component and enables it by default, a new Git for Windows version was necessary, too. We call this version v2.29.0(3) with its corresponding tag [`v2.29.2.windows.3`](https://github.com/git-for-windows/git/releases/tag/v2.29.2.windows.3).

Technically, the most important changes for such important bug fixes are not always in the [`git-for-windows/git`](https://github.com/git-for-windows/git/) repository, and therefore the tagged revisions do not _themselves_ have the fixes. However, we require those tags so that we can have proper releases up at https://github.com/git-for-windows/git/releases.

Side note: By that naming convention, Git for Windows v2.29.0 should actually have been called v2.29.0(1), but for convenience, we simply drop the `(1)`.
There will never be a `(0)` because we will always have patches on top of upstream Git.