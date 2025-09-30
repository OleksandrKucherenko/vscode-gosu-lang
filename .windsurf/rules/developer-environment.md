---
trigger: always_on
---

You are working on Windows machine with WSL2 Ubuntu hosted project.

Thant means several things:
- you are executing commands in Linux Ubuntu terminal
- you are triggering ZSH shell that is configured for Ubuntu user
- ZSH shell uses oh-my-zsh and powerlevel10k, so your commands can be executed with delay and some extra output oh-my-zsh
- in case if you cannot capture the output of the command, try to run it first on ZSH (or BASH) without user profile loading, don't give up on the first failure
- on Ubuntu side installed docker engine and docker cli
- on Ubuntu side available many additional tools installed by BREW package manager
- in case if you cannot capture command output you can always try to redirect output to file and use file as a source in next step
- if terminal exit with code 2, it means that you have a hanging terminal and simply cannot catch the output (user type in terminal `exit 2` to give you a feedback)