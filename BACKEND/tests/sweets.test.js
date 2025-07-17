const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const Sweet = require('../models/Sweet');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  await Sweet.deleteMany(); // clean state
});

test('POST /api/sweets - should add new sweet', async () => {
  const sweet = { id: 1, name: 'Ladoo', category: 'Candy', price: 10, quantity: 5 };
  const res = await request(app).post('/api/sweets').send(sweet);
  expect(res.statusCode).toBe(201);
  expect(res.body.name).toBe('Ladoo');
});

test('GET /api/sweets - should return all sweets', async () => {
  await Sweet.create({ id: 2, name: 'Kheer', category: 'Milk', price: 20, quantity: 10 });
  const res = await request(app).get('/api/sweets');
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(1);
  expect(res.body[0].name).toBe('Kheer');
});

test('DELETE /api/sweets/:id - should delete sweet', async () => {
  await Sweet.create({ id: 3, name: 'Jalebi', category: 'Candy', price: 15, quantity: 8 });
  const res = await request(app).delete('/api/sweets/3');
  expect(res.statusCode).toBe(204);
});

test('PATCH /api/sweets/:id - purchase reduces stock', async () => {
  await Sweet.create({ id: 4, name: 'Burfi', category: 'Milk', price: 25, quantity: 5 });
  const res = await request(app).patch('/api/sweets/4').send({ quantityChange: -3 });
  expect(res.body.quantity).toBe(2);
});

test('PATCH /api/sweets/:id - fails if not enough stock', async () => {
  await Sweet.create({ id: 5, name: 'Peda', category: 'Milk', price: 30, quantity: 2 });
  const res = await request(app).patch('/api/sweets/5').send({ quantityChange: -5 });
  expect(res.statusCode).toBe(400);
  expect(res.body.error).toMatch(/Insufficient stock/);
});

