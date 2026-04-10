import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  text: {
    type: String,
    required: [true, "Please add some text"]
  },
  amount: {
    type: Number,
    required: [true, "Please add a positive or negative number"]
  },
  type: {
    type: String,
    enum: ["income", "expense"],
    required: true
  }
}, { timestamps: true });

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
