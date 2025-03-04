
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  topic: 'python' | 'statistics' | 'data_science' | 'machine_learning' | 'sql';
  difficulty: 'easy' | 'medium' | 'hard';
}

// Python Questions
export const pythonQuestions: Question[] = [
  {
    id: 1,
    topic: 'python',
    difficulty: 'easy',
    question: "What is the difference between a list and a tuple in Python?",
    options: [
      "Lists use parentheses while tuples use square brackets",
      "Lists are mutable while tuples are immutable",
      "Tuples can store different data types, lists cannot",
      "Lists are ordered while tuples are unordered"
    ],
    correctAnswerIndex: 1,
    explanation: "Lists are mutable (can be changed) while tuples are immutable (cannot be changed). Lists use square brackets [] and tuples use parentheses ()."
  },
  {
    id: 2,
    topic: 'python',
    difficulty: 'medium',
    question: "What will be the output of the following code?\n\nmy_list = [1, 2, 3, 4]\nprint(my_list[-2])",
    options: [
      "2",
      "3",
      "4",
      "Error"
    ],
    correctAnswerIndex: 1,
    explanation: "In Python, negative indexing starts from the end of the list. my_list[-1] refers to the last element (4), so my_list[-2] refers to the second last element, which is 3."
  },
  {
    id: 3,
    topic: 'python',
    difficulty: 'medium',
    question: "Which of the following is not a valid way to create a list in Python?",
    options: [
      "my_list = []",
      "my_list = list()",
      "my_list = list([1, 2, 3])",
      "my_list = (1, 2, 3)"
    ],
    correctAnswerIndex: 3,
    explanation: "The syntax my_list = (1, 2, 3) creates a tuple, not a list. To create a list, you should use square brackets [] or the list() constructor."
  },
  {
    id: 4,
    topic: 'python',
    difficulty: 'hard',
    question: "What's the time complexity of the following Python operation?\n\nmy_list = [0] * n",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    correctAnswerIndex: 2,
    explanation: "Creating a list with n elements using the * operator has a time complexity of O(n), as Python needs to allocate memory for each of the n elements."
  },
  {
    id: 5,
    topic: 'python',
    difficulty: 'hard',
    question: "What will the following code print?\n\ndef func(x=[]):\n    x.append(1)\n    return x\n\nprint(func())\nprint(func())",
    options: [
      "[1] and [1]",
      "[1] and [1, 1]",
      "[1, 1] and [1, 1, 1]",
      "Error"
    ],
    correctAnswerIndex: 1,
    explanation: "In Python, default arguments are evaluated only once when the function is defined, not each time the function is called. So the list x is created once and reused in each call. The first call appends 1 to the empty list, returning [1]. The second call appends 1 to the already modified list, returning [1, 1]."
  }
];

// Statistics Questions
export const statisticsQuestions: Question[] = [
  {
    id: 1,
    topic: 'statistics',
    difficulty: 'easy',
    question: "What is the difference between a population and a sample?",
    options: [
      "A population is small while a sample is large",
      "A population includes all members of a defined group, while a sample is a subset",
      "A population is theoretical while a sample is practical",
      "They are different names for the same concept"
    ],
    correctAnswerIndex: 1,
    explanation: "A population includes all members of a defined group, while a sample is a subset of the population selected for study. Samples are used to make inferences about the larger population."
  },
  {
    id: 2,
    topic: 'statistics',
    difficulty: 'medium',
    question: "Which of the following is true about the Central Limit Theorem?",
    options: [
      "It states that all samples must be normally distributed",
      "It works only when the original population is normally distributed",
      "It states that the sampling distribution of the mean approaches a normal distribution as sample size increases",
      "It requires at least 100 samples to be applicable"
    ],
    correctAnswerIndex: 2,
    explanation: "The Central Limit Theorem states that the sampling distribution of the mean approaches a normal distribution as the sample size increases, regardless of the population's distribution. This is fundamental to statistical inference."
  },
  {
    id: 3,
    topic: 'statistics',
    difficulty: 'medium',
    question: "Which of the following best describes a Type I error?",
    options: [
      "Failing to reject a false null hypothesis",
      "Rejecting a true null hypothesis",
      "Failing to reject a true null hypothesis",
      "Rejecting a false null hypothesis"
    ],
    correctAnswerIndex: 1,
    explanation: "Type I error is rejecting a true null hypothesis (false positive), while Type II error is failing to reject a false null hypothesis (false negative)."
  },
  {
    id: 4,
    topic: 'statistics',
    difficulty: 'hard',
    question: "In maximum likelihood estimation (MLE), what are we trying to find?",
    options: [
      "The parameters that maximize the probability of observing the data given the model",
      "The data that maximizes the model's parameters",
      "The model that maximizes the probability of the parameters",
      "The maximum number of parameters needed for the model"
    ],
    correctAnswerIndex: 0,
    explanation: "Maximum likelihood estimation is a method that determines values for the parameters of a model by maximizing a likelihood function. It finds the parameter values that make the observed data most probable given the model."
  },
  {
    id: 5,
    topic: 'statistics',
    difficulty: 'hard',
    question: "Which of the following is a key difference between Bayesian and Frequentist statistics?",
    options: [
      "Bayesian statistics can only be used with categorical data",
      "Frequentist methods are always more computationally efficient",
      "Bayesian statistics interprets probability as a degree of belief, while Frequentist interprets it as a long-run frequency",
      "Bayesian methods cannot use prior information"
    ],
    correctAnswerIndex: 2,
    explanation: "Frequentist statistics interprets probability as the long-run frequency of events in repeated experiments, while Bayesian statistics interprets probability as a degree of belief that can be updated with new evidence."
  }
];

