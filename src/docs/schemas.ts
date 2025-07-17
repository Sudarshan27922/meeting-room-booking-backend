/**
 * @swagger
 * components:
 *   schemas:
 *     Room:
 *       type: object
 *       required:
 *         - name
 *         - location
 *         - capacity
 *       properties:
 *         _id:
 *           type: string
 *           description: MongoDB generated ID
 *           example: "60d0fe4f5311236168a109ca"
 *         name:
 *           type: string
 *           description: Unique room name
 *           example: "Conference Room A"
 *         location:
 *           type: string
 *           description: Room location or floor
 *           example: "3rd Floor"
 *         capacity:
 *           type: integer
 *           description: Max number of people
 *           example: 10
 *         isAC:
 *           type: boolean
 *           description: Whether room has AC or not
 *           default: false
 *           example: true
 *         amenities:
 *           type: array
 *           items:
 *             type: string
 *           description: List of amenities in the room
 *           example: ["Projector", "Whiteboard", "Conference Phone"]
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when room was created
 *           example: "2023-07-13T12:34:56Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when room was last updated
 *           example: "2023-07-14T08:00:00Z"
 *
 *     Booking:
 *       type: object
 *       required:
 *         - user
 *         - room
 *         - title
 *         - startDateTime
 *         - endDateTime
 *         - guests
 *       properties:
 *         _id:
 *           type: string
 *           description: MongoDB generated ID
 *           example: "60d0fe4f5311236168a109cb"
 *         user:
 *           type: string
 *           description: User ID who booked the room
 *           example: "60d0fe4f5311236168a109ca"
 *         room:
 *           type: string
 *           description: Room ID booked
 *           example: "60d0fe4f5311236168a109cb"
 *         title:
 *           type: string
 *           description: Booking title or meeting subject
 *           example: "Team Sync Meeting"
 *         description:
 *           type: string
 *           description: Optional detailed description of the booking
 *           example: "Discuss project progress and blockers"
 *         startDateTime:
 *           type: string
 *           format: date-time
 *           description: Booking start datetime
 *           example: "2025-07-15T10:00:00Z"
 *         endDateTime:
 *           type: string
 *           format: date-time
 *           description: Booking end datetime
 *           example: "2025-07-15T11:00:00Z"
 *         guests:
 *           type: integer
 *           description: Number of guests attending
 *           example: 5
 *         recurrenceRule:
 *           type: string
 *           description: Recurrence rule (iCalendar RRULE string)
 *           example: "FREQ=WEEKLY;BYDAY=MO,WE,FR"
 *         recurrenceEndDate:
 *           type: string
 *           format: date-time
 *           description: Date recurrence ends
 *           example: "2025-09-15T00:00:00Z"
 *         amenities:
 *           type: array
 *           items:
 *             type: string
 *           description: List of requested amenities
 *           example: ["Projector", "Whiteboard"]
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Booking creation timestamp
 *           example: "2025-07-01T09:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Booking last updated timestamp
 *           example: "2025-07-10T12:00:00Z"
 *
 *     RegisterUser:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           example: "johndoe"
 *         email:
 *           type: string
 *           format: email
 *           example: "johndoe@example.com"
 *         password:
 *           type: string
 *           format: password
 *           example: "strongPassword123"
 *
 *     LoginUser:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "johndoe@example.com"
 *         password:
 *           type: string
 *           format: password
 *           example: "strongPassword123"
 *
 *     AuthTokens:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *           description: JWT access token
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         refreshToken:
 *           type: string
 *           description: JWT refresh token
 *           example: "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4..."
 *
 *     LoginResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: "Login successful"
 *         data:
 *           type: object
 *           properties:
 *             user:
 *               type: object
 *               description: User details (without password)
 *               example: { id: "60d0fe4f5311236168a109ca", username: "johndoe", email: "johndoe@example.com" }
 *             accessToken:
 *               type: string
 *               example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *
 *     RefreshTokenResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         accessToken:
 *           type: string
 *           description: New JWT access token
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 */
