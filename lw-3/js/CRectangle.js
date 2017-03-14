function CRectangle()
{
    CShape.apply(this, arguments);
    this.x1 = 10;
    this.x2 = 80;
    this.y1 = 10;
    this.y2 = 40;
}

CRectangle.prototype = Object.create(CShape.prototype);
CRectangle.prototype.constructor = CRectangle;

CRectangle.prototype.setCoordinates = function(x1, x2, y1, y2)
{
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
};

CRectangle.prototype.draw = function(ctx)
{
    ctx.fillStyle = this.getFillColor();
    ctx.fillRect(this.x1, this.y1, Math.abs(this.x1 - this.x2), Math.abs(this.y1 - this.y2));
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.getBorderColor();
    ctx.strokeRect(this.x1, this.y1, Math.abs(this.x1 - this.x2), Math.abs(this.y1 - this.y2));
};

CRectangle.prototype.calculateArea = function()
{
    return (Math.abs(this.x1 - this.x2) * Math.abs(this.y1 - this.y2)).toFixed(2);
};

CRectangle.prototype.calculatePerimeter = function()
{
    return ((Math.abs(this.x1 - this.x2) * 2) + (Math.abs(this.y1 - this.y2) * 2)).toFixed(2);
};