// Data Science Questions
export const dataScienceQuestions: Question[] = [
  {
    id: 1,
    topic: 'data_science',
    difficulty: 'easy',
    question: "Which of the following best describes supervised learning?",
    options: [
      "Learning where the algorithm is given labeled training data",
      "Learning where the algorithm finds patterns in unlabeled data",
      "Learning where the algorithm receives feedback through rewards",
      "Learning where the dataset is supervised by experts"
    ],
    correctAnswerIndex: 0,
    explanation: "Supervised learning uses labeled data to train models that can predict outcomes for new data. Examples include classification and regression."
  },
  {
    id: 2,
    topic: 'data_science',
    difficulty: 'medium',
    question: "What problem does the curse of dimensionality often cause?",
    options: [
      "Decreased computational speed only",
      "Data becomes sparse in high-dimensional spaces, making statistical significance difficult",
      "Memory overflow on standard computers",
      "Inability to visualize more than 3 dimensions"
    ],
    correctAnswerIndex: 1,
    explanation: "The curse of dimensionality refers to various phenomena that arise when analyzing data in high-dimensional spaces. As dimensionality increases, the volume of the space increases exponentially, and the available data becomes sparse."
  },
  {
    id: 3,
    topic: 'data_science',
    difficulty: 'medium',
    question: "What is the primary purpose of cross-validation in machine learning?",
    options: [
      "To increase the training dataset size",
      "To validate credentials of data scientists",
      "To evaluate model performance on data it hasn't seen during training",
      "To cross-check different algorithms against each other"
    ],
    correctAnswerIndex: 2,
    explanation: "Cross-validation is a resampling procedure used to evaluate machine learning models on limited data. It helps detect overfitting and provides a more accurate measure of model prediction performance."
  },
  {
    id: 4,
    topic: 'data_science',
    difficulty: 'hard',
    question: "Which type of regularization is more likely to produce sparse models with some coefficients exactly zero?",
    options: [
      "L1 (Lasso) regularization",
      "L2 (Ridge) regularization",
      "Dropout regularization",
      "Batch normalization"
    ],
    correctAnswerIndex: 0,
    explanation: "L1 (Lasso) regularization can lead to sparse models with some coefficients becoming exactly zero, effectively performing feature selection. L2 (Ridge) regularization typically makes coefficients small but non-zero."
  },
  {
    id: 5,
    topic: 'data_science',
    difficulty: 'hard',
    question: "In the bias-variance tradeoff, which of the following is true?",
    options: [
      "High bias and high variance are both desirable",
      "Low bias and low variance are both achievable with enough data",
      "High bias typically leads to overfitting",
      "High variance typically leads to underfitting"
    ],
    correctAnswerIndex: 1,
    explanation: "In the bias-variance tradeoff, high bias typically leads to underfitting (not overfitting), while high variance leads to overfitting. The goal is to find the model complexity that minimizes total error."
  }
];

