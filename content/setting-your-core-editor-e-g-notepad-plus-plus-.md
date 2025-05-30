---
title: "Setting your Core.Editor (e.g. Notepad Plus Plus)"
aliases:
  - "Setting-your-Core.Editor-(e.g.-Notepad-Plus-Plus)"
---
Many Windows users are not familiar with vi/vim/emacs style command line terminal editors.
[To quit: type `:q` in the bottom bar and press Enter. If you're typing into the file contents, press Esc first.]

Many users prefer their local Windows graphic editor, such as Notepad++, this note shows how.

# Setting Notepad++ as your Core.Editor

Notepad++ provides multiple useful options ([Npp](https://notepad-plus-plus.org) [online help](https://notepad-plus-plus.org/online-help/). Install as required.

The command

`git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noplugin`"

should set up the following within your config file.


    [core]
           editor = 'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noplugin


Note that the windows executable path will probably need quoting to keep it as a single argument. You will need to adjust the path to match that of your OS version's programme files.

The first three options make Notepad++ open a new, separate, simple window looking like a plain
vanilla Windows Notepad screen for each git editor call, with the right action when that
window is closed.

Some users prefer not to use the '-notabbar', as it may become a preferred option if you didn't
have an Npp session already open, though the -nosession should prevent this.

The canonical discussion is at [stackoverflow/1634161](https://stackoverflow.com/questions/1634161/how-do-i-use-notepad-or-other-with-msysgit). Note that in Git for Windows, with its MSYS2 underpinnings, we do pass paths that are
understandable by Npp, so there should be no need for any of the Cygwin path mangling trickery discussed in the SO thread.
