const express = require("express");
const router = express.Router();

const auth = require("../middleware/authorization");

const {
  findAll,
  findOne,
  create,
  update,
  remove,
} = require("../controllers/guitar.controller");

// Swagger schema
/**
 * @swagger
 * components:
 *  schemas:
 *    product:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: The guitar model
 *        description:
 *          type: string
 *          description: The guitar description
 *        currency:
 *          type: string
 *          description: The currency
 *        price:
 *          type: number
 *          description: The price of the guitar
 *      required:
 *        - name
 *        - description
 *        - currency
 *        - price
 *      example:
 *        name: Jackson King V
 *        description: Dave Mustaine's classic guitar
 *        currency: USD
 *        price: 1500
 */

// Read
/**
 * @swagger
 * /api/product/readall:
 *  get:
 *    summary: Find all products
 *    tags: [Product]
 *    responses:
 *      200:
 *        description: List of all products
 *      400:
 *        description: Error getting products
 */
router.get("/readall", findAll);

/**
 * @swagger
 * /api/product/readone/{id}:
 *  get:
 *    summary: Get information of a specific product
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product's unique identifier
 *    responses:
 *      200:
 *        description: Information of the specific product
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/product'
 *      404:
 *        description: Product not found
 */
router.get("/readone/:id", findOne);

/**
 * @swagger
 * /api/product/create:
 *  post:
 *    summary: Create a new product on DB
 *    tags: [Product]
 *    security:
 *      - ApiKeyAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/product'
 *    responses:
 *      200:
 *        description: Product successfully created
 *      400:
 *        description: Error creating a product
 */

router.post("/create", auth, create);

/**
 * @swagger
 * /api/product/update/{id}:
 *  put:
 *    summary: Delete a product
 *    tags: [Product]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product's unique identifier
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/product'
 *    responses:
 *      200:
 *        description: Product successfully updated
 *      404:
 *        description: Product not found
 */

router.put("/update/:id", auth, update);

/**
 * @swagger
 * /api/product/delete/{id}:
 *  delete:
 *    summary: Delete a product
 *    tags: [Product]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product's unique identifier
 *    responses:
 *      200:
 *        description: Product successfully deleted
 *      404:
 *        description: Product not found
 */

router.delete("/delete/:id", auth, remove);

module.exports = router;
