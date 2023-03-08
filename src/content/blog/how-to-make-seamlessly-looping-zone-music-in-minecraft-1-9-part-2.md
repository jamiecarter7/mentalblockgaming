---
date: 2016-03-06
title: "How to Make Seamlessly Looping Zone Music in Minecraft 1.9+ [Part 2]"
description: "[Part 2] This tutorial will teach you how to make a song loop in a specific area such as a peaceful overworld as smoothly and seamlessly as possible"
exerpt: "[Part 2] This tutorial will teach you how to make a song loop in a specific area, much like other games do – in a peaceful overworld area, peaceful music will play, and once you enter a cave or dungeon more ominous music loops – as smoothly and seamlessly as possible!"
author: "MaybeLaterx"
category: ["redstone", "sound"]
---

[← Read Part 1](/blog/redstone/how-to-make-seamlessly-looping-zone-music-in-minecraft-1-9/)

Now that we’re a bit more familiar with command blocks, and now that we have a better understanding of how our system is going to know when it’s time to replay a song for each player, let’s lay out our final command block set up. We need one <span class="text-purple-500 bg-purple-200 font-medium py-1 px-1.5 rounded-sm">repeating block</span>, facing into a <span class="text-teal-700 bg-teal-200 font-medium  py-1 px-1.5 rounded-sm">chain block</span>, facing into another <span class="text-teal-700 bg-teal-200 font-medium  py-1 px-1.5 rounded-sm">chain block</span>. (The ‘Chain’ setting replaces ‘Impulse’.)

![Command blocks](/blog/posts/howtomakeseamlesslyloopingmusicpart2/commandblocks.png)

Make sure all of the command blocks are set to ‘Always active’ instead of ‘Needs redstone’ and that they’re all facing the same direction in a line. Now we can begin putting in our finalised commands! In the first block, we want to set the score of anybody who can’t hear the song to 640 (or whatever song length you’re using). This could be somebody entering the zone for the first time, or somebody whose song just finished and who needs to hear it again. **This will effectively be anybody whose song1 score is 0** (or less). Here’s the command for that:

```
/scoreboard players set @a[score_song1=0] song1 640
```

But that’s not all! We want our [entity selector](/blog/redstone/help-a-basic-introduction-to-command-blocks-for-map-makers#ats) to target players in a particular location as well. Choose a coordinate in your world along with a radius. (If you’re not sure how, press F3 to see more details about the world.) I will choose 0,100,0 and a radius of 20. Anyone within 20 blocks of 0,100,0 will have their song1 score set to 640 – as long as their song score is 0.

```
/scoreboard players set @a[x=0,y=100,z=0,r=20,score_song1=0] song1 640
```

Excellent! Let’s put it in the repeating command block. One command down! Now for the **third command block**. This will be our decreasing score command.

```
/scoreboard players remove @a song1 1
```

If we want to make the sidebar look neater and very slightly increase performance, we can make the score decrease down to 0 but not below 0.

```
/scoreboard players remove @a[score_song1_min=1] song1 1
```

Simple! Now, finally, let’s move on to our middle command block. What this will do is play the song to anybody whose score is the exact length of the song. I’ve called the song that I’m using ‘mysong’ in the JSON file. (Learn more about the playsound command and the sounds.json [here](/blog/sound/importing-custom-sounds-into-minecraft/).)

```
/playsound mysong master @a[score_song1_min=640] 0 100 0 2
```

The final four numbers in this command should be replaced with your x, y, z and volume values. Note that volume does not correlate perfectly to radius, so play around with the volume until it sounds right to you. I prefer making the volume area slightly larger than the radius so that when the song plays it begins at a good audible volume, rather than slowly fading in from nothing. (But that’s just my preference!) Now that the commands are all done, we can stop displaying the scoreboard on the right using the following command:

```
/scoreboard objectives setdisplay sidebar
```

And that’s it – you’re good to go! If you want to set up multiple commands for multiple songs, repeat this process with a new scoreboard (such as song2 or lobbymusic). Enjoy!

If you have any questions about this tutorial, feel free to get in touch. If you’re looking for an example of this music system in action, download [Workshop Wars: Christmas Edition](/maps/workshopwarschristmasedition/) and walk around the three sections of the lobby to hear how songs fade and mix from one zone to another!

Happy map making!
