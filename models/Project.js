const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    issue_title: { type: String, required: true },
    issue_text: { type: String, required: true },
    created_by: { type: String, required: true },
    assigned_to: String,
    open: { type: Boolean, default: true },
    priority: String,
    status_text: String,
  },
  {
    timestamps: {
      currentTime: () => new Date().toJSON(),
      createdAt: "created_on",
      updatedAt: "updated_on",
    },
  }
);

const projectSchema = new mongoose.Schema({
  project: { type: String, required: true },
  description: { type: String, required: true },
  issues: [issueSchema],
});

projectSchema.virtual("resolved").get(function () {
  let open = this.issues.filter((item) => item.open === true);
  return this.issues.length - open.length;
});

module.exports = mongoose.model("Project", projectSchema);
