const express = require("express");
const router = express.Router();

const auth = require("../middleware/authorization");

const {
  signUp,
  signIn,
  verifyToken,
  update,
} = require("../controllers/auth.controller");

// Swagger schema
/**
 * @swagger
 * components:
 *  schemas:
 *    registerUser:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: The user name
 *        username:
 *          type: string
 *          description: The name on screen
 *        password:
 *          type: string
 *          description: The password of the user
 *        active:
 *          type: boolean
 *          description: Account active/inactive
 *      required:
 *        - name
 *        - username
 *        - password
 *      example:
 *        name: Dave Mustaine
 *        username: Peace seller
 *        password: imdave
 *        active: false
 *    loginUser:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          description: The name on screen
 *        password:
 *          type: string
 *          description: The password of the user
 *      required:
 *        - username
 *        - password
 *      example:
 *        username: Peace seller
 *        password: imdave
 *    token:
 *      type: object
 *      properties:
 *        token:
 *          type: string
 *      example:
 *        token: "token"
 */

// Register user
/**
 * @swagger
 * /api/user/register:
 *  post:
 *    summary: Create a new user
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/registerUser'
 *    responses:
 *      200:
 *        description: New user registered
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/registerUser'
 */
router.post("/register", signUp);

// Login user
/**
 * @swagger
 * /api/user/login:
 *  post:
 *    summary: Login to website
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/loginUser'
 *    responses:
 *      200:
 *        description: New user registered
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/token'
 */
router.post("/login", signIn);

// Verify token
/**
 * @swagger
 * /api/user/verifytoken:
 *   get:
 *     summary: Verify user token
 *     tags: [User]
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Token OK
 *       401:
 *         description: Invalid Token
 */
router.get("/verifytoken", auth, verifyToken);

// Update user data
/**
 * @swagger
 * /api/user/update:
 *  put:
 *    summary: Update user info
 *    tags: [User]
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/registerUser'
 *    responses:
 *      200:
 *        description: User info successfully updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/registerUser'
 *      401:
 *        description: Unauthorized
 */

router.put("/update", auth, update);

module.exports = router;
