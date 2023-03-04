---
layout: "../../../layouts/BlogLayout.astro"
title: "How to Write a Custom ‘sounds.json’ File for Minecraft"
pubDate: 2015-01-05
description: "This is the first post of my new Astro blog."
exerpt: "This tutorial will teach you how to write your own sounds.json file for use with custom sounds in resource packs."
author: "MaybeLaterx"
image:
  url: "/blog/posts/playtesting-bible-a-guide-for-game-developers/enlightening-book.jpg"
  alt: "The Astro logo with the word One."
category: "sound"
tags: ["sound", "resource-pack"]
---

Hello there fellow Minecrafters! This tutorial will teach you how to write your own sounds.json file for use with custom sounds in resource packs. For this tutorial, Notepad, a very simple word processing program, is recommended.

## What is the sounds.json file?

The sounds.json file is what Minecraft uses to link commands in the game to their location in a resource pack. If I tell you to find a black ballpoint pen in my room, it would take you a long time to find it. However, if I tell you that the black ballpoint pen is in a pencil case in a black bag, you would find it much more quickly. This is what the sounds.json file does in Minecraft. It also allows you to choose the sound file’s name in game for use with the /playsound command.

## What does a sounds.json file look like?

The layout of a sounds.json file looks something like the following:

```
{
    "countdown": {"sounds": ["custom/countdown"]},
    "finish": {"sounds": ["custom/finish"]},
    "lose": {"sounds": ["custom/lose"]},
    "win": {"sounds": ["custom/win"]}
}
```

It might look scary, but it’s really not! This sounds.json file allows Minecraft to read four sounds: “countdown”, “finish”, “lose” and “win”. The parts highlighted in green tell Minecraft what the sound is called. The parts in blue tell the game where the sound file are located. Now take a careful look at the three bits highlighted in red. The opening curly bracket ({) and closing curly bracket (}) only occur once, and there is a comma (,) between every sound entry but NOT after the final entry. Once you have written out the code for the sounds you want to use in your game, we need to turn this code into a sounds.json file.

## How do I turn my code into a sounds.json file?

Once your code is ready in Notepad, Click File -> Save as… and call the file sounds.json. Make sure that the .txt extension in the name is removed. (We want “sounds.json”, not “sounds.json.txt”.)

Now your sounds.json file is ready! For more information on how to import custom sounds into maps, please follow the rest of the tutorial [here](/blog/sound/importing-custom-sounds-into-minecraft/).
