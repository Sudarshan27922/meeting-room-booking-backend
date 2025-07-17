/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: APIs to manage meeting room bookings
 */

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create a new booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       400:
 *         description: Validation or creation error
 */

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get all bookings with optional filtering
 *     tags: [Bookings]
 *     parameters:
 *       - in: query
 *         name: room
 *         schema:
 *           type: string
 *         description: Filter bookings by room ID
 *       - in: query
 *         name: user
 *         schema:
 *           type: string
 *         description: Filter bookings by user ID
 *       - in: query
 *         name: start
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter bookings with startDateTime on or after this date (YYYY-MM-DD)
 *       - in: query
 *         name: end
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter bookings with startDateTime on or before this date (YYYY-MM-DD)
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filter bookings by title (case-insensitive, partial match)
 *     responses:
 *       200:
 *         description: List of filtered bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     summary: Get a booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Booking MongoDB ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       400:
 *         description: Invalid ID format
 *       404:
 *         description: Booking not found
 */

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     summary: Update a booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Booking MongoDB ID
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Fields to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               startDateTime:
 *                 type: string
 *                 format: date-time
 *               endDateTime:
 *                 type: string
 *                 format: date-time
 *               guests:
 *                 type: integer
 *               recurrenceRule:
 *                 type: string
 *               recurrenceEndDate:
 *                 type: string
 *                 format: date-time
 *               amenities:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Booking updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       400:
 *         description: Invalid input or ID
 *       404:
 *         description: Booking not found
 */

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Delete a booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Booking MongoDB ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Booking not found
 */
