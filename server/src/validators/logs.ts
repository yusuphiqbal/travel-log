import { body } from 'express-validator';

export const create = () => [
  body('title')
    .notEmpty()
    .withMessage('Please enter the title of the log entry.'),
  body('rating')
    .optional({ nullable: true })
    .isFloat({ min: 1, max: 5 })
    .withMessage('Rating must be a number between from 1 to 5.'),
  body('latitude')
    .isFloat({ min: -90, max: 90 })
    .withMessage('Latitude value must be from -90 to 90.'),
  body('longitude')
    .isFloat({ min: -180, max: 180 })
    .withMessage('Latitude value must be from -180 to 180.'),
  body('comments').optional({ nullable: true }),
  body('visitDate')
    .isISO8601()
    .withMessage('Please enter the visit date as ISO string.'),
  body('description').optional({ nullable: true }),
  body('image')
    .optional({ nullable: true })
    .isURL()
    .withMessage('Please enter a valid image URL.'),
];
