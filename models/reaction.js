const { Schema, Types } = require('mongoose');

// Schema to create a Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId,
      // setting default value to a new ObjectId
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: [280, 'cannot have more than 280 characters, got {VALUE}'],
    },
    username: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function () {
        return this.createdAt.toISOString();
      },
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
