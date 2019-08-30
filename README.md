# JavaScript-Drum-Kit

### A key-toggled soundboard of various drum sounds

---

## Overview

The Html and Css were imported off of the Javascript30 course, the javascript being my contribution.

The almost comical background and overall styling is designed to provided some personal uniqueness in a world full of over-bearing seriousness. It also expresses my creative personallity.

## Javascript Information

#### Query Selector

QuerySelector, as seen below, is used to select any tags that possess the required attribute in the html file. Useful for selecting, in this case, one of the visible "keys" on the screen and add an animation.

It can also be used to select an audio clip to be played that is stored in the html.

`document.querySelector('[html-tag][[attribute]="[value]"]')`

#### Add Event Listener

AddEventListener is a tool that will activate a javascript function after a certain "action" has been recognised, such as the push of a button, or the release of said button. Both of these actions were used as conditions to start and stop various javascript actions, such as 'find a certain sound' or 'change a particular div's class'.

Additionaly, it doesn't have to be attatched to a window, but anything in the html page.

`window.addEventListener('[action]', [function]);`

#### Class List

ClassList is used when ultimately changing the element we found with QuerySelector, and was used in this instance to add and remove a class the the "keys" divs in the html, to change the keys to and from their alternating state, giving instantanious feedback to the users actions.

`[element].classList.[add/remove]('[class]')`

## Review

Overall the project is brought to a satasfactory completion, with the javascript functioning as intended.

Possibilities for improvement include fitting the keys to a smaller screen, perhaps a phone, and patching the bug that causes a sound to be repeated at rapid speed when a putton is held down.

An additional feature would be to change the drum sounds to be replaced with mario noises that would be more fitting to the playful nature of the site.