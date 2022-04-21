# Virtual Tabletops

Since the pandemic, many players have transitioned to Virtual Tabletop games. The term "Virtual Tabletop" is often abbreviated as "VTT." This guide will provide an overview of the most popular VTTs, as well as general considerations. 

## Which VTT is Best for Us?

Note the question isn't "Which VTT is right for **me** — it's **us.** Choosing a VTT should be a group endeavor whenever possible, as it will impact everyone's enjoyment of the game. For online gamers, the VTT choice can an output of [Session 0](https://slyflourish.com/running_session_zeros.html). 

Campaigns where the VTT is chosen ahead of time (often due to GM preference) should put that up-front in their recruiting literature, letting players decide. An example of this are one-off Pathfinder or Starfinder scenarios that are open to the public for signup; and players are free to attend a different game if they cannot use the GM's platform of choice. 

### Google Slides
----
<figure markdown>
![Google Slides Screenshot](https://gmdoug.sfo3.digitaloceanspaces.com/vtt-slides.jpg){ loading=lazy }
<figcaption>A Google Slides map. Note the initiative tracker template added by hand by the GM.</figcaption>
</figure>

Google slides can be used as a bare-bones VTT. Essentially, the GM creates a set of slides with backgrounds set to the map, and allows anyone to edit it/ Players create tokens for their PCs and move them around on the map, rolling dice at their table. 

#### Cost
Google Slides is free to use; the GM should own a Google Account to edit the slides. In addition, the group needs to set up some kind of voice or VTT, so a Discord server may need to be acquired. 

#### Pros, Cons, Audience
Google Slides can be a fast way to get a VTT off the ground, and it's used by the [play-by-post.md](play by post) community, but it lacks almost al the features modern players tend to expect when it comes to a VTT. Though free, users need to have some kind of voice setup such as a discord server. Finally, users with muscular or vision disabilities may have difficulty interacting with the slides. 

!!! success "Pros"
    - Quickly set up tables
    - No experience needed to use
    - Very old-school/minimalist feeling
    - Free
    - Works on all browsers and devices

!!! failure "Cons"
    - Editing is a slower process than other VTTs
    - Lack of features such as initiative trackers can slow down games
    - Players and GMs need to trust one another as dice are rolled off-screen
    - Poor support for users with disabilities (can be mitigated by GM, but it takes extra work such as fitting backgrounds to slides)

=== ":material-bookmark-outline: Who Will Love It"

    - Users who also play on play-by-post
    - Users who want simple technology
    - Users who want old-school games
    - Users looking to occasionally supplement their in-person gaming with a "minimum viable product"

=== ":material-bookmark-outline: Who Will Hate It"
    
    - Users who want full-featured VTTs
    - Users who are bad at doing math with physical dice
    - GMs who don't trust their players (and vice versa)

### Roll20
----

<figure markdown>
![Roll20 Screenshot](https://gmdoug.sfo3.digitaloceanspaces.com/vtts-roll20.jpg){ loading=lazy }
<figcaption>Combat in Roll20.</figcaption>
</figure>

Roll20 is the most popular VTT; it offers standard tools and is free. However, many users have moved away from Roll20 because of its bugs and slower development cycles. In addition, the Roll20 subscription model is essentially required in many cases — especially for GMs who wish to use their API. 

That said, Roll20 is still the most popular option out there as it's free to start playing and packed with features that are now expected in many VTTs.

#### Cost
Roll20 has a tiered subscription model. While it tours a free-to-play system, active GMs will run out of space quickly. For Organized Play, access to the Character Vault for portability between games helps many players (but is not required). 

{{ read_csv('roll20-costs.csv') }}

#### Pros, Cons, Audience
Roll20's entry floor lower than other VTTs, but so is the ceiling. It's a great fit for GMs who want a basic VTT, have a budget, and do not want to tinker with port forwarding, automation, or server creation.

!!! success "Pros"
    - Core is stable and works well, even on lower-end computers
    - Users don't need to be tech-savvy 
    - Community made sheets for many games
    - Reasonable subscription price
    - Partnerships with Paizo to put adventures on marketplace
    - More accessible for disabled users than most other VTTs
    - Most portability of standard VTTs qith the character vault (subscription required)

It can be challenging for users intimidated by technology or on a limited setup. 

!!! failure "Cons"
    - Slow development cycle for new features and requests
    - Features often don't work as intended, such as uploading and asset management
    - API only avialable from the top-tier subscription
    - Subscription model makes exporting your own content difficult
    - Lighting effects and animations are not optimized from a code perspective
    - Content is not free (and rather expensive), compared to Foundry where it's mostly free so long as you own the PDF

----

=== ":material-bookmark-outline: Who Will Love It"

    - GMs who want a VTT that offers the basics, with a lower learning curve
    - Players who want complex macros and dice syntax
    - Users who do not have nice computers
    - Users using screen readers (paired with GMs putting in the extra work to format text correctly)
    - People with a budget to buy first-party material on the marketplace
    - Users playing indie RPGs

=== ":material-bookmark-outline: Who Will Hate It"

    - Users who want something simple
    - Users who demand an attentive development cycle
    - Users who want easy-to-set-up animations and dynamic lighting
    - Users who want a sleek UI

### Foundry
----
<figure markdown>
![Foundry Screenshot](https://gmdoug.sfo3.digitaloceanspaces.com/vtts-foundry.jpg){ loading=lazy }
<figcaption>The Foundry UI.</figcaption>
</figure>

Foundry is a standalone, self-hosted application that uses modern web technologies and has a large community of developers.

#### Cost
The Foundry license is a $50 one-time license for the GM; they can then invite players to their server. While Foundry is touted as a low-cost solution, keep in mind there may be other costs on top of this. A self-hosted Foundry setup requires the host to let others directly connect to their computer while the game is running, which can expose the user to security risks as well as technical challenges. It is a good idea to purchase strong antivirus software, a new and up-to-date modem, etc. 

{{ read_csv('foundry-costs.csv') }}

#### Pros, Cons, Audience
Foundry is a great fit for a group of people who are versed in tech and have decent desktop computers. 

!!! success "Pros"
    - One-time software license for GM only
    - Powerful and customizable
    - Rich plugin ecosystem
    - Walls/lighting are super fast and intuitive to set up
    - More intuitive UX than most other VTTs
    - Free content for PDF owners: all rulebooks and APs/Modules ready-to-run
    - Players who want complex macros and dice syntax
    - Constant updates from an active developer community

It can be challenging for users intimidated by technology or on a limited setup. 

!!! failure "Cons"
    - Requires a fast computer with a large screen; the system requirements are more aligned with a computer game than a VTT 
    - Only works on Chrome, Firefox, Opera, or Edge with hardware acceleration enabled
    - Technical / DevOps skills are required for setup and maintenance, or a monthly subscription with variable rates that can get expensive
    - Accessibility is lacking for screen readers and colorblind players
    - Lack of native portability for PCs makes running games in Organized Play difficult
    - Constant updates mean the GM needs to keep their server and plugins maintained and can sometimes cause issues


=== ":material-bookmark-outline: Who Will Love It"

    - GMs who are interested in web/server technology
    - A group of people with gaming computers
    - Users who want to tinker with tons of options and features
    - GMs who want to quickly import official content, for free

=== ":material-bookmark-outline: Who Will Hate It"
    
    - Users who want something simple
    - GMs who aren't comfortable with web technology
    - GMs who don't want to tinker or futz with the details
    - Users who do not have nice computers
    - Users with disabilities

### Fantasy Grounds
----
<figure markdown>
![Fantasy Grounds Screenshot](https://gmdoug.sfo3.digitaloceanspaces.com/vtt-fg.jpg){ loading=lazy }
<figcaption>The Fantasy Grounds UI. (source: Rise of the Runelords Anniversary Edition product page)</figcaption>
</figure>

Fantasy Grounds is almost 20 years old, and has a loyal following. It offers extensive automation, but is also rather expensive. 

#### Cost
Fantasy Grounds is feature-rich, and users pay for that. unlike other VTTs, Fantasy Grounds is set up in such a way that all users need to have a subscription or license to participate. The GM can, however, purchase Fantasy Grounds Unlimited and let players play for free (they still need Fantasy Grounds accounts and demo licenses of the software).

{{ read_csv('fgu-costs.csv') }}

#### Pros, Cons, Audience
Fantasy Grounds is an excellent choice for players who enjoy automation and enjoy the old-school UI.

!!! success "Pros"
    - Tons of features
    - Automation galore
    - Native 3-D Dice
    - One-time purchase option
    - Developers are actively fixing bugs and adding features
    - Established and active community
    - Offers official adventures for Pathfinder

!!! failure "Cons"
    - More expensive than other options, and players need to have a demo or license
    - Dated UI with lots of popup windows
    - Automation can get in the way of homebrew
    - Fewer character sheets than other systems

=== ":material-bookmark-outline: Who Will Love It"

    - GMs who want lots of automation for crunchy games like Pathfinder
    - Users who want to own the software and the games
    - Users who are invested in taking their time to really master a powerful system

=== ":material-bookmark-outline: Who Will Hate It"
    
    - Users who want something simple
    - Users on small screens
    - Users constrained by cost
    - Users playing indie RPGs

### Google Slides
----
<figure markdown>
![Google Slides Screenshot](https://gmdoug.sfo3.digitaloceanspaces.com/vtt-slides.jpg){ loading=lazy }
<figcaption>A Google Slides map. Note the initiative tracker template added by hand by the GM.</figcaption>
</figure>

Google slides can be used as a bare-bones VTT. Essentially, the GM creates a set of slides with backgrounds set to the map, and allows anyone to edit it/ Players create tokens for their PCs and move them around on the map, rolling dice at their table. 

#### Cost
Google Slides is free to use; the GM should own a Google Account to edit the slides. In addition, the group needs to set up some kind of voice or VTT, so a Discord server may need to be acquired. 

#### Pros, Cons, Audience
Google Slides can be a fast way to get a VTT off the ground, and it's used by the [play-by-post.md](play by post) community, but it lacks almost al the features modern players tend to expect when it comes to a VTT. Though free, users need to have some kind of voice setup such as a discord server. Finally, users with muscular or vision disabilities may have difficulty interacting with the slides. 

!!! success "Pros"
    - Quickly set up tables
    - No experience needed to use
    - Very old-school/minimalist feeling
    - Free
    - Works on all browsers and devices

!!! failure "Cons"
    - Editing is a slower process than other VTTs
    - Lack of features such as initiative trackers can slow down games
    - Players and GMs need to trust one another as dice are rolled off-screen
    - Poor support for users with disabilities (can be mitigated by GM, but it takes extra work such as fitting backgrounds to slides)

=== ":material-bookmark-outline: Who Will Love It"

    - Users who also play on play-by-post
    - Users who want simple technology
    - Users who want old-school games
    - Users looking to occasionally supplement their in-person gaming with a "minimum viable product"

=== ":material-bookmark-outline: Who Will Hate It"
    
    - Users who want full-featured VTTs
    - Users who are bad at doing math with physical dice
    - GMs who don't trust their players (and vice versa)

