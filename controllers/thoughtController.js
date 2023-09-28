const { User, Thought } = require("../models");

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a thought
  async createThought(req, res) {
    try {
      const { userId } = req.body;
      const thought = await Thought.create(req.body);
      const user = await User.findByIdAndUpdate(
        userId,
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      res.status(201).json({ thought, user });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a thought
  async deleteThought(req, res) {
    try {
      const { thoughtId } = req.params;

      // Find and delete the thought by its id
      const thought = await Thought.findByIdAndRemove(thoughtId);

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      const user = await User.findByIdAndUpdate(
        thought.userId,
        { $pull: { thoughts: thoughtId } },
        { new: true }
      );

      res.json({ thought, user });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a thought
  async updateThought(req, res) {
    try {
      const { thoughtId } = req.params;

      const thought = await Thought.findByIdAndUpdate(thoughtId, req.body, {
        new: true,
      });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a reaction for thought
  async createReaction(req, res) {
    try {
      const { thoughtId } = req.params;
      const { reactionBody, username } = req.body;
  
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        {
          $push: {
            reactions: { reactionBody, username },
          },
        },
        { new: true }
      );
  
      if (!updatedThought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
  
      res.json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove a reaction by its reactionId
async removeReaction(req, res) {
  try {
    const { thoughtId, reactionId } = req.params;

    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $pull: {
          reactions: { reactionId },
        },
      },
      { new: true }
    );

    if (!updatedThought) {
      return res.status(404).json({ message: 'No thought with that ID' });
    }

    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
}
};
