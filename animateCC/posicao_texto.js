var firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

if (firefox && createjs)

{

  createjs.Text.prototype._drawTextLine = function(ctx, text, y)

  {

  // Adjust text position only if textBaseline is "top"

  if (this.textBaseline === "top")

  {

  var lineHeight = this.lineHeight || this.getMeasuredLineHeight();

  y += lineHeight * 0.2; // decrease number to move font up and increase to move down

  }

  // Chrome 17 will fail to draw the text if the last param is included but null, so we feed it a large value instead:

  if (this.outline) { ctx.strokeText(text, 0, y, this.maxWidth||0xFFFF); }

  else { ctx.fillText(text, 0, y, this.maxWidth||0xFFFF); }

  };

}

var chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

if (chrome && createjs)

{

  createjs.Text.prototype._drawTextLine = function(ctx, text, y)

  {

  // Adjust text position only if textBaseline is "top"

  if (this.textBaseline === "top")

  {

  var lineHeight = this.lineHeight || this.getMeasuredLineHeight();

  y += lineHeight * 0.2; // decrease number to move font up and increase to move down

  }

  // Chrome 17 will fail to draw the text if the last param is included but null, so we feed it a large value instead:

  if (this.outline) { ctx.strokeText(text, 0, y, this.maxWidth||0xFFFF); }

  else { ctx.fillText(text, 0, y, this.maxWidth||0xFFFF); }

  };

}