// Machine Learning Questions
export const machineLearningQuestions: Question[] = [
  {
    id: 1,
    topic: 'machine_learning',
    difficulty: 'easy',
    question: "What's the main advantage of Random Forest over a single Decision Tree?",
    options: [
      "Random Forests are always faster to train",
      "Random Forests reduce overfitting by averaging multiple decision trees",
      "Random Forests can handle categorical features while Decision Trees cannot",
      "Random Forests require less memory"
    ],
    correctAnswerIndex: 1,
    explanation: "Random Forests reduce overfitting compared to individual decision trees by averaging multiple trees, reducing variance while maintaining the low bias of decision trees."
  },
  {
    id: 2,
    topic: 'machine_learning',
    difficulty: 'medium',
    question: "What problem does gradient descent solve in machine learning?",
    options: [
      "It prevents overfitting",
      "It normalizes input features",
      "It finds parameter values that minimize the loss function",
      "It selects the best features for the model"
    ],
    correctAnswerIndex: 2,
    explanation: "Gradient descent is an optimization algorithm used to minimize a function by iteratively moving toward the minimum of the function's gradient. In machine learning, it's used to find the parameter values that minimize the loss function."
  },
  {
    id: 3,
    topic: 'machine_learning',
    difficulty: 'medium',
    question: "What is backpropagation in neural networks?",
    options: [
      "A technique to initialize weights in reverse order",
      "An algorithm to compute gradients and update weights during training",
      "A method to propagate inputs through the network backwards",
      "A way to reduce network depth"
    ],
    correctAnswerIndex: 1,
    explanation: "Backpropagation is an algorithm that computes the gradient of the loss function with respect to each weight by the chain rule, moving backward from the output. It's used to update weights during neural network training."
  },
  {
    id: 4,
    topic: 'machine_learning',
    difficulty: 'hard',
    question: "What does the kernel trick accomplish in Support Vector Machines?",
    options: [
      "It reduces computation time by simplifying the decision boundary",
      "It allows SVMs to work with fewer support vectors",
      "It enables SVMs to find non-linear decision boundaries without explicitly computing transformations",
      "It combines multiple SVMs into an ensemble model"
    ],
    correctAnswerIndex: 2,
    explanation: "The kernel trick allows SVMs to operate in a high-dimensional space without explicitly computing the coordinates, by using kernel functions that compute dot products in that space. This enables SVMs to find non-linear decision boundaries."
  },
  {
    id: 5,
    topic: 'machine_learning',
    difficulty: 'hard',
    question: "Which ensemble method typically builds models sequentially, with each new model correcting errors made by previous ones?",
    options: [
      "Bagging (e.g., Random Forest)",
      "Boosting (e.g., AdaBoost, Gradient Boosting)",
      "Stacking",
      "Simple averaging"
    ],
    correctAnswerIndex: 1,
    explanation: "Boosting methods like AdaBoost and Gradient Boosting build models sequentially, with each new model focusing on correcting the errors made by previous models. This differs from bagging methods like Random Forest, which build models independently."
  }
];

// SQL Questions
export const sqlQuestions: Question[] = [
  {
    id: 1,
    topic: 'sql',
    difficulty: 'easy',
    question: "Which JOIN type returns only the matching rows from both tables?",
    options: [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL OUTER JOIN"
    ],
    correctAnswerIndex: 2,
    explanation: "INNER JOIN returns only the matching rows from both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, while RIGHT JOIN does the opposite."
  },
  {
    id: 2,
    topic: 'sql',
    difficulty: 'medium',
    question: "What's the correct order of execution for the following SQL clauses?",
    options: [
      "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY",
      "FROM, SELECT, WHERE, GROUP BY, HAVING, ORDER BY",
      "FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY",
      "SELECT, FROM, GROUP BY, WHERE, HAVING, ORDER BY"
    ],
    correctAnswerIndex: 1,
    explanation: "The logical order of SQL query processing is: FROM (and JOINs), WHERE, GROUP BY, HAVING, SELECT, ORDER BY. This is why you can't reference aliases created in the SELECT clause in your WHERE clause."
  },
  {
    id: 3,
    topic: 'sql',
    difficulty: 'medium',
    question: "When would you use a HAVING clause instead of a WHERE clause?",
    options: [
      "When you need to filter based on calculated aggregate values",
      "When you need to filter multiple conditions",
      "When you want to improve query performance",
      "When you're using a subquery"
    ],
    correctAnswerIndex: 0,
    explanation: "You use HAVING to filter groups based on aggregate function results (like COUNT, SUM, AVG) after GROUP BY, while WHERE filters individual rows before grouping."
  },
  {
    id: 4,
    topic: 'sql',
    difficulty: 'hard',
    question: "What's a key advantage of using Common Table Expressions (CTEs)?",
    options: [
      "They're always faster than subqueries",
      "They can be used to write recursive queries",
      "They automatically create indexes",
      "They enforce data integrity constraints"
    ],
    correctAnswerIndex: 1,
    explanation: "One key advantage of CTEs is their ability to write recursive queries, which is particularly useful for hierarchical or tree-structured data like organizational charts or bill of materials."
  },
  {
    id: 5,
    topic: 'sql',
    difficulty: 'hard',
    question: "What's the difference between a correlated and non-correlated subquery?",
    options: [
      "Correlated subqueries are faster",
      "Non-correlated subqueries can only return single values",
      "Correlated subqueries reference columns from the outer query",
      "Non-correlated subqueries can only be used in the WHERE clause"
    ],
    correctAnswerIndex: 2,
    explanation: "A correlated subquery references columns from the outer query and must be re-evaluated for each row processed by the outer query. A non-correlated subquery is independent of the outer query and executes once."
  }
];

// All questions combined for convenience
export const allQuestions: { [key: string]: Question[] } = {
  python: pythonQuestions,
  statistics: statisticsQuestions,
  data_science: dataScienceQuestions,
  machine_learning: machineLearningQuestions,
  sql: sqlQuestions
};

// Map for displaying friendly topic names
export const topicNames: { [key: string]: string } = {
  python: "Python",
  statistics: "Statistics",
  data_science: "Data Science",
  machine_learning: "Machine Learning",
  sql: "SQL"
};
