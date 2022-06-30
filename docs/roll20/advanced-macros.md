# Some Helpful Macros

## Table of Contents

- [Setting up Macros](#setting-up-macros)
- [Without API Scripts](#without-api-scripts)
- [Require API Scripts](#require-api-scripts)

## Setting up Macros

Coming soon!

**Note:** Some of these macros need to be all on one line, so may look pretty bad. Also, some of the formatting is such
that you cannot cut out of the macros in Roll20... you need to edit somewhere else, first.

## Without API Scripts

These are macros that you can run without a Pro account.

- [Token Macros](#token-macros)
    - [Initiative](#initiative)
    - [Magic Missiles](#magic-missiles)
- [GM Macro Bar](#gm-macro-bar)
- [Fancy Macros w/ Rollable Tables](#fancy-macros)

### Token Macros

These macros are created to be helpful for a specific selected token. They are broken down by player vs GM macros, where
the players ones are for any player, adn the GM ones are more typically only used by the GM.

These also are well suited to add to any character's character sheet. 

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

## Require API Scripts

Coming soon!
