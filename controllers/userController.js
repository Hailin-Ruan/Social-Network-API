const { User, Thought } = require("../models");

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a user
  async deleteUser(req, res) {
    try {
      const { userId } = req.params;

      // Find and delete the user by its id
      const user = await User.findByIdAndRemove(userId);

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      // Remove user from other users' friend lists
      await User.updateMany(
        { friends: userId },
        { $pull: { friends: userId } }
      );

      // Delete all thoughts associated with the user
      await Thought.deleteMany({ userId });

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a user
  async updateUser(req, res) {
    try {
      const { userId } = req.params;

      // Find and update the user by its id
      const user = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
      });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },


// Add a friend to the user's friend list
async addFriend(req, res) {
  try {
    const { userId, friendId } = req.params;

    // Check if the friendId is valid and not equal to the userId
    if (userId === friendId) {
      return res.status(400).json({ message: "Cannot add yourself as a friend." });
    }

    // Update the user's friend list by pushing the friendId
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { friends: friendId } }, // Using $addToSet to prevent duplicate friends
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "No user with that ID" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
},

// Remove a friend from the user's friend list
async removeFriend(req, res) {
  try {
    const { userId, friendId } = req.params;

    // Update the user's friend list by pulling the friendId
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: friendId } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "No user with that ID" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
},
};
