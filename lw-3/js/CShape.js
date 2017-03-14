function CShape()
{
    this.fillColor = "#40f7f7";
    this.borderColor = "#0982f6";
}

CShape.prototype.setFillColor = function (value)
{
    this.fillColor = value;
};

CShape.prototype.setBorderColor = function (value)
{
    this.borderColor = value;
};

CShape.prototype.getFillColor = function ()
{
    return this.fillColor;
};

CShape.prototype.getBorderColor = function ()
{
    return this.borderColor;
};

CShape.prototype.draw = function(ctx)
{
};

CShape.prototype.calculateArea = function()
{
};

CShape.prototype.calculatePerimeter = function()
{
};
