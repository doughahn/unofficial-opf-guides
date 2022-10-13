# Working with Paizo Assets

Working with image assets is a core part of a VTT GM's routine. The task is often repetitive; while there are many ways to work with assets, the best solution is whatever is easiest for you — be that automation with lots of features, free websites, or lo-fi assets that just get the job done.

### A note on Size

Many VTTs are used by vision-disabled players. Many VTTs are *also* used by players with slow internet speed. GMs should find a balance between image size (larger is better for low-vision players, who need to zoom), and speed. I try to keep maps under 500kb, and tokens under 300. 

There is no one correct answer… it depends on your group and context; for example, some groups prefer gorgeous high-res maps that can be megabytes in size. Other groups prefer a lo-fi, snappier experience that more closely mimics an in-person tabletop session. 

Talk to your group, ask for feedback, and find out what works for them. 

### A note on Design

**Simpler is better.** Err on the side of simple, clear tokens. A complex and beautiful token is just noise if it is unrecognizable when the map is zoomed out.

**Use more than border colors to designate tokens.** Roll20 and other VTTs have many options for naming tokens, such as numbering tokens. In Play-by-Post / Google Slides, many GMs colorize token borders, and forget their players may have vision disabilities such as colorblindness. Google Slides offers a variety of options at your disposal to achieve clarity such as numbering tokens, using dashed / solid / dotted borders, and making them into shapes. 

**Consistency is Clarity.** Many GMs prefer to use square tokens for enemies, and round tokens for PCs. Whatever your table's preference, maintain consistency throughout your games. Your design preference will become a language of its own. 

## Extracting & Editing Images

All image editing requires unlocking the Paizo PDF. To unlock the PDF, export the pdf to pdf in Preview.app (macOS) or in Foxit reader (Windows)by choosing `File` => `Print` => `PDF`). You now have a new file that you can use for image extraction. 

### Free: Acrobat Reader DC

1. Open the unlocked PDF in Acrobat reader DC
2. Right-Click the image
3. Select `Copy Image`
4. You can now paste the image into any app on your computer (e.g. Paint / Photoshop), or paste into Google Slides

The image may turn out upside-down or with a black background. If that is the case, try one of the batch extraction tools below; these should work better. 

!!! question "Why is there a black background on my image?"
    PDFs don't support images with transparency. Instead publishers like Paizo use two images; one of them is a transparency mask that mimics the desired effect, and the other is the image itself. When you copy an image, sometimes you only get the RGB data and the background therefore comes out black. To fix this you need to get editing software such as Photoshop/Gimp, or use a free tool like the ones below to do the job for you. 


### Subscription: Adobe CC

The benefit of Adobe Creative Cloud is that all the apps can sync up and let you do advanced editing. This is the author's preferred way of working with assets. 

#### Extract the Image with Transparency

1. Open the unlocked PDF in Acrobat Pro
2. Click `Tools` and `Edit PDF`
3. Right-click the image
4. Select `Edit Using` => `Adobe Photoshop`
5. Click `Yes` on the warning window that appears
6. The image with transparency is ready in Photoshop

You can save the image as a PNG, and use it in your VTT of choice. 


<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/TemptingWellmadeBee?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>
  <figcaption>Extracting an image with transparency using Adobe CC products</figcaption>


## Batch Extracting Images 

Batch exporting images is often less useful, as the export will get all art assets (including decorative images, such as those in the margins of pages). However, it can be useful at times. 

### Subscription: Adobe CC

1. Unlock the PDF (export the pdf to pdf in Preview.app (macOS) or `File` => `Print` => `PDF` in Foxit reader)
2. Open the PDF in Acrobat
3. Click `Tools`
4. Click `Export PDF`
5. Click `Image`
6. Click your file type (note alpha will *not* preserved, no matter what)
7. Click `Export all images`
8. Click `Export`
9. Choose the directory if needed
10. Let the software run 

https://gfycat.com/victoriousoccasionalantarcticfurseal

### Free: I ♥ PDF
Sites such as these are free to use, but their performance may not always be reliable. 

