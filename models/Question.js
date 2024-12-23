const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  type: { type: String, enum: ['Categorize', 'Cloze', 'Comprehension'], required: true },
  
  text: { type: String, required: true },
  image: { type: String },
  
  categories: [
    {
      name: { type: String, required: true },
      items: [{ type: String, required: true }]
    }
  ],

  blanks: [
    {
      position: { type: Number, required: true },
      answer: { type: String, required: true }
    }
  ],

  passage: { type: String },
  subQuestions: [
    {
      question: { type: String, required: true },
      options: [
        { type: String, required: true }
      ],
      answer: { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model('Question', QuestionSchema);
