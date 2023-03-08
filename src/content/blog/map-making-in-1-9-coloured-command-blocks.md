---
title: "Map Making in 1.9: Coloured Command Blocks!?"
date: 2015-11-08
description: "The new commands blocks added in 1.9 offer new powerful features, let's explore what they do!"
exerpt: "Contrary to not-so-popular belief, the new commands blocks added in 1.9 actually have new features other than adding some much needed colour to your redstone!"
author: "Duskreaper"
category: ["redstone"]
image:
  src: "/blog/posts/mapmaking19colouredcommandblocks/hero.jpg"
  alt: "Coloured command blocks"
---

<p class="text-center text-2xl">LET’S MAKE MY REDSTONE <span class="text-purple-500 bg-purple-100 font-medium py-1 px-px rounded-sm">PR</span><span class="text-teal-700 bg-teal-100 font-medium  py-1 px-px rounded-sm">ET</span><span class="text-orange-500 bg-amber-100 font-medium py-1 px-px rounded-sm">TY</span></p>

Contrary to not-so-popular belief, the new commands blocks added in 1.9 actually have new features other than adding some much needed colour to your redstone!

## Directionality

![Directionality](/blog/posts/mapmaking19colouredcommandblocks/directionality.png)

Command blocks now have a directional component to them, just like repeaters. When a command block is placed, it will be pointing toward you. These new concept will prove integral for using the new command blocks and will be explained further shortly! In the image above you can see all of the directions that a command block can face.

[From left to right; upwards, left, right, downwards, backwards, forwards]

The circular side indicates where the block is facing towards, the front side, and the square side indicates the back of the command block.

## Types

<span class="text-orange-500 bg-amber-100 font-medium py-1 px-1.5 rounded-sm">Orange</span> – The regular command block we all know and love. This command block is now called an <span class="text-orange-500 bg-amber-100 font-medium py-1 px-1.5 rounded-sm">IMPULSE</span> command block, as after it is powered it performs its command as an impulse (once, and immediately).

<span class="text-teal-700 bg-teal-100 font-medium py-1 px-1.5 rounded-sm">Green</span> – This new type of command block is called a <span class="text-teal-700 bg-teal-100 font-medium py-1 px-1.5 rounded-sm">CHAIN</span> command block. This type of command block will perform its action when the block behind it (note arrow directions) performs its command.

<span class="text-purple-500 bg-purple-100 font-medium py-1 px-1.5 rounded-sm">Purple</span> – This is the second new type of command block, called the <span class="text-purple-500 bg-purple-100 font-medium py-1 px-1.5 rounded-sm">REPEAT</span> command block. This block does exactly what it says on the tin. When powered by a redstone current, the command will be run up to 20 times a second. This can be very useful if you wish to spam chat out or, more commonly, to constantly test to see if a condition is met.

## Modes

In addition to directionality, all command blocks have internal settings that you can select, or modes. There are three different toggles that effect the mode of the command block.

![modes1](/blog/posts/mapmaking19colouredcommandblocks/modes1.png)

The first, on the left, toggles the type of the command block. This impacts the way the command block behaves toggling through <span class="text-orange-500 bg-amber-100 font-medium py-1 px-1.5 rounded-sm">Impulse</span> to <span class="text-teal-700 bg-teal-100 font-medium py-1 px-1.5 rounded-sm">Chain</span> and to <span class="text-purple-500 bg-purple-100 font-medium py-1 px-1.5 rounded-sm">Repeat</span> – see above.

The central grey button toggles if the command block is set to unconditional or conditional mode. This only changes the behaviour of the <span class="text-teal-700 bg-teal-100 font-medium py-1 px-1.5 rounded-sm">Chain</span> command blocks and does not affect the other two types

![modes2](/blog/posts/mapmaking19colouredcommandblocks/modes2.png)
_Unconditional (left) and Conditional (right)_

Unconditional <span class="text-teal-700 bg-teal-100 font-medium py-1 px-1.5 rounded-sm">Chain</span> Command blocks will activate their command, like normal, when the block behind them, indicated by the square shape on that side of the command block, runs its command. [NOTE: the block behind them must also be pointed into the chain command block.]

When set to conditional mode, which can be seen externally by the arrow forming a chevron (^) shape, the chain command block will ONLY run its command if the command block behind it runs its command SUCCESSFULLY.

![modes3](/blog/posts/mapmaking19colouredcommandblocks/modes3.png)

In the example above, if the <span class="text-orange-500 bg-amber-100 font-medium py-1 px-1.5 rounded-sm">Impulse</span> command block is a testfor command and it is pointing into the back of the conditional <span class="text-teal-700 bg-teal-100 font-medium py-1 px-1.5 rounded-sm">Chain</span> command block, the <span class="text-teal-700 bg-teal-100 font-medium py-1 px-1.5 rounded-sm">Chain</span> command block will only activate its command when the testfor tests <strong>positive</strong> for a result. This replaces comparators as true/false detectors for command blocks.

The final mode toggles whether or not the block requires redstone to activate, toggling from Needs Redstone to Always Active. It is important to note that <span class="text-orange-500 bg-amber-100 font-medium py-1 px-1.5 rounded-sm">Impulse</span> command blocks will only ever function if they are set to Needs Redstone, as they power when a redstone current is applied. Both the <span class="text-teal-700 bg-teal-100 font-medium py-1 px-1.5 rounded-sm">Chain</span> and <span class="text-purple-500 bg-purple-100 font-medium py-1 px-1.5 rounded-sm">Repeat</span> command blocks can be set to either mode. The Always Active mode means that the command block does not require redstone to activate, which is very useful for <span class="text-teal-700 bg-teal-100 font-medium py-1 px-1.5 rounded-sm">Chain</span> command blocks as it allows them to function as a chain without needing to power every command block in the chain. The <span class="text-purple-500 bg-purple-100 font-medium py-1 px-1.5 rounded-sm">Repeat</span> command blocks can also benefit from this if you wish for the repeat to always function. This may be useful in one example if it is attached to a testfor command as it will continually testfor the result throughout the game.

![modes4](/blog/posts/mapmaking19colouredcommandblocks/modes4.png)

This concludes the introduction to the new command blocks. For a tutorial on how to write commands inside these commands blocks, check out my tutorial <a href="/blog/redstone/help-a-basic-introduction-to-command-blocks-for-map-makers/">here</a>. Keep up to date with our blogs as we highlight some of the changes we have made in 1.9 with the help of these!

Until then,

Happy adventuring
