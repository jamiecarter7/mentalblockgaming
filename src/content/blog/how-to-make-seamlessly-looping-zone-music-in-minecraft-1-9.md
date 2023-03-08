---
date: 2016-03-05
title: "How to Make Seamlessly Looping Zone Music in Minecraft 1.9+"
description: "This tutorial will teach you how to make a song loop in a specific area such as a peaceful overworld as smoothly and seamlessly as possible"
exerpt: "This tutorial will teach you how to make a song loop in a specific area, much like other games do – in a peaceful overworld area, peaceful music will play, and once you enter a cave or dungeon more ominous music loops – as smoothly and seamlessly as possible!"
author: "MaybeLaterx"
category: ["redstone", "sound"]
---

<p class="bg-neutral-200 pr-6 round-sm overflow-hidden"><span class=" bg-neutral-300 p-4 px-6 inline-block mr-4">Difficulty</span> ★★☆☆☆ </p>

With the additions of sound to custom resource packs (See: [Importing Custom Sounds into Minecraft](/blog/sound/importing-custom-sounds-into-minecraft/)), map makers have so many new ways of improving their games. One such way is the use of custom music which is become more and more prevalent. This tutorial will teach you how to make a song loop in a specific area, much like other games do – in a peaceful overworld area, peaceful music will play, and once you enter a cave or dungeon more ominous music loops – as smoothly and seamlessly as possible! We have to take into consideration the limitations of Minecraft.

<div class="py-px bg-white shadow-md"><p><strong>If a player is not within audible range of a sound when it is first played, that player will not be able to hear that song even once he steps in range of the sound.</strong></p></div>

This means that we can’t simply loop the sound over and over on some sort of clock, as any players entering the area after the sound has been played will have silence until the song restarts.

(If you’re feeling awfully confident in your redstone abilities and especially pressed for time, check out [this incredibly short tutorial](/blog/redstone/how-to-make-seamlessly-looping-zone-music-in-minecraft-1-9-shortened-version/) that gives you all the commands you need. If, however, you’re looking for a detailed explanation of what’s going on at each step – keep reading!)

My solution to this is starting the song for each player on an individual basis. This does have the negligible side-effect of causing the same song to be playing out of time with different players’, but realistically this should hardly ever be an issue.

To set this up, we’re going to have to track how far through the song each player is. The easiest way to do this is through a scoreboard. Let’s add an objective to track the progress for our song. I’ve called my objective song1.

(If you are playing on a single player world without cheats, open the game to LAN to override this.)

```
/scoreboard objectives add song1 dummy
```

The ‘dummy’ argument at the end of the command just means that we will control this objective manually through command blocks.

Now that we’ve created our objective, let’s display it on the right hand side of the screen.

```
/scoreboard objectives setdisplay sidebar song1
```

This doesn’t show anything yet as nobody has a song1 score. Let’s fix that.

```
/scoreboard players set @a song1 0
```

There, now we should have a song1 score of 0. We will use this score to let Minecraft know how long the song is and therefore how often to repeat the song. We will be counting using <span class="text-purple-500 bg-purple-200 font-medium py-1 px-1.5 rounded-sm">repeating command block</span> ticks. These command blocks run 20 times per second. This means that we need to take the length of the song and times it by 20. The song I will be using is 32 seconds long, so my length will be 640. Let’s set our score to the correct length.

```
/scoreboard players set @a song1 640
```

Now we need to set up a system that counts down until it’s time to play song1 again. We use the following command to decrease everybody’s song1 score by 1.

```
/scoreboard players remove @a song1 1
```

Now I have a score of 639, one less than before. To make this run on repeat, we need – you guessed it – a <span class="text-purple-500 bg-purple-200 font-medium py-1 px-1.5 rounded-sm">repeating command block</span>! First, let’s give ourselves a normal command block.

```
/give @p command_block
```

Now we can place a command block on the floor. Note its colour and direction. Right click the block to change its settings from ‘Impulse’ to ‘Repeat’ and from ‘Needs redstone’ to ‘Always active’. It should now be purple. Let’s put the decrease command we just used into the command block.

The sidebar should be showing your score rapidly decreasing. Congrats! We’re nearly there. Don’t worry if the score becomes negative, that’s normal. Now we have some decisions to make for the rest of our commands: what area does the player have to be in to trigger the sound? How big do we want the radius of the sound to be? Feel free to delete the repeating command block we made for now, and we’ll set up our finalised counting system in part 2!

[Read Part 2 →](/blog/redstone/how-to-make-seamlessly-looping-zone-music-in-minecraft-1-9-part-2)
