const { Schema, model } = require('mongoose');

const reactionSchema = require('./reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: [280, 'cannot have more than 280 characters, got {VALUE}'],
      minlength: [1, 'Too few characters'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function () {
        return this.createdAt.toISOString();
      },
    },
    userName: {
      type: String,
      required: true,
    },
    // arrray of nested documents created with reactionSchema
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length.toString();
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
