---
title: "Issue reporting guidelines"
aliases:
  - "Issue-reporting-guidelines"
---
* Search Existing issues & pull requests, both [open](https://github.com/git-for-windows/git/issues?q=is%3Aopen) and [closed](https://github.com/git-for-windows/git/issues?q=is%3Aclosed). Determine whether or not a bug report has been dispatched. What is the status of the report? Are there any other bugs to be looked at? If so issue another bug report.
* Include the output of the `git --version` in addition to the Windows version as that information is often necessary to reproduce the issue. When reporting problems involving a server, include the same information for the server side (insofar possible). Likewise, please mention if you use 32-bit Windows, or a 32-bit version of Git on a 64-bit Windows. If in doubt, try to provide more information rather then less; It's better than leaving a lot of guess work! :)
* Describe the options used when installing Git for Windows, and the console type/window (if any).
* If your setup is different from "normal" setups in any way, it is a good idea to put specifics about that into your bug report, too.
* Describe your issue properly. If you spend 30 seconds throwing out a sloppy report, do expect that others will spend exactly the same amount on trying to resolve it. In contrast, if you write a complete and pleasantly informative bug report, you will almost certainly be rewarded by excellent help with your problem.
* Include a [Minimal, Complete, and Verifiable example](http://stackoverflow.com/help/mcve) using GitHub Markdown's `codeblock` delimiters.
* If your issue stems from a particular repository include its URL. If the repository is proprietary try to create a public test repository showing the same issue.
* Be prepared to test fixes!
* Be polite. You are asking highly competent software developers for help, for free, so you might want to avoid treating them as if they were a commodity or at your free disposal.
* An example for an outstanding report can be found [here](https://github.com/msysgit/msysgit/issues/206#issuecomment-44574988). You may want to imitate the level of detail.
* For further inspiration, read reports that were resolved successfully, http://www.chiark.greenend.org.uk/~sgtatham/bugs.html, http://stackoverflow.com/questions/how-to-ask and http://whathaveyoutried.com/.