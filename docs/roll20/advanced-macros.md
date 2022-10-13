# Some Helpful Macros

## Table of Contents

- [Setting up Macros](#setting-up-macros)
- [Without API Scripts](#without-api-scripts)
- [Require API Scripts](#require-api-scripts)

## Setting up Macros

Coming soon!

**Note:** Some of these macros need to be all on one line, so may look pretty bad. Also, some of the formatting is such
that you cannot cut out of the macros in Roll20... you need to edit somewhere else, first. This is especially true if you have embedded html in the macros that you have used HTML escapes on. (such as `&gt;`)

## Without API Scripts

These are macros that you can run without a Pro account.

- [Token Macros](#token-macros)
    - [Initiative](#initiative)
    - [Magic Missiles](#magic-missiles)
- [GM Macro Bar](#gm-macro-bar)
- [DCs by Level](#dc-by-level)
- [Fancy Macros w/ Rollable Tables](#fancy-macros)
- [Skill Checks](#skill-rolls)
- [Secret Skill Rolls](#secret-rolls)

### Token Macros

These macros are created to be helpful for a specific selected token. They are broken down by player vs GM macros, where
the players ones are for any player, adn the GM ones are more typically only used by the GM.

These also are well suited to add to any character's character sheet. 
#### Treat Wounds
This player character token macro will allow the player to choose what proficiency that 
```
@{selected|whispertype} &{template:default} {{charactername=@{selected|character_name}}} {{header=Treat Wounds}} {{Target DC=[[15+(?{Proficiency?|Trained,0|Expert,5|Master,15|Legendary,25})]] }}{{ Medicine Check=[[1d20+@{selected|medicine}]] }} {{ On Success=Heal for [[2d8+(?{Proficiency?|Trained,0|Expert,5|Master,15|Legendary,25})*2]] hit points! }} {{On Critical=Heal for [[4d8+(?{Proficiency?|Trained,0|Expert,5|Master,15|Legendary,25})*2]] hit points! }} {{ On Failure=Wound for [[1d8]] hp damage }}
```

#### Initiative

This player token macro is helpful for those players who forget to select their token before rolling initiative. It will
pull their intiative from their character sheet, roll it as a GM whisper, and add to the tracker.

It should be created as macro, and should have "Show as Token Action" selected, and "Visible to Players" "All Players"

```
/w gm Initiative @{selected|token_name} [[1d20 + @{selected|initiative} + &{tracker} ]]
```

#### Magic Missiles
Do you have a character that likes to use a LOT of magic missiles?
This token macro will let them select how many missiles, and additionally whether the attack is modified by Inspire Courage. 

It will then roll all the missiles, and add up the damage for you.

It should be created as macro, and should have "Show as Token Action" selected, and "Visible to Players" should have 
any character that might want magic missiles selected. 

```
@{selected|whispertype} &{template:rolls}  {{charactername=@{selected|character_name} }} {{header=?{number of missiles?|1|2|3|4|5|6|7|8|9} Magic Missile(s) }} {{info01_name=^{action}}} {{info01=^{1-to-3-actions}}}  {{info02_name=^{cast}}} {{info02=one to three actions (somatic, verbal)}} { {{info04_name=^{range}}} {{info04=120 feet}}  {{info05_name=^{target}}} {{info05=1 creature}}{{info03_name=^{traits}}} {{info03=force, evocation}}  {{roll01_type=damage}} {{roll01_name=damage}} {{roll01=[[ ?{number of missiles?|1|2|3|4|5|6|7|8|9}d4+?{number of missiles?|1|2|3|4|5|6|7|8|9}+?{Inspire Courage?|Yes,1|No,0} ]]}} {{show_action_icon=@{selected|roll_option_action_icon}}} {{action_icon=1-to-3-actions}} {{desc=You send a dart of force streaking toward a creature that you can see. It automatically hits and deals 1d4+1 force damage. For each additional action you use when Casting the Spell, increase the number of missiles you shoot by one, to a maximum of three missiles for 3 actions. You choose the target for each missile individually. If you shoot more than one missile at the same target, combine the damage before applying bonuses or penalties to damage, resistances, weaknesses, and so forth.}}
```

### GM Macro Bar

#### DC By Level

This macro will quickly allow a GM to see the standard DC for an action of a given level. This is likely going to be one
the GM adds to their macro quickbar.

```
?{What Level?| 0,Lv0 DC14| 1,Lv1 DC15| 2,Lv2 DC16| 3,Lv3 DC18| 
4,Lv4 DC19| 5,Lv5 DC20| 6,Lv6 DC22| 7,Lv7 DC23| 8,Lv8 DC24|
9,Lv9 DC26| 10,Lv10 DC27| 11,Lv11 DC28| 12,Lv12 DC30| 13,Lv13 DC31|
14,Lv14 DC32| 15,Lv15 DC34| 16,Lv16 DC35| 17,Lv17 DC36| 18,Lv18 DC38| 
19,Lv19 DC39| 20,Lv20 DC40| 21,Lv21 DC42| 22,Lv22 DC44| 23,Lv23 DC46| 
24,Lv24 DC48| 25,Lv25 DC50}
```

#### Status Check

This is a roll template, so formatting is very important -- it must be all on one line It will inspect the tokens, and
show the hit points (max and current) for each character, and then show how many hit points the party is down as a
whole.

For these, it is suggested to add the one for the correct number of players to the GM's quick macro bar.

For 5 players:

```
&{template:default} {{name=How hurt are we?}} {{@{Target|T0|token_name} down [[@{Target|T0|hit_points|max}-@{Target|T0|hit_points}]] out of @{Target|T0|hit_points|max}}} {{@{Target|T1|token_name} down [[@{Target|T1|hit_points|max}-@{Target|T1|hit_points}]] out of @{Target|T1|hit_points|max}}} {{@{Target|T2|token_name} down [[@{Target|T2|hit_points|max}-@{Target|T2|hit_points}]] out of @{Target|T2|hit_points|max}}} {{@{Target|T3|token_name} down [[@{Target|T3|hit_points|max}-@{Target|T3|hit_points}]] out of @{Target|T3|hit_points|max}}} {{@{Target|T4|token_name} down [[@{Target|T4|hit_points|max}-@{Target|T4|hit_points}]] out of @{Target|T4|hit_points|max}}} {{Total [[@{Target|T0|hit_points|max}-@{Target|T0|hit_points}+@{Target|T1|hit_points|max}-@{Target|T1|hit_points}+@{Target|T2|hit_points|max}-@{Target|T2|hit_points}+@{Target|T3|hit_points|max}-@{Target|T3|hit_points}+@{Target|T4|hit_points|max}-@{Target|T4|hit_points}]]}}
```

For 6 players:

```
&{template:default} {{name=How hurt are we?}} {{@{Target|T0|token_name} down [[@{Target|T0|hit_points|max}-@{Target|T0|hit_points}]] out of @{Target|T0|hit_points|max}}} {{@{Target|T1|token_name} down [[@{Target|T1|hit_points|max}-@{Target|T1|hit_points}]] out of @{Target|T1|hit_points|max}}} {{@{Target|T2|token_name} down [[@{Target|T2|hit_points|max}-@{Target|T2|hit_points}]] out of @{Target|T2|hit_points|max}}} {{@{Target|T3|token_name} down [[@{Target|T3|hit_points|max}-@{Target|T3|hit_points}]] out of @{Target|T3|hit_points|max}}} {{@{Target|T4|token_name} down [[@{Target|T4|hit_points|max}-@{Target|T4|hit_points}]] out of @{Target|T4|hit_points|max}}} {{@{Target|T5|token_name} down [[@{Target|T5|hit_points|max}-@{Target|T5|hit_points}]] out of @{Target|T5|hit_points|max}}} {{Total [[@{Target|T0|hit_points|max}-@{Target|T0|hit_points}+@{Target|T1|hit_points|max}-@{Target|T1|hit_points}+@{Target|T2|hit_points|max}-@{Target|T2|hit_points}+@{Target|T3|hit_points|max}-@{Target|T3|hit_points}+@{Target|T4|hit_points|max}-@{Target|T4|hit_points}+@{Target|T5|hit_points|max}-@{Target|T5|hit_points}]]}}
```
### Skill Rolls
This is pretty huge, but also has links to 2e.aonprd.net for the descriptions!
```
@{selected|whispertype}&{template:rolls} {{charactername=}}{{header=Skill Check}}{{subheader=@{selected|token_name} uses:}} ?{Which skill do you want to use?| 
Acrobatics,{{desc=Acrobatics [[1d20+@{selected|ACROBATICS}]]}}{{info01_name=Acrobatics (Dex)}}{{info01=Acrobatics measures your ability to perform tasks requiring coordination and grace. When you use the Escape basic action, you can use your Acrobatics modifier instead of your unarmed attack modifier.}}{{info02_name=can be used to}}{{info02=[Balance](https://2e.aonprd.com/Actions.aspx?ID=28 ) ▪️ [Tumble Through](https://2e.aonprd.com/Actions.aspx?ID=29) ▪️ [Maneuver in Flight](https://2e.aonprd.com/Actions.aspx?ID=30) ▪️ [Squeeze](https://2e.aonprd.com/Actions.aspx?ID=31)}}|
Arcana,{{info01=Arcana}}{{info02=Arcana measures how much you know about arcane magic and creatures. Even if you’re untrained, you can Recall Knowledge.}}{{desc= Arcana[[1d20+@{selected|ARCANA}]]}}{{info01_name=Arcana (Int)}}{{info01=Arcana measures how much you know about arcane magic and creatures. Even if you’re untrained, you can Recall Knowledge.}}{{info02_name=can be used to}}{{info02=[Recall Knowledge](https://2e.aonprd.com/Skills.aspx?ID=5&General=true) ▪️ [Decipher Writing](https://2e.aonprd.com/Skills.aspx?ID=1&General=true) ▪️ [Identify Magic](https://2e.aonprd.com/Skills.aspx?ID=3&General=true ) ▪️ [Learn a Spell](https://2e.aonprd.com/Skills.aspx?ID=4&General=true ) ▪️ [Borrow an Arcane Spell (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=32 )}}| 
Athletics,{{desc= Athletics[[1d20+@{selected|ATHLETICS}]]}}{{info01_name=Athletics (Str)}}{{info01=Athletics allows you to perform deeds of physical prowess. When you use the Escape basic action, you can use your Athletics modifier instead of your unarmed attack modifier.}}{{info02_name=can be used to}}{{info02=[Climb](https://2e.aonprd.com/Actions.aspx?ID=33 ) ▪️ [Force Open](https://2e.aonprd.com/Actions.aspx?ID=34 ) ▪️ [Grapple](https://2e.aonprd.com/Actions.aspx?ID=35 ) ▪️ [High Jump](https://2e.aonprd.com/Actions.aspx?ID=36 ) ▪️ [Long Jump](https://2e.aonprd.com/Actions.aspx?ID=37 ) ▪️ [Shove](https://2e.aonprd.com/Actions.aspx?ID=38 ) ▪️ [Swim](https://2e.aonprd.com/Actions.aspx?ID=39 ) ▪️ [Trip](https://2e.aonprd.com/Actions.aspx?ID=40 ) ▪️ [Disarm (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=41 )}}| 
Crafting,{{desc= Crafting[[1d20+@{selected|CRAFTING}]]}}{{info01_name=Crafting (Int)}}{{info01=You can use this skill to create, understand, and repair items. Even if you’re untrained, you can Recall Knowledge.}}{{info02_name=can be used to}}{{info02=[Repair](https://2e.aonprd.com/Actions.aspx?ID=42 ) ▪️ [Craft (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=43 ) ▪️ [Identify Alchemy (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=44 )}}| 
Deception,{{desc= Deception[[1d20+@{selected|DECEPTION}]]}}{{info01_name=Deception (Cha)}}{{info01=You can trick and mislead others using disguises, lies, and other forms of subterfuge. }}{{info02_name=can be used to}}{{info02=[Create a Diversion](https://2e.aonprd.com/Actions.aspx?ID=45 ) ▪️ [Impersonate](https://2e.aonprd.com/Actions.aspx?ID=46 ) ▪️ [Lie](https://2e.aonprd.com/Actions.aspx?ID=47 ) ▪️ [Feint (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=48 )}}| 
Diplomacy,{{desc= Diplomacy[[1d20+@{selected|DIPLOMACY}]]}}{{info01_name=Diplomacy (Cha)}}{{info01=You influence others through negotiation and flattery.}}{{info02_name=can be used to}}{{info02=[Gather Information](https://2e.aonprd.com/Actions.aspx?ID=49 ) ▪️ [Make an Impression](https://2e.aonprd.com/Actions.aspx?ID=50 ) ▪️ [Request](https://2e.aonprd.com/Actions.aspx?ID=51 )}}| 
Intimidation,{{desc= Intimidation[[1d20+@{selected|INTIMIDATION}]]}}{{info01_name=Intimidation (Cha)}}{{info01=You bend others to your will using threats.}}{{info02_name=can be used to}}{{info02=[Coerce](https://2e.aonprd.com/Actions.aspx?ID=52 ) ▪️ [Demoralize](https://2e.aonprd.com/Actions.aspx?ID=53 )}}| 
Medicine,{{desc= Medicine[[1d20+@{selected|MEDICINE}]]}}{{info01_name=Medicine (Wis)}}{{info01=You can patch up wounds and help people recover from diseases and poisons. Even if you’re untrained in Medicine, you can use it to Recall Knowledge.}}{{info02_name=can be used to}}{{info02=[Administer First Aid](https://2e.aonprd.com/Actions.aspx?ID=54 ) ▪️ [Treat Disease (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=55 ) ▪️ [Treat Poison (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=56 ) ▪️ [Treat Wounds (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=57 )}}| 
Nature,{{desc= Nature[[1d20+@{selected|NATURE}]]}}{{info01_name=Nature (Wis)}}{{info01=You know a great deal about the natural world, and you command and train animals and magical beasts. Even if you’re untrained in Nature, you can use it to Recall Knowledge.}}{{info02_name=can be used to}}{{info02=[Recall Knowledge](https://2e.aonprd.com/Skills.aspx?ID=5&General=true ) ▪️ [Command an Animal](https://2e.aonprd.com/Actions.aspx?ID=58 ) ▪️ [Identify Magic (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=3&General=true ) ▪️ [Learn a Spell (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=4&General=true )}}| 
Occultism,{{desc=Occultism[[1d20+@{selected|OCCULTISM}]]}}{{info01_name=Occultism (Int)}}{{info01=You know a great deal about ancient philosophies, esoteric lore, obscure mysticism, and supernatural creatures. Even if you’re untrained in Occultism, you can use it to Recall Knowledge.}}{{info02_name=can be used to}}{{info02=[Recall Knowledge](https://2e.aonprd.com/Skills.aspx?ID=5&General=true ) ▪️ [Decipher Writing (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=1&General=true ) ▪️ [Identify Magic (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=3&General=true ) ▪️ [Learn a Spell (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=4&General=true )}}|
Performance,{{desc=Performance[[1d20+@{selected|PERFORMANCE}]]}}{{info01_name=Performance (Cha)}}{{info01=You are skilled at a form of performance, using your talents to impress a crowd or make a living.}}{{info02_name=can be used to}}{{info02=[Perform](https://2e.aonprd.com/Actions.aspx?ID=59 )}}|
Religion,{{desc=Religion[[1d20+@{selected|RELIGION}]]}}{{info01_name=Religion (Wis)}}{{info01=The secrets of deities, dogma, faith, and the realms of divine creatures both sublime and sinister are open to you. You also understand how magic works, though your training imparts a religious slant to that knowledge. Even if you’re untrained in Religion, you can use it to Recall Knowledge.}}{{info02_name=can be used to}}{{info02=[Recall Knowledge](https://2e.aonprd.com/Skills.aspx?ID=5&General=true ) ▪️ [Decipher Writing (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=1&General=true ) ▪️ [Identify Magic (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=3&General=true ) ▪️ [Learn a Spell (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=4&General=true )}}|
Society,{{desc=Society[[1d20+@{selected|SOCIETY}]]}}{{info01_name=Society (Int)}}{{info01=You understand the people and systems that make civilization run, and you know the historical events that make societies what they are today. Further, you can use that knowledge to navigate the complex physical, societal, and economic workings of settlements. Even if you’re untrained in Society, you can use it for Recall Knowledge and Subsist.}}{{info02_name=can be used to}}{{info02=[Recall Knowledge](https://2e.aonprd.com/Skills.aspx?ID=5&General=true ) ▪️ [Subsist](https://2e.aonprd.com/Skills.aspx?ID=6&General=true ) ▪️ [Decipher Writing (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=1&General=true ) ▪️ [Create Forgery (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=60 )}}| 
Stealth,{{desc= Stealth[[1d20+@{selected|STEALTH}]]}}{{info01_name=Stealth (Dex)}}{{info01=You are skilled at avoiding detection, allowing you to slip past foes, hide, or conceal an item.  }}{{info02_name=can be used to}}{{info02=[Conceal an Object](https://2e.aonprd.com/Actions.aspx?ID=61 ) ▪️ [Hide](https://2e.aonprd.com/Actions.aspx?ID=62 ) ▪️ [Sneak](https://2e.aonprd.com/Actions.aspx?ID=63 )}}| 
Survival,{{desc= Survival[[1d20+@{selected|SURVIVAL}]]}}{{info01_name=Survival (Wis)}}{{info01=You are adept at living in the wilderness, foraging for food and building shelter, and with training you discover the secrets of tracking and hiding your trail. Even if you’re untrained, you can still use Survival to Subsist.}}{{info02_name=can be used to}}{{info02=[Subsist](https://2e.aonprd.com/Skills.aspx?ID=6&General=true ) ▪️ [Sense Direction](https://2e.aonprd.com/Actions.aspx?ID=64 ) ▪️ [Cover Tracks (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=65 ) ▪️ [Track (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=66 )}}| 
Thievery,{{desc= Thievery[[1d20+@{selected|THIEVERY}]]}}{{info01_name=Thievery (Dex)}}{{info01=You are trained in a particular set of skills favored by thieves and miscreants.}}{{info02_name=can be used to}}{{info02=[Palm an Object](https://2e.aonprd.com/Actions.aspx?ID=67 ) ▪️ [Steal](https://2e.aonprd.com/Actions.aspx?ID=68 ) ▪️ [Disable Device (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=69 ) ▪️ [Pick a Lock (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=70 )}}}

```

### Secret Rolls
This is pretty huge, but also has links to 2e.aonprd.net for the descriptions!
```
/w GM &{template:rolls} {{charactername=}}{{header=Skill Check}}{{subheader=@{selected|token_name} uses:}} ?{Which skill do you want to use?| 
Acrobatics,{{desc=Acrobatics [[1d20+@{selected|ACROBATICS}]]}}{{info01_name=Acrobatics (Dex)}}{{info01=Acrobatics measures your ability to perform tasks requiring coordination and grace. When you use the Escape basic action, you can use your Acrobatics modifier instead of your unarmed attack modifier.}}{{info02_name=can be used to}}{{info02=[Balance](https://2e.aonprd.com/Actions.aspx?ID=28 ) ▪️ [Tumble Through](https://2e.aonprd.com/Actions.aspx?ID=29) ▪️ [Maneuver in Flight](https://2e.aonprd.com/Actions.aspx?ID=30) ▪️ [Squeeze](https://2e.aonprd.com/Actions.aspx?ID=31)}}|
Arcana,{{info01=Arcana}}{{info02=Arcana measures how much you know about arcane magic and creatures. Even if you’re untrained, you can Recall Knowledge.}}{{desc= Arcana[[1d20+@{selected|ARCANA}]]}}{{info01_name=Arcana (Int)}}{{info01=Arcana measures how much you know about arcane magic and creatures. Even if you’re untrained, you can Recall Knowledge.}}{{info02_name=can be used to}}{{info02=[Recall Knowledge](https://2e.aonprd.com/Skills.aspx?ID=5&General=true) ▪️ [Decipher Writing](https://2e.aonprd.com/Skills.aspx?ID=1&General=true) ▪️ [Identify Magic](https://2e.aonprd.com/Skills.aspx?ID=3&General=true ) ▪️ [Learn a Spell](https://2e.aonprd.com/Skills.aspx?ID=4&General=true ) ▪️ [Borrow an Arcane Spell (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=32 )}}| 
Athletics,{{desc= Athletics[[1d20+@{selected|ATHLETICS}]]}}{{info01_name=Athletics (Str)}}{{info01=Athletics allows you to perform deeds of physical prowess. When you use the Escape basic action, you can use your Athletics modifier instead of your unarmed attack modifier.}}{{info02_name=can be used to}}{{info02=[Climb](https://2e.aonprd.com/Actions.aspx?ID=33 ) ▪️ [Force Open](https://2e.aonprd.com/Actions.aspx?ID=34 ) ▪️ [Grapple](https://2e.aonprd.com/Actions.aspx?ID=35 ) ▪️ [High Jump](https://2e.aonprd.com/Actions.aspx?ID=36 ) ▪️ [Long Jump](https://2e.aonprd.com/Actions.aspx?ID=37 ) ▪️ [Shove](https://2e.aonprd.com/Actions.aspx?ID=38 ) ▪️ [Swim](https://2e.aonprd.com/Actions.aspx?ID=39 ) ▪️ [Trip](https://2e.aonprd.com/Actions.aspx?ID=40 ) ▪️ [Disarm (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=41 )}}| 
Crafting,{{desc= Crafting[[1d20+@{selected|CRAFTING}]]}}{{info01_name=Crafting (Int)}}{{info01=You can use this skill to create, understand, and repair items. Even if you’re untrained, you can Recall Knowledge.}}{{info02_name=can be used to}}{{info02=[Repair](https://2e.aonprd.com/Actions.aspx?ID=42 ) ▪️ [Craft (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=43 ) ▪️ [Identify Alchemy (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=44 )}}| 
Deception,{{desc= Deception[[1d20+@{selected|DECEPTION}]]}}{{info01_name=Deception (Cha)}}{{info01=You can trick and mislead others using disguises, lies, and other forms of subterfuge. }}{{info02_name=can be used to}}{{info02=[Create a Diversion](https://2e.aonprd.com/Actions.aspx?ID=45 ) ▪️ [Impersonate](https://2e.aonprd.com/Actions.aspx?ID=46 ) ▪️ [Lie](https://2e.aonprd.com/Actions.aspx?ID=47 ) ▪️ [Feint (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=48 )}}| 
Diplomacy,{{desc= Diplomacy[[1d20+@{selected|DIPLOMACY}]]}}{{info01_name=Diplomacy (Cha)}}{{info01=You influence others through negotiation and flattery.}}{{info02_name=can be used to}}{{info02=[Gather Information](https://2e.aonprd.com/Actions.aspx?ID=49 ) ▪️ [Make an Impression](https://2e.aonprd.com/Actions.aspx?ID=50 ) ▪️ [Request](https://2e.aonprd.com/Actions.aspx?ID=51 )}}| 
Intimidation,{{desc= Intimidation[[1d20+@{selected|INTIMIDATION}]]}}{{info01_name=Intimidation (Cha)}}{{info01=You bend others to your will using threats.}}{{info02_name=can be used to}}{{info02=[Coerce](https://2e.aonprd.com/Actions.aspx?ID=52 ) ▪️ [Demoralize](https://2e.aonprd.com/Actions.aspx?ID=53 )}}| 
Medicine,{{desc= Medicine[[1d20+@{selected|MEDICINE}]]}}{{info01_name=Medicine (Wis)}}{{info01=You can patch up wounds and help people recover from diseases and poisons. Even if you’re untrained in Medicine, you can use it to Recall Knowledge.}}{{info02_name=can be used to}}{{info02=[Administer First Aid](https://2e.aonprd.com/Actions.aspx?ID=54 ) ▪️ [Treat Disease (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=55 ) ▪️ [Treat Poison (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=56 ) ▪️ [Treat Wounds (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=57 )}}| 
Nature,{{desc= Nature[[1d20+@{selected|NATURE}]]}}{{info01_name=Nature (Wis)}}{{info01=You know a great deal about the natural world, and you command and train animals and magical beasts. Even if you’re untrained in Nature, you can use it to Recall Knowledge.}}{{info02_name=can be used to}}{{info02=[Recall Knowledge](https://2e.aonprd.com/Skills.aspx?ID=5&General=true ) ▪️ [Command an Animal](https://2e.aonprd.com/Actions.aspx?ID=58 ) ▪️ [Identify Magic (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=3&General=true ) ▪️ [Learn a Spell (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=4&General=true )}}| 
Occultism,{{desc=Occultism[[1d20+@{selected|OCCULTISM}]]}}{{info01_name=Occultism (Int)}}{{info01=You know a great deal about ancient philosophies, esoteric lore, obscure mysticism, and supernatural creatures. Even if you’re untrained in Occultism, you can use it to Recall Knowledge.}}{{info02_name=can be used to}}{{info02=[Recall Knowledge](https://2e.aonprd.com/Skills.aspx?ID=5&General=true ) ▪️ [Decipher Writing (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=1&General=true ) ▪️ [Identify Magic (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=3&General=true ) ▪️ [Learn a Spell (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=4&General=true )}}|
Performance,{{desc=Performance[[1d20+@{selected|PERFORMANCE}]]}}{{info01_name=Performance (Cha)}}{{info01=You are skilled at a form of performance, using your talents to impress a crowd or make a living.}}{{info02_name=can be used to}}{{info02=[Perform](https://2e.aonprd.com/Actions.aspx?ID=59 )}}|
Religion,{{desc=Religion[[1d20+@{selected|RELIGION}]]}}{{info01_name=Religion (Wis)}}{{info01=The secrets of deities, dogma, faith, and the realms of divine creatures both sublime and sinister are open to you. You also understand how magic works, though your training imparts a religious slant to that knowledge. Even if you’re untrained in Religion, you can use it to Recall Knowledge.}}{{info02_name=can be used to}}{{info02=[Recall Knowledge](https://2e.aonprd.com/Skills.aspx?ID=5&General=true ) ▪️ [Decipher Writing (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=1&General=true ) ▪️ [Identify Magic (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=3&General=true ) ▪️ [Learn a Spell (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=4&General=true )}}|
Society,{{desc=Society[[1d20+@{selected|SOCIETY}]]}}{{info01_name=Society (Int)}}{{info01=You understand the people and systems that make civilization run, and you know the historical events that make societies what they are today. Further, you can use that knowledge to navigate the complex physical, societal, and economic workings of settlements. Even if you’re untrained in Society, you can use it for Recall Knowledge and Subsist.}}{{info02_name=can be used to}}{{info02=[Recall Knowledge](https://2e.aonprd.com/Skills.aspx?ID=5&General=true ) ▪️ [Subsist](https://2e.aonprd.com/Skills.aspx?ID=6&General=true ) ▪️ [Decipher Writing (Trained Only)](https://2e.aonprd.com/Skills.aspx?ID=1&General=true ) ▪️ [Create Forgery (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=60 )}}| 
Stealth,{{desc= Stealth[[1d20+@{selected|STEALTH}]]}}{{info01_name=Stealth (Dex)}}{{info01=You are skilled at avoiding detection, allowing you to slip past foes, hide, or conceal an item.  }}{{info02_name=can be used to}}{{info02=[Conceal an Object](https://2e.aonprd.com/Actions.aspx?ID=61 ) ▪️ [Hide](https://2e.aonprd.com/Actions.aspx?ID=62 ) ▪️ [Sneak](https://2e.aonprd.com/Actions.aspx?ID=63 )}}| 
Survival,{{desc= Survival[[1d20+@{selected|SURVIVAL}]]}}{{info01_name=Survival (Wis)}}{{info01=You are adept at living in the wilderness, foraging for food and building shelter, and with training you discover the secrets of tracking and hiding your trail. Even if you’re untrained, you can still use Survival to Subsist.}}{{info02_name=can be used to}}{{info02=[Subsist](https://2e.aonprd.com/Skills.aspx?ID=6&General=true ) ▪️ [Sense Direction](https://2e.aonprd.com/Actions.aspx?ID=64 ) ▪️ [Cover Tracks (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=65 ) ▪️ [Track (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=66 )}}| 
Thievery,{{desc= Thievery[[1d20+@{selected|THIEVERY}]]}}{{info01_name=Thievery (Dex)}}{{info01=You are trained in a particular set of skills favored by thieves and miscreants.}}{{info02_name=can be used to}}{{info02=[Palm an Object](https://2e.aonprd.com/Actions.aspx?ID=67 ) ▪️ [Steal](https://2e.aonprd.com/Actions.aspx?ID=68 ) ▪️ [Disable Device (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=69 ) ▪️ [Pick a Lock (Trained Only)](https://2e.aonprd.com/Actions.aspx?ID=70 )}}}


```

## Require API Scripts

Coming soon!
