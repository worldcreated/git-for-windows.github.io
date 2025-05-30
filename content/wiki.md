---
title: "Wiki"
aliases:
  - "Home"
---
## Introduction

_Git for Windows_ originally had a wiki, meant for more technical information than was presented on [its home page](https://gitforwindows.org/). To prevent vandalism from going unnoticed for weeks, that wiki had to be shut down. It is still possible to edit these pages, though, via Pull Request in [the repository](https://github.com/git-for-windows/git-for-windows.github.io). See also [the documentation how you can contribute](./how-to-participate.html).

## About

_Git for Windows_ is very different from _Git_ in one very important respect: As Windows does not provide the *POSIX* infrastructure Git expects, Git for Windows  always had to ship with much more than any other Git distribution: provide a `bash`, a `perl`, many *POSIX* tools such as `sed`, `awk`, `tr`, etc.

Git for Windows 1.x did that by starting off from an [MSys](http://www.mingw.org/wiki/msys) installation and just packaging all the required files as-are. _MSys_ did not sport any package manager at the time, so all of the updates were quite manual, and some of the components we shipped were not even part of _MSys_ -- such as `msmtp` or `WhoUses` -- so we had to compile them from scratch, and maintain those components ourselves.

This became really too tedious, so much so that there was not enough time to provide updated Git for Windows installers regularly.

At some stage, it became obvious that there needs to be a better solution. [@sschuberth](https://github.com/sschuberth) had already started a [separate project](https://github.com/sschuberth/gfw-msys1-sdk) to leverage the package manager that _MSys_ had introduced at that stage, `mingw-get`. However, it turned out that the packages were not maintained all that well, and besides, _MSys_' runtime had not been kept up-to-date with [Cygwin](https://www.cygwin.com/), and was falling behind in terms of features and support.

In a two-hour Skype session about the course of _Git for Windows_ [@dscho](https://github.com/dscho), [@t-b](https://github.com/t-b) and [@sschuberth](https://github.com/sschuberth) decided to give [MSYS2](https://msys2.github.io/) a whirl. _MSYS2_ was started with the idea to restart the _MSys_ project, frequently updating with _Cygwin_ and just keeping the spirit of _MSys_ to provide a very stripped-down *POSIX* layer, essentially a bare-minimum version of _Cygwin_. _MSYS2_ also sports a package manager (`pacman`) and keeps those packages up-to-date very well. Another bonus: _MSYS2_ is available for `64-bit` in addition to `32-bit`, while _MSys_ was stuck with `32-bit`.

Thanks to sponsoring of _GitHub_, [@dscho](https://github.com/dscho) could afford to spend the time to investigate the possibilities with _MSYS2_. It turned out that _MSYS2_ already provided most of the parts needed, and would make maintenance much, much easier. [@dscho](https://github.com/dscho) (and others too) really spent an insane amount of time (thanks GitHub!) to get everything up to speed, even fixing a couple of long-standing bugs in _Git for Windows_. It essentially came down to modifying the `msys2-runtime` to _Git for Windows_ needs. The rest is basically upstream _MSYS2_ architecture.

And yes, the idea is still the same as the original one: Update the _MSYS2_ setup, together with a _Git_ package built from _Git for Windows_' source code, then bundle the relevant files together with a couple of extra files into an installer. Then I sign it and upload it. And that is _Git for Windows_ 2.x.

Now, keep in mind that _MSYS2_ and Linux (The original target for _Git_'s distribution) are very different beasts. Their distributions might include packages that are built from the same source code (i.e. the `binutils`, `gcc` or `bash` package), but the runtime is very, very different: _MSYS2_'s runtime is a stripped-down, slightly modified _Cygwin_ runtime running on top of the Windows kernel, while Linux' runtime is the Linux kernel, running as a separate OS altogether.

So if you are missing some packages - feel free to start making one. This is Open Source, after all, so everybody interested and capable enough can contribute whatever they need to address their needs. And that includes you: you could imitate e.g. [a simple `PKGBUILD` file](https://github.com/msys2/MINGW-packages/blob/HEAD/mingw-w64-assimp/PKGBUILD) to build a new package e.g. `msmtp`, the component that _Git for Windows_ 1.x uses to support `sendemail`. Then open a Pull Request so that _Git for Windows_ can ship it. Our documentation will be helpful in that endeavor: [package-management](./package-management.html), in particular [package-management#rebuild-packages](./package-management.html#rebuild-packages).

## Start documenting

If you need inspiration what you could write about: document your common work flows. Write a tutorial how to start coding _Git for Windows_, how to run the test suite. Write a tutorial how to debug a failing test. Write about something you would have wished you had known about Git for Windows a long time ago.
