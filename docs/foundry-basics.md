# Foundry Basics

It is worth noting that Foundry has deep documentaiotn, built by their community, [on their website](https://foundryvtt.com/kb/). This guide is ment to serve as a very brief overview to help players acclimate the the basics. 

## System Requirements

Foundry is a modern application that runs in a browser window; as such, you should make sure that your machine can run it.

- Relatively modern computer running Windows 10, MacOS, or Linux operating systems with support for 64-bit architecture.
- An integrated GPU to enable hardware acceleration.
- 8GB of RAM
- A monitor no smaller than 1366x768. At this minimum resolution many aspects of the UI will feel cramped.
- A modern web browser like Chrome, Firefox, Opera, or Edge with hardware acceleration enabled. (Safari is not a supported browser at this time).

— Source: [Foundry Docs](https://foundryvtt.com/article/requirements/)

## Play Area Overview

Foundry operates within a canvas, or play area. There are three main areas you need to be concerned about as a player: the Canvas Layer Tools, the Sidebar and its Tabs, and the Macro and players area. 

<figure markdown>
![The default Foundry Canvas](https://gmdoug.sfo3.digitaloceanspaces.com/fvtt-ui-map-2020-05-24.jpg){ loading=lazy }
<figcaption>The Foundry Canvas (Source: foundryvtt.com)</figcaption>
</figure>

### Canvas Layer Tools
----

The toolbar on the left has two columns: the leftmost column is the tool, and the rightmost column are options within that tool. 

The top icon, the Token icon, is where you can select your token and move it, use Targeting, or to :ref:`Measure Distance`.
The middle icon is the :ref:`Spell Templates` function. 
The Pencil icon is the Draw Shape function.

### Sidebar and tabs
----

The sidebar has several tabs. You can collapse the sidebar then drag any table out into its own window. This is especially useful for combat. 

- **Bubble:** The chat tab, where the dice rolling will happen.
- **Fist:** The combat tracker. 
- **Group of People:** The Actors you can see in the game; your own PC and any minions are here, and can be edited when you click on them.
- **The Briefcase:** The game's items. The GM may put special items here and you can reference them.
- **Open Book:** Journal entries for the scene. You can even create your own. 
- **Tables:** Randomized tables. You probably don't need to worry about this. 
- **Music:** Music settings. I don't use music.
- **Book:** Compendiums. These are groups of items or actors that have been shared with you. They include spells, feats, actors, items, and macros. This is a *great* area to look up spells, conditions, etc. 
- **Gears:** Player settings. You can change the UI skin, help solve frame rate issues, and other basic options. 
- **Arrow**: Collapses Menu

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/bowedknobbyhomalocephale?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

## Logging In

Foundry can be run in a variety of configurations. Mine is on a self-hosted server that is almost always on. 

To join a game, navigate to the URL in your browser and select the user name the GM assigned to you. You probably do not need an access key (password). If you were assigned one, the GM should have told you and you would enter it here. 


<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/OddCriminalKodiakbear?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

## Iteracting with the Canvas

### Movement
----
You can drag your token anywhere you like. If you command-click on the token (control-click on windows), you can measure distance. If you click multiple times you can set waypoints. Press the space bar when you are ready to move, or right-click to reset. 

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/physicalillegaliriomotecat?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>


### Highlight a Target
----
Click on the Target icon on the left. Click on the token you ant to target. This will highlight it on the map for you.

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/feistyprestigiousborderterrier?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>


### Measure Distance
----

Click on the ruler icon and drag out the distance. As with ;:ref:`Movement on the Map`_, you can command/control click to set up waypoints. 

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/linedimportantbeauceron?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

### Spell Templates
----

Select the right-angle ruler in the toolbar on the left, then select the type of spell. There is a circle for bursts, an angle for cones, a square for concurrent surface area, and an arrow for lines. Once you have the template dragges out, you can move it around. You can select the template to delete it when you're finished. 

Don't forget to delete the template when you're done, and that unless you select abother tool Foundry will assume you want to add more templates. 

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/vainconcretedanishswedishfarmdog?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

### Journal Notes
----

If your GM has entered any journal notes for the area, you can click on this icon to highlight them. Double click on the journal icon to opn it up. 

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/anotherzestyalpineroadguidetigerbeetle?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

## Creating A PC 

This section covers how to create your token and character sheet. 

### Creating Actors
----

One of the fundamental objects within the Foundry Virtual Tabletop is the Actor. Actors are the protagonists, allies, monsters, antagonists, and persons within the World that you create. The game System being used has control to define the exact types of actors which are relevant for it’s gameplay, but for most tabletop roleplaying systems these actors will represent the characters which the player Users impersonate and the foes they encounter.

You have permission to create your own PC — an actor! Here's how to do that:

1. Clicking on the icon in the sidebar that that looks like a group of people. 
2. At the bottom click "Create Actor"
3. Name your PC
4. leave "character" selected as its type
5. Click "Create Actor"

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/messypastchital?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

### Creating your Token
----

After you create the Actor, you can double-click on it in the Actors sidebar to edit it and create a token. A Token represents the piece on the Game Board, and has several important settings. (If you just created a new actor, you will immediately be taken to the Character Sheet screen). To create a token for your PC, use the following steps:

1. Click on "Prototype token" in the character sheet (A "prototype token" is one that has not been placed on the board yet)
2. Name the token however you want (this should already be correct)
3. Select "hover" on "Display Name" so others can see your token's name. 
4. Click on "Image" 
5. Select the image (follow steps outlined in :ref:`Choosing an Existing Avatar Image` using the file browser, or the steps in :ref:`Uploading a new Avatar Image`)
6. Click on "vision"
7. If you have Darkvision enter its feet under "dim vision"
8. If you normal have a light source in dark areas, enter its radius in the dim and bright fields under "Emit Dim" and "Emit Bright". Both sources come from your token, so a *Light* spell that emits 20 feet of bright light and 20 feet of dim light should be set to 40 feet of dim and 20 feet of bright (which overlaps the dim). 
9. Click "Update Token."


<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/blaringthatenglishsetter?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

!!! attention "Player Tokens Should Always be Round!"

    Many GMs — myself included — prefer to designate PCs and NPC tokens via shapes. This allows the user to quickly identify a fellow PC's token on the board, and an NPC's. In my games, NPCs should always be square, and PCs should always be round.

### Avatars
----

After logging in, you will be directed to choose your player avatar. The default is a mysterious, hooded person. I tend to make players trusted, so you can upload your own character avatar. Not all GMs will do this, and you may have to talk to them about getting your avarar set up. 

<figure markdown>
![The default Avatar](https://gmdoug.sfo3.digitaloceanspaces.com/playeravatardefault.png){ loading=lazy }
<figcaption>The default Avatar, a mysterious figure indeed!</figcaption>
</figure>


#### Uploading a new Avatar Image

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/HiddenAshamedCygnet?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

To upload a new avatar, do the following:

1. Click on the avatar image 
2. Click on "User Data" at the top of the image browser (this should be the default)
3. Click on "dragupload" 
4. Click "Choose File"
5. Click "Select File"

#### Choosing an Existing Avatar Image

I have a library of images from previous games, and they are ready to share with you! If you played with me before, it's likely I moved your uploaded tokens to the correct folder as well. 

  <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/FlashyUnrulyHamadryad?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

1. Click on the avatar image 
2. Click on the "Up" arrow until you see "assets"
3. Click on "assets"
4. Click on "PC Art"
5. Select your token (note that there are a variety of view options next to "Display Mode" so you can see previews of the image)
6. Click "Select File"

### Changing your Actor's Avatar
----

Your character can have different art from its token. This art will also show up in the "Actors" pane and on the sheet. This is true for any Actor, in fact. To add or change an actor's avatar, use the following steps:

1. Open the character sheet
2. Click on the big avatar image
3. Select the image or upload an image (follow steps outlined in :ref:`Choosing an Existing Avatar Image` using the file browser, or the steps in :ref:`Uploading a new Avatar Image`)

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/enchantedimaginativehogget?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

### Adding your Character Token to the Map
----

You can now drag your token onto the map, and it will have the correct settings. If the GM has the map set with darkness (such as nighttime or in a cavern) you will only see a black screen and a warning. Just drag your token onto the map if the GM hasn't done so for you. 

If you want to change these settings on the token for just one map, double-click on the token and adjust the vision under the "token" window. If you want to update the token's settings so you can use it again later, update the prototype token under the Actors pane so it's always set correctly. 

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/impressivedentalcarp?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

The examples here are for Pathfinder 2e, but 1e will have a similar process.

### Editing Your Character Sheet
----

You can edit your character. This can be exported later on to port between Foundry games. However, for my games I do not require a complete character sheet — we use the honor system here. However, there are some useful things you can add. 

#### Hit Points

You can edit hit points to track them in combat. To do so:

1. Open character sheet
2. Add your Level
3. Add your Constitution
3. Add your Ancestry HP
4. Add your Class HP
5. Add your bonus HP and Bonus HP/level (Toughness, etc)
6. Add your Current HP (match the Total HP)
7. You should see a full health bar under your token

  <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/brownterriblebelugawhale?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

##### Adjusting Hit Points

You can adjust the hit points in a variety of ways.

1. Right click on the token
2. Enter the damage or a negative integer under the health bar to take damage. Add a "+" sign to get healed
3. Hit enter
4. The health bar will be updated. This can give players a visual clue about your health without metagaming too much 

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/constantshabbyaruanas?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

##### Initiative Modifier

I like to roll initiatives with a macro that rolls for everyone and sots it — this means it's helpful to add your initiative mod to your sheet.  

1. Select the ability used under Initiative
2. Fill out that part of the sheet
3. Select Proficiency if Perception (left click to increase, right to decrease)
4. Add any bonuses from feats, etc (for example, Battlefield Surveyor for fighter)
5. Close Sheet

!!! attention "Perception for Initiative"
    

    <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/impracticalwellmadeiguana?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

!!! attention "Other Skill for Initiative"
    

    <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/presentrashlacewing?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>


### Rolling Dice
----

To roll dice go to the chat log. It's the bubble on the rightmost side. Then, type your command prefixed by "/roll":

``` py 
   /roll 1d20+14+2
```

You can do very simple macros that combine attack and damage. Here is an example  of a character with a striking flail with crit specialization, and sneak attack:

``` py 
  I attack with my flail to hit AC [[1d20+14]] 
  for [[2d8+4]] slashing damage
  and [[2d6]] sneak if flat-footed
  and prone if crit
```

You could integrate deadly, fatal, and anything else you like here. 

### Macros
----

Macros are useful tools. The above attack and damage example is an example of a macro.

You can edit your own macros on the hotbar. You can also add them from compendiums that you have access to (note that some compendium macros may require you to have your character sheet fully set up). The main goal here is to get you started with fast, simple macros and not to do anything overly complex. Macros are very powerful, and get complex fast!

#### Building a Macro

1. Click on the hotbar. If there's already a macro there, right-click to edit or remove.
2. Name the Macro
3. Enter the macro type ("chat" is the default and works fins for simple macros; "script" is a javascript macro)
4. Select the macro image (there are images available in the default library)
5. Enter the Macro Text
6. Click "Execute Macro" to test
7. Click Save Macro if it works
8. You can use the macro by tapping the number on your keypad or clicking it

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/serpentinelivelyhagfish?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>


#### Using a Compendium Macro

1. Click on  the Compendium area on the right sidebar
2. Scroll down the the Macros section
3. Click on the category. A new window will open.
4. Click on the macro you want to use in order to preview it
5. Drag the macro you want to your hotbar
6. Right-click and edit the macro to your liking, or click on it to execute it



  <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/giganticgreataustraliancattledog?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

The GM may make a variety of compendiums available. I have a default set of simple attack/damage with multiple attack penalties, saves, and perception.

