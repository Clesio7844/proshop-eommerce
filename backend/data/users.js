import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Jose Delgado',
    email: 'jose@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Daniel Rita',
    email: 'Daniel@example.com',
    password: bcrypt.hashSync('123456', 10)
  }
];

export default users;
