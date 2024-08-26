class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

const users = [
  new User(1, "John Doe", "john.doe@example.com", "password123"),
  new User(2, "Jane Smith", "jane.smith@example.com", "securePass456"),
  new User(3, "Alice Johnson", "alice.johnson@example.com", "alicePwd789"),
  new User(4, "Bob Brown", "bob.brown@example.com", "bobPassword101"),
];
