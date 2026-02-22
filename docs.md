---
title: Docs - Scroll My Mac
layout: base.njk
---

# Docs

Scroll My Mac allows you to scroll anywhere in macOS by clicking and dragging your mouse pointer. When you launch the app, **Scroll Mode** is disabled. To enable it, press F6 or click the toggle switch in the settings window.

Once enabled, you can scroll vertically or horizontally by clicking and dragging the mouse pointer. By default, you can still click on interface elements.

That’s the gist of it! See below for more information about other settings and behaviors.

## What happens when you launch Scroll My Mac for the first time?

On first launch you will need to follow instructions to give Scroll My Mac accessibility permissions in macOS Settings.

**Safety timeout.** To prevent users from inadvertently getting their mouse trapped, Scroll My Mac enables a safety timeout by default. Holding the mouse cursor still for 10 seconds will disable **Scroll Mode**. Once you confirm everything is working as you expect, you can disable this setting.

## Customize the Scroll Mode hotkey

The hotkey is F6 by default, but you are welcome to change it to any key combination that works for you. Function keys work alone, but other keys will need a modifier (i.e., Command, Control, Option, or Shift).

## Click-through

This is enabled by default. When enabled, you can click on the screen normally without activating the scroll engine. When disabled, all clicks are considered to be attempts to scroll.

I suspect the default behavior is fine for most people. That said, if you'd rather all clicks be interpreted as scrolls when **Scroll Mode** is enabled then you can disable the click through setting.

## Drag without scrolling

By default, every click and drag action is assumed to be an attempt to scroll. If you need to click and drag natively *without* scrolling (e.g., to move or resize a menu), you would normally need to disable **Scroll Mode** temporarily. For people who want to keep scroll mode enabled all the time, this is a bit annoying.

To remedy this, there is an optional setting called **Click-and-hold passthrough**. When this setting is enabled, hold the mouse still then click and hold for a short delay. After the delay, the scroll engine will deactivate and allow you to drag your mouse normally.

For example, click on the title bar of a window and hold the mouse down for a short delay. Then move the mouse while still holding to drag the window around.

By default, the **Hold delay** is one second. You can fine tune that in settings so that it's more comfortable for you. Once you get used to it, I recommend .5 or even .25 seconds.

## Menu bar icon

By default, ScrollMyMac displays a menu bar icon that looks like a computer mouse. When **Scroll Mode** is disabled the icon is partially transparent. You can click on the icon to enable **Scroll Mode**, access settings, or quit the app.

## Launch at login

Enable **Launch at login** to have Scroll My Mac automatically open when your Mac starts up. You will still need to manually toggle scroll mode on as it doesn't start with it enabled.

## Excluded apps

You might have applications that you want Scroll My Mac to ignore. You may add those in the **Excluded Apps** section in the settings window. Whenever you are using one of the excluded apps, the mouse icon in the menu bar will have a slash through it.