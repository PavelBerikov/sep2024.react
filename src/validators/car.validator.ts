import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base':'ER!'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min':'min 0',
        'number.max':'max 1million'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'year must be greater than 1990',
        'number.max':'year must be greater than 2025'
    }),
})