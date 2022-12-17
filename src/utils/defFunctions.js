export const definitions = [{
  "display_name": "brightness",
  "category": "adjustment",
  "expects": [
    {
      "type": "integer",
      "suggested_range": {
        "min": -100,
        "max": 100
      }
    }
  ],
  "initValue": 0,
  "param": "bri",
  "short_description": "Adjusts the brightness of the source image."
},{
  "display_name": "contrast",
  "category": "adjustment",
  "expects": [
    {
      "type": "integer",
      "suggested_range": {
        "min": -100,
        "max": 100
      }
    }
  ],
  "initValue": 0,
  "param": "con",
  "short_description": "Adjusts the contrast of the source image."
},{
  "display_name": "exposure",
  "category": "adjustment",
  "expects": [
    {
      "type": "integer",
      "suggested_range": {
        "min": -100,
        "max": 100
      }
    }
  ],
  "initValue": 0,
  "param": "exp",
  "short_description": "Adjusts the exposure of the output image."
},{
  "display_name": "gamma",
  "category": "adjustment",
  "expects": [
    {
      "type": "integer",
      "suggested_range": {
        "min": -100,
        "max": 100
      }
    }
  ],
  "initValue": 0,
  "param": "gam",
  "short_description": "Adjusts the gamma of the source image."
},{
  "display_name": "highlight",
  "category": "adjustment",
  "expects": [
    {
      "type": "integer",
      "suggested_range": {
        "min": -100,
        "max": 0
      }
    }
  ],
  "initValue": 0,
  "param": "high",
  "short_description": "Adjusts the highlights of the source image."
},{
  "display_name": "hue shift",
  "category": "adjustment",
  "expects": [
    {
      "type": "integer",
      "suggested_range": {
        "min": 0,
        "max": 360
      }
    }
  ],
  "initValue": 0,
  "param": "hue",
  "short_description": "Adjusts the hue of the source image."
},{
  "display_name": "invert",
  "category": "adjustment",
  "expects": [
    {
      "type": "boolean"
    }
  ],
  "initValue": false,
  "param": "invert",
  "short_description": "Inverts the colors on the source image."
},{
  "display_name": "saturation",
  "category": "adjustment",
  "expects": [
    {
      "type": "integer",
      "suggested_range": {
        "min": -100,
        "max": 100
      }
    }
  ],
  "initValue": 0,
  "param": "sat",
  "short_description": "Adjusts the saturation of an image."
},{
  "display_name": "shadow",
  "category": "adjustment",
  "expects": [
    {
      "type": "number",
      "suggested_range": {
        "min": 0,
        "max": 100
      }
    }
  ],
  "initValue": 0,
  "param": "shad",
  "short_description": "Adjusts the highlights of the source image."
},{
  "display_name": "sharpen",
  "category": "adjustment",
  "expects": [
    {
      "type": "number",
      "suggested_range": {
        "min": 0,
        "max": 100
      }
    }
  ],
  "initValue": 0,
  "param": "sharp",
  "short_description": "Adjusts the sharpness of the source image."
},{
  "display_name": "unsharp mask",
  "category": "adjustment",
  "expects": [
    {
      "type": "integer",
      "suggested_range": {
        "min": -100,
        "max": 100
      }
    }
  ],
  "initValue": 0,
  "param": "usm",
  "short_description": "Sharpens the source image using an unsharp mask."
},{
  "display_name": "unsharp mask radius",
  "category": "adjustment",
  "expects": [
    {
      "type": "number",
      "suggested_range": {
        "min": 0,
        "max": 500
      }
    }
  ],
  "initValue": 2.5,
  "param": "usmrad",
  "short_description": "Specifies the radius for an unsharp mask operation."
},{
  "display_name": "vibrance",
  "category": "adjustment",
  "expects": [
    {
      "type": "integer",
      "suggested_range": {
        "min": -100,
        "max": 100
      }
    }
  ],
  "initValue": 0,
  "param": "vib",
  "short_description": "Adjusts the vibrance of an image."
},
{
  "display_name": "flip",
  "category": "rotation",
  "expects": [
    {
      "type": "string",
      "possible_values": [
        "h",
        "v",
        "hv"
      ]
    }
  ],
  "param": "flip",
  "short_description": "Flips an image on a specified axis."
},{
  "display_name": "orientation",
  "category": "rotation",
  "expects": [
    {
      "type": "integer",
      "possible_values": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        90,
        180,
        270
      ]
    }
  ],
  "param": "orient",
  "short_description": "Changes the image orientation."
},{
  "display_name": "rotation",
  "category": "rotation",
  "expects": [
    {
      "type": "number",
      "suggested_range": {
        "min": 0,
        "max": 359
      }
    }
  ],
  "initValue": 0,
  "param": "rot",
  "short_description": "Rotates an image by a specified number of degrees."
}]