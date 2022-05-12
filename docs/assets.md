# Working with Paizo Assets

Working with image assets is a core part of a VTT GM's routine. The task is often repetitive; while there are many ways to work with assets, the best solution is whatever is easiest for you — be that automation, free websites, or lo-fi options that just get the job done.

### A note on Size

Many VTTs are used by vision-disabled players. Many VTTs are also used by players with slow internet speed. GMs should find a balance between image size (larger is better for low-vision players who need to zoom), and speed. I try to keep maps under 500kb, and tokens under 300. There is no one correct answer… it depends on your group; for example, some groups prefer gorgeous high-res maps that can be megabytes in size. Other groups prefer a lo-fi, snappier experience. 

Talk to your group, ask for feedback, and find out what works for them. 

### A note on Design

**Simpler is better.** Err on the side of simple, clear tokens. A beautiful token does no good if it is not recognizable.

**Use more than Border Colors to designate Tokens.** Roll20 and other VTTs have many options for naming tokens. In Play-by-Post / Google Slides, many GMs colorize tokens and forget their players may have vision disabilities such as colorblindness. There are a variety of options at your disposal to mitigate this and achiever clarity, such as numbering tokens, using dashed / solid / dotted borders, and masking shapes. 

**Consistency is Clarity.** Many GMs prefer to use square tokens for enemies, and round tokens for PCs. Whatever your table's preference, maintain consistency throughout your game. Your designs become a language of their own. 

## Extracting & Editing Images

All image editing requires unlocking your Paizo PDF. To unlock the PDF, export the pdf to pdf in Preview.app (macOS) or in Foxit reader (Windows) choose `File` => `Print` => `PDF`).

### Free: Acrobat Reader DC

1. Open the unlocked PDF in Acrobat reader DC
2. Right-Click the image
3. Select `Copy Image`
4. You can now paste the image into any app on your computer (e.g. Paint / Photoshop), or paste into Google Slides

The image may turn out upside-down or with a black background. If hat is the case, try one of the batch extraction tools below, which should work better. 

!!! question "Why is there a black background on my image?"
    PDFs don't support images with transparency. Instead publishers like Paizo use two images; is a transparency mask that mimics the desired effect. When you copy, you sometimes only get the RGB data and the background turns black. To fix this you need to get good at editing software such as Photoshop/Gimp, or use a free tool like the ones below to do the job for you. 

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

<figure markdown>
  <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/TemptingWellmadeBee?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>
  <figcaption>Extracting an image with transparency using Adobe CC products</figcaption>
</figure>

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

There are several free websites. I prefer [The Fateful Force](https://thefatefulforce.com/battle-resources/token-creator/) tokenizer.

### Free: Google Slides with Play-by-Post

If you have an image without transparency and are using Google Slides for your VTT, (for example, batch-extracted images with a white background), you can drag them onto Google slides and edit them to create tokens using the Slides masking tool.

1. Drag your image onto the slide
1. Select the image by clicking on it
1. Click the Mask button (it looks like a two right-angle lines intersecting to create a box)
1. The image should now be highlighted, with the corners and edges covered with thick dark lines
1. Drag the lines over the area you want removed from the token (you can also drag the image round behind the masking pane to adjust)
1. Hit `Enter.`
1. If you want a circular token, click on the Masks icon again and select `Shapes` => `Circle`
1. You can add a border and numbers if you want

<figure markdown>
  <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/gleefullonglacewing?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>
  <figcaption>Extracting an image with transparency using Adobe CC products</figcaption>
</figure>


### Free: Fateful Force

The [Fateful Force VTT Token Maker](https://thefatefulforce.com/battle-resources/token-creator/) is a simple-to-use token creator that has basic options as well as text. 

1. Drag your image onto the canvas
2. Select your border
3. Select your background (note, if your image doesn't have transparency this should match the background of your original art; often this is white [`#fff`])
4. Add text and scale the text if desired. Useful for multiple enemies of the same type. 
5. Download

<figure markdown>
  <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/MediumGraciousKomododragon?autoplay=0' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>
  <figcaption>Extracting an image with transparency using Adobe CC products</figcaption>
</figure>


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

<figure markdown>
  <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/inconsequentialbabyishhectorsdolphin?autoplay=0 frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>
  <figcaption>Extracting an image with transparency using Adobe CC products</figcaption>
</figure>

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

<figure markdown>
  <div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/ThriftySentimentalIceblueredtopzebra?autoplay=0'frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>
  <figcaption>Extracting an image with transparency using Adobe CC products</figcaption>
</figure>

## Maps

Maps can be extracted like images. When importing to a VTT like roll20, it is a good idea to first remove partial squares from the edges. This helps the map line up perfectly with the VTT's grid. You can use image editor to crop the image, or a free online editor such as [I love Image](https://www.iloveimg.com/crop-image) to crop your asset. 

After it is cropped, simply count the height and width in squares, and create your canvas in that size. 

### Maps on Google Slides

It is a best practice to use background images for Google Slides, however to avoid skewing they must be sized to fit. You can do this with image editing software like Photoshop, or online tools like [croppola](https://croppola.com). 