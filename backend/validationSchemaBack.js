const Joi = require('joi');

const validationSchema = Joi.object({
  title: Joi.string().min(2).max(30).required().messages({
    'string.base': 'Title must be a string',
    'string.min': 'Title must be at least 2 characters long',
    'string.max': 'Title must be at most 30 characters long',
    'any.required': 'Title is required'
  }),
  description: Joi.string().min(2).max(200).required().messages({
    'string.base': 'Description must be a string',
    'string.min': 'Description must be at least 2 characters long',
    'string.max': 'Description must be at most 200 characters long',
    'any.required': 'Description is required'
  }),
  price: Joi.number().min(1).max(9999).required().messages({
    'number.base': 'Price must be a number',
    'number.min': 'Price must be at least 1',
    'number.max': 'Price must be at most 9999',
    'any.required': 'Price is required'
  })
});

module.exports = validationSchema;