1. Unlock the PDF (export the pdf to pdf in Preview.app (macOS) or `File` => `Print` => `PDF` in Foxit reader)
2. Go to [ilovepdf.com](https://www.ilovepdf.com/pdf_to_jpg)
3. Drag the PDF onto the page
4. Click `Extract Images`
5. Click `Convert to JPG`
6. Click `Download all JPG Images` on the screen when ready

## Token Creation

There are several free websites you can use to create tokens; there is no best website. Find one you like. 

- [The Fateful Force](https://thefatefulforce.com/battle-resources/token-creator/) 
- [Token Stamp 2](https://rolladvantage.com/tokenstamp/)
- [Token Tool 2](https://www.rptools.net/2018/07/token-tool-2-0/)
- Google Slides (native with many Play-by-Post games)

### Free: Google Slides with Play-by-Post

If you have an image without transparency and are using Google Slides for your VTT, (for example, batch-extracted images with a white background), you can drag them onto Google slides and edit them to create tokens using the slides [masking tool](https://support.google.com/docs/answer/4600160?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Cmask-an-image-in-google-slides).

1. Drag your image onto the slide
1. Select the image by clicking on it
1. Click the Mask button (it looks like a two right-angle lines intersecting to create a box)
1. The image should now be highlighted, with the corners and edges covered with thick dark lines
1. Drag the lines over the area you want removed from the token (you can also drag the image round behind the masking pane to adjust)
1. Hit `Enter.`
1. If you want a circular token, click on the Masks icon again and select `Shapes` => `Circle`
1. You can add a border and numbers if you want

##### Google Slides token creation
<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/gleefullonglacewing?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>


### Free: Fateful Force

The [Fateful Force VTT Token Maker](https://thefatefulforce.com/battle-resources/token-creator/) is a simple-to-use token creator that has basic options as well as text. 

1. Drag your image onto the canvas
2. Select your border
3. Select your background (note, if your image doesn't have transparency this should match the background of your original art; often this is white [`#fff`])
4. Add text and scale the text if desired. Useful for multiple enemies of the same type. 
5. Download


##### Fateful Force token creation
<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/MediumGraciousKomododragon?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>


###### Square Tokens

To make a square token, just select `None` under "Border Style." This will create a square token without a border for you. 

### Subscription: Adobe Photoshop

Building a token in Photoshop allows you to customize in a variety of ways. You can find a font and style that you want. One of the benefits of Photoshop is *automation.* Building tokens is a repetitive task; the Photoshop Actions pane allows you to save your workflow for future use. 

Here is how to make a token in photoshop. You can use these steps for automation. Note that this is a destructive process, so if you want to save the art make a backup or do less automation by using tools like the Crop tool, but not checking `Delete Cropped pixels.`

1. Add a new layer background: `Layer` => `New Fill Layer` => `Solid Color` => `OK` => enter `fff` in the highlighted text box => `OK`
1. Drag the layer under the current layer
1. Select the `Rectangular Marquee` tool
1. Hold down `Shift` and drag out a square
1. Select `Image` => `Crop` (note this is a *destructive* way of cropping; use the `Crop` tool if you want a destructive way of doing this, but note that it will be much harder to automate)
1. Select the layers in the layers panel
1. Hit `Command` + `Option` + `Shift` + `E` (mac) or `Ctrl` + `Alt` + `Shift` + `E` (Windows) to merge the selected layers
1. Size the new image 
  1. Select `Image` => `Image Size`
  1. Set the resolution to 72 (this is important for automation purposes! If your images are not all the same resolution your strokes and placement will be thrown off)
  1. Set the image size. 400 x 400 px is a good size
1. Right click the top layer (the merged layer)  and select `Blending Options`
1. Click `Stroke`, select `Inside`, and set it to 12 px (or whatever you think looks good). You can change the stroke color to whatever you want, but I think black is simple and best. 
1. Number the token (optional)
  1. Select the text tool, and click inside the image. Enter a number.
  1. Size the text to so looks good, so you can see the number and the art
  1. Change the text color to white (`fff`)
  1. Right click the top layer and select `Blending Options`
  1. Click `Stroke` and this time select `Outside` instead of `Inside,` and it to 6 px (or whatever you think looks good)
  1. Now that you can see the number, adjust the placement, font size, and font to your liking. I like [Taroca](https://fontsgeek.com/fonts/Taroca-Regular) (free) because it matches the 2e rulebooks' heading text. 
  1. Save the image. 
  1. Double-click the number and add another number. 

!!! tip "Copy/Paste into Google Slides to Save Time"
    You can select all and `Copy Merged` (`Edit` => `Copy merged`) and paste directly into Google Slides. There is no need to save your work onto the hard drive. This is a huge time saver for PbP GMs!


##### Building a token by hand in Photoshop
<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/inconsequentialbabyishhectorsdolphin?autoplay=0 frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

##### Round Tokens

1. Add a new layer background: `Layer` => `New Fill Layer` => `Solid Color` => `OK` => enter `fff` in the highlighted text box => `OK`
1. Drag the layer under the current layer
1. Select the `Elliptical Marquee` tool
1. Holding down `Shift,` drag a circle out over the area you want
1. Select the layers in the layers panel
1. Hit `Command` + `Option` + `Shift` + `E` (mac) or `Ctrl` + `Alt` + `Shift` + `E` (Windows) to merge the selected layers
1. Hide the layers below this merged layer by clicking on the eye markers next to those layers
1. Click `Select` => `Select and Mask`
1. Scroll down and under `Output To` click on the dropdown and select `New Layer`
1. Click `OK`
1. Right click the layer and select `Blending Options`
1. Click `Stroke` and add your stroke and color
1. Click `Trim` => `Transparent Pixels`
1. Save or copy to Google Slides

This is also easy to automate (see below), but you need to start with your merged layer if the image has transparency. The author of this guide uses round tokens for PCs and square for NPCs, so it is not a use-case that comes up as often. 

##### Automation

The above work is not very feasible for a busy GM. However, automation is a powerful tool Photoshop users have at their disposal. Repeat the steps above while recording a new action, and you should be able to make this repetitive task a breeze. 

There are a couple "gotchas" to be aware of so your action works with any file:

- While recording, re-name your base layer to something that makes sense. The action's steps will break unless the layers being moved and merged have the same names every time. 
- Size all images the to the same dimensions *and resolution*, and capture that in the action. I set all tokens to a 72 resolution, then I size the image to 400px wide. This keeps stroke and font placement consistent.
- Start your action after a selection is made. You cannot automate selecting the token area very well — that takes a human eye. 

##### An automated workflow 
This workflow does all of the above (size, stroke, stroked numbering) with two clicks, from a selection of transparent artwork.

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/ThriftySentimentalIceblueredtopzebra?autoplay=0'frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

### Removing Backgrounds

Sometimes you may need to remove backgrounds from images in Photoshop. For example, you received flattened assets without transparency. or, perhaps you don't have access to Acrobat but you have access to Photoshop. Luckily, tools like the Magic Eraser make things go quickly. The 

##### Magic Eraser Tool 

Removing background in Photoshop is quite easy using tools like the `Magic Eraser.` This is often the best choice for simple images, or images where speed is your primary goal. 

1. Hide the background layer by clicking the eye in the layers panel
1. Click on the `Magic Eraser` tool
1. Click on the background areas to remove it
1. If too much of the image you want to keep is removed, adjust the `Threshold` (in the top left on your task bar); a Threshold of 15 is a good starting point. 
1. Your image now has transparency. 

##### Quickly removing the background in Photoshop
<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/BigHardtofindBilby?autoplay=0'frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

##### Masking Images

Sometimes a complicated image warrants a a little more effort. This is the case for images with complicated edges, such as creatures with hair or auras. This is when masking comes into play. I do not use this option unless two conditions are met: the creature is narratively important, and the artwork is complex. 

1. Click the `Quick Selection tool`
1. Click the brush at the top to set a lower tolerance (usually something around 10 is good)
1. Select the areas you want to keep
1. Work to refine the edges. If you select too much, use the `Option` (macOS) key or `Alt` key (Windows) to deselect the range. Take as long as you like on refining the selection. This can take anywhere from a few seconds to many minutes, depending on how detailed you wish to be.
1. Click the `Mask` button at the bottom of the Layers pane.
1. Click `Refine`
1. Play with the settings until you are happy with the image. I like to smooth and feather just a little bit, and check off `Decontaminate Colors.`
1. Click `OK.`

##### Masking an image in Photoshop
<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/BrightDeadBrocketdeer?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

## Maps

Maps can be extracted like images. When importing to a VTT like roll20, it is a good idea to first remove partial squares from the edges. This helps the map line up perfectly with the VTT's grid. You can use image editor like Photoshop to crop the image, or a free online editor such as [I love Image](https://www.iloveimg.com/crop-image) to crop your asset. 

After it is cropped, simply count the height and width in squares, and create your canvas in that same size. Everything should line up perfectly. 

### Maps for Roll20

1. Use Preview or photoshop to crop out partial grid suares.
2. Set he canvas in Roll20 the the same height and width, in grid squares.
3. Upload the cropped map and expand it to fill the canvas. Everything should line up. 


### Maps on Google Slides

It is a best practice to use background images for Google Slides, so players can move tokens and create auras or notes without disrupting the gameplay board. Locked backgrounds are also an accessibility need for players with muscular disabilities. 

To avoid skewing, the image must be sized to fit. You can do this with image editing software like Photoshop, or online tools like [croppola](https://croppola.com). 

#### Making 16:9 Maps in Photoshop

1. Start with your image open
1. Select the `Crop` tool
1. In the top right bar, to the right of `Ratio` enter 16, hit `Tab` and enter `9.` This is your aspect ratio
1. The 16:9 crop box should be viewable on the image
1. Resize the image so it covers the area you want 
1. You can drag the image round to reposition it in the crop box
1. Hit enter twice
1. Save the cropped image
1. In Google Slides, right click on your slide and select 1Change background.`
1. Select `Choose Image`
1. Upload your 16:9 image to slides

Note that on Google Slides you can also create 4:4 slides. In that case, replace 16:9 with 4:3 in the instructions above. 

##### Cropping to Aspect Ratio in Photoshop
<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/KindlyFilthyInganue?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>